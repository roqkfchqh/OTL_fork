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
