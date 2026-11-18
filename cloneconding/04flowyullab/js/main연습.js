//햄버거 메뉴
const header = document.querySelector('header');

document.getElementById('ham_menu').addEventListener('click', function () {
  header.classList.toggle('on');
});

//메인 히어로
const mainSlide = new Swiper('.main_visual .swiper', {
  //마지막 슬라이드 다음에 다시 첫 슬라이드로 이어지게 하는것
  loop: true,
  //자동으로 다음 슬라이드로 넘어가게 하는것
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  //메인 비주얼 안에있는 이전/다음 버튼만 사용하게 정확히 범위를 잡습니다.
  navigation: {
    nextEl: '.main_visual .right',
    prevEl: '.main_visual .left',
  },
});

//메인 슬라이드의 재생/일시정지 버튼
const toggleBtn = document.querySelector('.btn_box span');

toggleBtn.addEventListener('click', function () {
  if (mainSlide.autoplay.running) {
    //자동 재생중이면 멈추고 아이콘을 재생 모양으로 바꿉니다
    mainSlide.autoplay.stop();
    this.innerText = 'play_arrow';
  } else {
    //멈춘 상태면 다시 재생하고 아이콘을 일시정지 모양으로 바꿉니다
    mainSlide.autoplay.start();
    this.innerText = 'pause'
  };
});

//현재 슬라이드 번호가 들어갈 자리임.
const numEl = document.querySelector('.main_visual .pager .txt_box .num');

//전체 슬라이드 갯수가 들어갈 자리임.
const totalEl = document.querySelector('.main_visual .pager .txt_box span:last-of-type')

//swiper는 loop를 쓰면 복제 슬라이드를 만듭니다.
//그래서 복제본을 빼고 진짜 술라이드만 세어야 전체 갯수가 맞습니다.
