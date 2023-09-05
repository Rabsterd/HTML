/*
document.getElementById("inputId").addEventListener("change", function() {

    const regExp1 = /^[a]\w\d-_{6,14}$/;

    // 빈칸인지 검사
    if(this.value.length == 0) {
        input.innerText = "";
        return;
    }

    // 유효성 검사
    if(regExp1.test(this.value)) {
        input.style.backgroundColor = "spinggreen";
    } else {
        input.style.backgroundColor = "red";
        input.style.color = "white";
    }

})


document.getElementById("inputPwConfirm").addEventListener("focus", function() {

    if(inputPw.value.length == 0) {
        this.innerText = "";
        alert("비밀번호를 입력해주세요");
        focus.inputPw;
    }

})

document.getElementById("inputPw").addEventListener("keyup", function() {

    if( test(inputPw == inputPwConfirm) ) {
        span.innerText = "비밀번호 일치";
        span.style.color = "green";
    } else {
        span.innerText = "비밀번호 불일치";
        span.style.color = "red";
    }

})

document.getElementById("inputName").addEventListener("change", function() {

    const regExp2 = /^[가-힣]{2,5}$/;

    if(regExp2.test(this.value)) {
        span.innerText = "정상입력";
        span.style.color = "green";
    } else {
        span.innerText = "한글만 입력하세요"
        span.style.color = "red";
    }

})

document.getElementById("submit").addEventListener("click", function() {

    if()

})

*/


// 답

//회원가입 객체 생성
const checkObj = {
    "inputId" : false, // 아이디
    "inputPw" : false, // 비밀번호
    "inputPwConfirm" : false, // 비번확인
    "inputName" : false, // 이름
    "gender" : false, // 성별
    "inputTel" : false // 전화번호
}

// 아이디
document.getElementById("inputId").addEventListener("change", function() {

    const regExp = /^[a-z][\w-_]{5,13}$/;
                    // 소문자시작(1) + 나머지(5~13) = 6~14글자
   

    // 유효성 검사
    if(regExp.test(this.value)) {
        this.style.backgroundColor = "springgreen";
        this.style.color = "black";
        checkObj.inputId = true;
    } else {
        this.style.backgroundColor = "red";
       this.style.color = "white";
        checkObj.inputId = false;
    }
})


//비밀번호
const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");

inputPwConfirm.addEventListener("keyup", function() {

    if(inputPw.value.length == 0) {
        this.value = "";
        alert("비밀번호를 입력해주세요");
        inputPw.focus();
        checkObj.inputPw = false; 
    }

});


const pwMessage = document.getElementById("pwMessage");

inputPw.addEventListener("keyup", function() {

    if( (inputPw.value == inputPwConfirm.value) && inputPw.value.length != 0 ) {
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");
        checkObj.inputPw = true;
        checkObj.inputPwConfirm = true;
    } else {
        pwMessage.innerText="비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
        checkObj.inputPwConfirm = false;
    }

});

inputPwConfirm.addEventListener("keyup", function() {
    if( (inputPw.value == inputPwConfirm.value) && inputPw.value.length != 0 ) {
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");
        checkObj.inputPw = true;
        checkObj.inputPwConfirm = true;
    } else {
        pwMessage.innerText="비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
        checkObj.inputPwConfirm = false;
    }

})


// 이름
document.getElementById("inputName").addEventListener("change", function() {

    const regExp = /^[가-힣]{2,5}$/;

    const nameMessage = document.getElementById("nameMessage");

    if(regExp.test(this.value)) {
        nameMessage.innerText = "정상입력";
        nameMessage.classList.add("confirm");
        nameMessage.classList.remove("error");
        checkObj.inputName = true;
    } else{
        nameMessage.innerText = "한글만 입력하세요";
        nameMessage.classList.add("error");
        nameMessage.classList.remove("confirm");
        checkObj.inputName = false;
    }

});

//성별, 전화번호
function validate() {

    const gender = document.getElementsByName("gender");

    if(!gender[0].checked && !gender[1].checked) {
        alert("성별을 선택해주세요");
        checkObj.gender = false;

        return false;
    } else {
        checkObj.gender = true;
    }

    const inputTel = document.getElementById("inputTel");
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(!regExp.test(inputTel.value)) {
        alert("전화번호의 형식이 올바르지 않습니다");
        checkObj.inputTel = false;
        return false;
    } else {
        checkObj.inputTel = true;
    }

    //checkObj가 전부 true일 때 == 모든 유효성검사를 통과했을 때 ==> 회원가입
    for(let key in checkObj) {
        if( !checkObj[key] ) { // 1) checkObj["inputTel"] ==> false
            return false;
        }
    }

    alert("회원가입 완료");
    return true;
}

