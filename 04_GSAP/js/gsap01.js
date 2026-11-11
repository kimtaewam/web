 document.addEventListener("DOMContentLoaded", (event) => {
  //플러그인 등록 하는것(ScrollTrigger 사용하려면 무조건 등록 되어있어야함.)
  gsap.registerPlugin(ScrollTrigger);


  //1. 기본 to /from / fromto
  //1) to : 지금상태 -> 목표상태
gsap.to('.box_to',{
  x : 200, //x 축으로 200px 이동하는것
  duration : 2, //2s 동안 실행
  ease: "power2.out",
});

//2) from : 어디서 등장할래?(처음에 x:-200에 있다가 원래 자리로 오게만듦)
gsap.from('.box_from',{
  x : -200,
  opacity:0.2,
  duration:1.5,
});


//3)
gsap.fromTo('.box_from_to',{
  scale:0,
},{
  scale:1.2,
  rotate:360,
  duration:1.5,
});



//2. 옵션 6총사 : 버튼 클릭 이벤트
document.getElementById('btn_run').addEventListener('click',()=>{
  gsap.to('.dot',{
    x:400,
    duration:2,
    delay:0.2, //0.2초 동안 쉬고 출발
    repeat:1,   //1번 반복 (총 2번 실행), 무한 반복(-1), 반복없음(0) : 기본 값
    yoyo:true, //animation-direction:alternate 처럼 되돌아오기
    ease: "bounce.out", //속도 곡선
   });
});

   /* 3. stagger + ScrollTrigger */
    //같은 셀렉터로 여러 요소가 선택될때 (NodeList, HTMLCollection,배열형태)
    //stagger : 단일 요소에는 의미없음
    gsap.from('.chips li',{
      y:50,
      opacity:0,
      duration:0.6,
      stagger:0.15, //요소들이 0.15초 간격으로 순서대로 실행
    })
 });//end