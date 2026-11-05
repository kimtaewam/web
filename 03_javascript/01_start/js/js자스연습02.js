document.getElementById('btn_alert').onclick = () => {
  alert('이것은 alert()으로 띄운 알림 메시지 입니다');
}
document.getElementById(`btn_prompt1`).onclick = () => {
    const nickName = prompt(`닉네임을 입력하세요`, `김태완`);
    document.getElementById(`ioResult`).innerHTML = nickName;
}

document.getElementById('btn_prompt2').onclick = () => {
    const age = prompt('나이를 입력하세요');
    document.getElementById('ioResult').innerHTML = age + ' 기본값 없음';
}

document.getElementById(`btn_confirm`).onclick = () => {
    const isSure = confirm(`자스 할만하냐`);
    let text = isSure ? `할만함` : `죽을맛`;
    document.getElementById(`ioResult`).innerHTML = text;
}

const output = `<strong>식(Expression) 예제 결과</strong><br>`;
const greeting = `안녕하세요`
const isAdult = 20 >= 18
const num1 = prompt(`첫번째 숫자 입력`)
const num2 = prompt(`두번째 숫자 입력`)
const sum = Number(num1) + Number(num2)


document.getElementById(`btn_expression`).onclick = () => {
    const resultHtml = output + sum + ' / ' + greeting + ' ' + isAdult;
    document.getElementById(`result_output2`).innerHTML = resultHtml;
    document.querySelector('.pre_wrap2').classList.remove(`on`);
    document.querySelector('.pre_wrap1').classList.add(`on`);
}

document.getElementById(`btn_statement`).onclick = () =>{
    const output = `<strong>문(Statement) 예제 실행</strong><br>`
    let output2;
    if (sum > 5){
        output2 = sum + ` 값이 5보다 큽니다`;
    }else{
        output2 + sum + ` 값이 5이하 입니다`;
    }
    document.getElementById(`result_output2`).innerHTML = output + output2;
    document.querySelector(`pre_wrap1`).classList.remove(`on`);
    document.querySelector(`pre_wrap2`).classList.add(`on`);
}