// 1.dlert 예제
document.getElementById('btn_alert').onclick = () =>{
  alert('이것은 alert()으로 띄운 알림 메세지 입니다')
}

// 2.prompt 예제
// prompt('입력내용','입력내용 초기값')
document.getElementById('btn_prompt1').onclick = () =>{
  const nickname = prompt('닉네임을 입력하세요','잘생겼다');
  // console.log(nickname);
  document.getElementById('ioResult').innerHTML = nickname;
}

