/*
// 버튼 클릭 시 commentList 함수 호출, idNum 전달
$("[id^='commentButton']").click(function () {
    let idValue = $(this).attr("id");
    let idNum = idValue.slice(13);
    commentList(idNum);
});
*/

// 버튼 클릭 시 commentWrite 함수 호출, idNum 전달
$("[id^='commentWrite']").click(function () {
    let idValue = $(this).attr("id");
    let idNum = idValue.slice(12);
    commentWrite(idNum); //
});


/*
// 댓글 확인 탭
async function commentList(idNum) {
    let commentPage = document.getElementById(`commentList${idNum}`);
    commentPage.innerHTML = "";

    // db에서 데이터 가져오기
    let doc = await getDocs(
        query(
            collection(db, "comments"),
            where("id", "==", idNum),
            orderBy("date", "desc")
        )
    );

    console.log(doc); // 디버깅용 로그 3

    // 가져온 데이터 변수로 지정
    doc.forEach((doc) => {
        let data = doc.data();
        let nickname = data['nickname'];
        let comment = data['comment'];
        let temp_html = `
                <ul>
                    <li><img src="asset/img/anonymous.webp" alt="익명 프로필 이미지"></li>
                    <li>
                        <div class="nick_name">${nickname}님의 댓글</div>
                        <div class="comment_des">${comment}</div>
                    </li>
                </ul>
                `;
        // id가 commentList로 시작하는 html태그에 추가
        $(`#commentList${idNum}`).append(temp_html);
    });
}
*/

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
            id: idNum,
            nickname: nickname,
            comment: comment
        }),
        success: function (response) {
            console.log("댓글 등록");
            $(`#comment${idNum}`).val("");
        },
        error: function (err) {
            console.log("에러");
        },
    });
}
