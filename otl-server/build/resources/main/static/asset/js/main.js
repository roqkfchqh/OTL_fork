import { io } from "socket.io-client"

const socket = io("http://localhost:8080/ws",{
    transports: ["websocket"],
});

socket.on("connect", () => {
    console.log("websocket 연결됨");
});

socket.on("/topic/public", (chat) => {
    console.log("채팅", chat)
})

let stompClient = null;

function connect() {
    const socket = new SockJS('/ws'); // '/ws'는 Spring 서버의 WebSocket 엔드포인트
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);

        // 서버에서 보내는 메시지 구독
        stompClient.subscribe('/topic/public', function (message) {
            showMessage(JSON.parse(message.body)); // 메시지를 처리하는 함수 호출
        });
    });
}

function sendMessage() {
    const chatMessage = {
        id: id,
        comment: $(`#chatMessage`).val(),
        date: Date()
    };

    stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
    $(`#chatMessage`).val(""); // 메시지 입력 필드 초기화
}

// 페이지 로드 시 WebSocket 연결
$(document).ready(function () {
    connect();

    // 메시지 보내기 버튼 클릭 이벤트
    $("#chat_send").click(function () {
        if (!$(`#chatMessage`).val()) {
            alert("비어있잖아...");
            return;
        }
        sendMessage();
    });
});

// 서버에서 받은 메시지 출력
function showMessage(message) {
    // 메시지를 화면에 추가하는 로직
    console.log("받은 메시지: ", message);
}


/* 현재 날짜 출력 */
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("today_date").innerHTML = new Date().toLocaleDateString('ko-KR', options);

// 버튼 클릭 시 commentList 함수 호출, idNum 전달
$("[id^='commentButton']").click(function () {
    let idValue = $(this).attr("id");
    let idNum = idValue.slice(13);
    commentList(idNum);
});

// 버튼 클릭 시 commentWrite 함수 호출, idNum 전달
$("[id^='commentWrite']").click(function () {
    let idValue = $(this).attr("id");
    let idNum = idValue.slice(12);
    commentWrite(idNum); //
});

// 댓글 확인 탭
async function commentList(idNum) {
    let commentPage = document.getElementById(`commentList${idNum}`);
    commentPage.innerHTML = "";

    $.ajax({
        url: `/api/comments`,
        type: "GET",
        contentType: "application/json",
        success: function(response){
            response.forEach((comment) => {
                let temp_html = `
                <ul>
                    <li><img src="asset/img/anonymous.webp" alt="익명 프로필 이미지"></li>
                    <li>
                        <div class="nick_name">${comment.nickname}님의 댓글</div>
                        <div class="comment_des">${comment.comment}</div>
                    </li>
                </ul>
                `;
                $(`#commentList0${comment.userId}`).append(temp_html);
                console.log(comment);
            });

        },
        error: function(e){
            console.error("댓글 실패요", e);
        }
    })
}


// 댓글 작성 탭
async function commentWrite(idNum) {
    let nickname = $(`#nickname${idNum}`).val();
    let comment = $(`#comment${idNum}`).val();
    // 값이 없는 경우 alert, 실행 종료
    if (!nickname || !comment) {
        alert("닉네임과 댓글 내용을 모두 입력해주세요.");
        return;
    }
    $.ajax({
        url: `/api/comments`,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            userId: idNum,
            nickname: nickname,
            comment: comment
        }),
        success: function (response) {
            commentList(idNum);
            $(`#comment${idNum}`).val("");
        },
        error: function (e) {
            console.log("에러", e);
        },
    });
}
