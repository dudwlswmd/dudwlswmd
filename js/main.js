
  // const tabMenu = document.querySelectorAll('.tabMenu li');
        // const tabBody = document.querySelectorAll('.tabBody li');
        // const tabBodybu = document.querySelector('.tabBody');

        // let num = 0;

        // tabMenu.forEach(function(e,index){
        //     e.addEventListener('click',function(){
        //         tabBody[num].classList.remove('active');
        //         tabMenu[num].classList.remove('active');
        //         this.classList.add('active');
        //         tabBodybu.classList.add('active')
        //         // this.parentNode.add('active')   

        //         num=index;
        //         tabBody[num].classList.add('active');



        //     });
        // });

        
        // const tabMenu = document.querySelectorAll('.tabMenu li');
        // const tabBody = document.querySelectorAll('.tabBody li');
        // const tabBodybu = document.querySelector('.tabBody');

        // let num = 0;

        // tabMenu.forEach(function (e, index) {
        // e.addEventListener('click', function () {
        //         if (this.classList.contains('active')) {
        //             this.classList.remove('active');
        //             tabBodybu.classList.remove('active');
        //             tabBody[num].classList.remove('active');
        //             num = 0;
        //             } else {
        //             tabBody[num].classList.remove('active');
        //             tabMenu[num].classList.remove('active');
        //             this.classList.add('active');
        //             tabBodybu.classList.add('active');
        //             num = index;
        //             tabBody[num].classList.add('active');

        //             if (num === tabMenu.length) {
        //                 num = 0;
        //             }
        //         }
        //     });
        // });


        // const tabMenu = document.querySelectorAll('.tabMenu li');
        // const tabBody = document.querySelectorAll('.tabBody li');
        // const tabBodybu = document.querySelector('.tabBody');
        // const gnb = document.querySelector('.gnb');

        // let num = 0;

        // tabMenu.forEach(function (e, index) {
        // e.addEventListener('click', function () {
        //     if (this.classList.contains('active')) {
        //     this.classList.remove('active');
        //     tabBodybu.classList.remove('active');
        //     tabBody[num].classList.remove('active');
        //     gnb.style.backgroundColor = '#ffd900';
        //     num = 0;
        //     } else {
        //     tabBody[num].classList.remove('active');
        //     tabMenu[num].classList.remove('active');
        //     this.classList.add('active');
        //     tabBodybu.classList.add('active');
        //     gnb.style.backgroundColor = '#000';
        //     num = index;
        //     tabBody[num].classList.add('active');
        //     }
        // });
        // });


// const tabMenu = document.querySelectorAll('.tabMenu li');
// const tabBody = document.querySelectorAll('.tabBody li');
// const tabBodya = document.querySelectorAll('.tabBody li a');
// const tabBodybu = document.querySelector('.tabBody');
// const gnb = document.querySelector('.gnb');

// let num = 0;

// tabMenu.forEach(function (e, index) {
//   e.addEventListener('click', function () {
//     if (this.classList.contains('active')) {
//       this.classList.remove('active');
//       tabBodybu.classList.remove('active');
//       tabBody[num].classList.remove('active');
//       gnb.style.backgroundColor = '#ffd900';
//       num = 0;
//     } else {
//       tabBody[num].classList.remove('active');
//       tabMenu[num].classList.remove('active');
//       this.classList.add('active');
//       tabBodybu.classList.add('active');
//       gnb.style.backgroundColor = '#fff';
//       num = index;
//       tabBody[num].classList.add('active');

//       if (num === tabMenu.length) {
//         num = 0;
//       }
//     }
//   });
// });


// const tabMenu = document.querySelectorAll('.tabMenu li');
// const tabBody = document.querySelectorAll('.tabBody li');
// const tabMenua = document.querySelectorAll('.tabMenu li a');
// const tabBodybu = document.querySelector('.tabBody');
// const gnb = document.querySelector('.gnb');

// let num = 0;
// const defaultColor = '#000'; // 원래 폰트 색상
// const clickedColor = '#ffd900'; // 클릭 시 폰트 색상

// tabMenu.forEach(function (e, index) {
//   e.addEventListener('click', function () {
//     if (this.classList.contains('active')) {
//       this.classList.remove('active');
//       tabBodybu.classList.remove('active');
//       tabBody[num].classList.remove('active');
//       gnb.style.backgroundColor = clickedColor;
//       tabMenua.forEach(function(a) {
//         a.style.color = defaultColor;
//       });
//       num = 0;
//     } else {
//       tabBody[num].classList.remove('active');
//       tabMenu[num].classList.remove('active');
//       this.classList.add('active');
//       tabBodybu.classList.add('active');
//       gnb.style.backgroundColor = '#000';
//       tabMenua.forEach(function(a) {
//         a.style.color = clickedColor;
//       });
//       num = index;
//       tabBody[num].classList.add('active');

//       if (num === tabMenu.length) {
//         num = 0;
//       }
//     }
//   });
// });



/* 헤더 이벤트 */


// let pos = { y:0, oy:0, status:true }   // 현재y, 과거y, boolean(true-내림/ false-올림)
// window.onscroll = function(){  
//   pos.y = window.scrollY;       //현재 스크롤값
//   // console.log(pos)
//   //console.log(window.scrollY);
//   pos.status = pos.oy < pos.y;  
//   //현재 스크롤값이 과거 스크롤 값보다 컸을때 true
  
//   if(pos.status){
//     header.classList.add('on')
//   } else {
//     header.classList.remove('on')
//   }
// }










const tabMenu = document.querySelectorAll('.tabMenu > li');
const tabBody = document.querySelectorAll('.tabBody > li');
const tabBodyli = document.querySelector('.tabBody');
const tabBodyItems = tabBodyli.querySelectorAll('li');
const tabMenua = document.querySelectorAll('.tabMenu > li > a');
const tabBodybu = document.querySelector('.tabBody');
const gnb = document.querySelector('.gnb');

let num = 0;
const defaultColor = '#000';
const clickedColor = '#ffd900';

// 모든 탭 메뉴 아이템에 대해 opacity 값을 0.5로 설정하는 함수
function removeOpacity() {
  tabMenua.forEach(function(a) {
    if (!a.classList.contains('clicked')) {
      a.style.opacity = 0.5;
    }
  });
}

tabMenua.forEach(function (e, index) {
  
  e.addEventListener('click', function (event) {
    if (index === 1 || index === 2) { // 인덱스 1,2번
      // window.location.href = e.querySelector('a').getAttribute('href'); // redirect to the link
      this.classList.remove('active');
      console.log('링크타고들어가라')
      return; // exit the function to prevent showing tab content
      
    }
    if (this.classList.contains('active')) { // 현재 탭이 이미 활성화된 경우
      this.classList.remove('active'); // 탭 메뉴에서 활성화 클래스 제거
      tabBodybu.classList.remove('active'); // 탭 내용에서 활성화 클래스 제거
      tabBody[num].classList.remove('active'); // 현재 활성화된 탭 내용에서 활성화 클래스 제거
      gnb.style.backgroundColor = clickedColor; // gnb 배경색 변경
      gnb.classList.remove('active'); // gnb에 활성화 클래스 제거
      event.preventDefault(); // 상단 이동 기본 동작 막기

      tabMenua.forEach(function(a) {
       // a.style.color = defaultColor; // 모든 탭 메뉴 항목의 글자색을 기본색상으로 설정
        a.classList.remove('clicked'); // 모든 탭 메뉴 항목에서 clicked 클래스 제거
        a.style.opacity = 0.5; // 모든 탭 메뉴 항목의 불투명도 값을 0.5로 설정
      });
      //num = 0;
    } else { // 현재 탭이 활성화되어 있지 않은 경우
    event.preventDefault(); // 상단 이동 기본 동작 막기

      tabBody[num].classList.remove('active'); // 현재 활성화된 탭 내용에서 활성화 클래스 제거
      tabMenua[num].classList.remove('active'); // 현재 활성화된 탭 메뉴에서 활성화 클래스 제거
      this.classList.add('active'); // 클릭한 탭 메뉴에서 활성화 클래스 추가
      tabBodybu.classList.add('active'); // "All" 탭 내용에서 활성화 클래스 추가
      gnb.style.backgroundColor = '#000'; // gnb 배경색 변경
      gnb.classList.add('active'); // gnb에 활성화 클래스 추가
      //   logoc.src('img/logo-1und1_w.svg');

      // tabMenua.forEach(function(a) {
      //   if (a === e.querySelector('a')) { // 현재 클릭한 탭 메뉴 항목과 같은 항목인 경우
      //     a.style.color = clickedColor; // 글자색을 클릭된 상태의 색상으로 변경
      //     a.classList.add('clicked'); // clicked 클래스 추가
      //   } else { // 다른 탭 메뉴 항목인 경우
      //     a.style.color = defaultColor; // 글자색을 기본색상으로 설정
      //     a.classList.remove('clicked'); // clicked 클래스 제거
      //   }
      //   a.style.opacity = 0.5; // 불투명도 값을 0.5로 설정
      // });
      removeOpacity(); // 나머지 탭 메뉴 항목의 불투명도 값을 0.5로 설정하는 함수 호출
      tabMenua[index].style.opacity = 1; // 클릭한 탭 메뉴 항목의 불투명도 값을 1로 설정
      num = index; // 활성화된 탭 인덱스 값을 저장
      tabBody[num].classList.add('active'); // 클릭한 탭 내용에서 활성화 클래스 추가


      // if (num === tabMenu.length) {
      //   num = 0;
      // }
    }
  });

  e.addEventListener('mouseover', function () {
    if (!this.classList.contains('active')) {
      removeOpacity();  // 모든 탭 메뉴 아이템에 대해 opacity 값을 0.5로 설정
      tabMenua[index].style.opacity = 1;  // 호버한 탭 메뉴 아이템에 대해 opacity 값을 1로 설정
    }
  });

  e.addEventListener('mouseout', function () {
    if (!this.classList.contains('active')) {
      tabMenua.forEach(function(a) {
        a.style.opacity = 1;  // 모든 탭 메뉴 아이템에 대해 opacity 값을 0.5로 설정
      });
    }
  });
});

tabMenua.forEach(function (e, index) {
  // ...

  e.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      // ...
      console.log('닫힐때 이미지변경')
      document.querySelector('#logoc').src = 'img/logo-1und1_w.svg'; // 탭이 닫힐 때 이미지 변경
    } else {
      // ...
      document.querySelector('#logoc').src = 'img/logo-1und1_s.svg'; // 탭이 열릴 때 이미지 변경
    }
  });

  // ...
});

tabMenu.forEach(function (e, index) {
  e.addEventListener('mouseover', function () {
      tabMenu[index].classList.add('on'); 
      if (index === 1 || index === 2) {
        tabMenua[index].style.pointerEvents='auto'
      }
  });
  e.addEventListener('mouseleave', function () {
      tabMenu[index].classList.remove('on'); 
  });
});








let pos = { y:0, oy:0, status:true }   // 현재y, 과거y, boolean(true-내림/ false-올림)
const topBtn = document.querySelector('.topBtn')
const header =document.querySelector('header')



window.addEventListener('scroll',function(){
  pos.status = pos.oy < pos.y; 
    if(this.window.scrollY > 100){  
        header.classList.add('on');
        // tabMenu.classList.add('on')
        // console.log(tabMenu)
      tabBodybu.classList.remove('active'); // 탭 내용에서 활성화 클래스 제거
      gnb.style.backgroundColor = clickedColor; // gnb 배경색 변경
      gnb.classList.remove('active'); // gnb에 활성화 클래스 제거
      document.querySelector('#logoc').src = 'img/logo-1und1_s.svg'; // 탭이 닫힐 때 이미지 변경

      bngBtn.classList.remove('on')//버튼 엑스를 햄버거로 바꿔준다.
      tabMenuOn.classList.remove('on')//스크롤내렸을때 메뉴없애준다.

      for (let i = 0; i < tabMenua.length; i++) {
        tabMenua[i].classList.remove('active'); // 탭 내용에서 활성화 클래스 제거
      }
      for (let i = 0; i < tabBodyItems.length; i++) {
        tabBodyItems[i].classList.remove('active'); // 탭 내용에서 활성화 클래스 제거
      }
      tabMenua.forEach(function(a) {
        a.style.opacity = 1;  // 모든 탭 메뉴 아이템에 대해 opacity 값을 0.5로 설정
      });

    }else{
      if(this.window.scrollY > 500 || this.window.scrollY > pos.status){
        header.classList.remove('on')
        // tabMenu.classList.remove('on')

      }
    }
});



//top 탑버튼
topBtn.addEventListener('click',()=>{
  window.scrollTo({
    top:0, behavior:"smooth" });
})






//스크롤 내려갔을때 GNB

// tabMenuaOn.forEach(function (e, index) {

//   e.addEventListener('mouseenter',function(){
//     console.log('마우스오버')
//     this.classList.add('cusernone')
//   })

// });

// tabMenuaOn.addEventListener('mouseover',function(e){
//   console.log('마우스오버')
//   e.classList.add('cusernone')
// })



tabMenu[0].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  tabMenua[0].innerText="  뉴 스  "
});
tabMenu[0].addEventListener('mouseout', function () {
  tabMenua[0].innerText="NEWS"
});
tabMenu[1].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  tabMenua[1].innerText="돌문 TV"
});
tabMenu[1].addEventListener('mouseout', function () {
  tabMenua[1].innerText="BVB-TV"
});
tabMenu[2].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  tabMenua[2].innerText="쇼 핑"
});
tabMenu[2].addEventListener('mouseout', function () {
  tabMenua[2].innerText="SHOP"
});
tabMenu[3].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  tabMenua[3].innerText=" 티 켓 팅 "
});
tabMenu[3].addEventListener('mouseout', function () {
  tabMenua[3].innerText="TICKETS"
});
tabMenu[4].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  tabMenua[4].innerText=" 스케줄 "
});
tabMenu[4].addEventListener('mouseout', function () {
  tabMenua[4].innerText="SPIELE"
});

tabMenu[5].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  tabMenua[5].innerText=" 선수단 정보 "
});
tabMenu[5].addEventListener('mouseout', function () {
  tabMenua[5].innerText="MANNSCHAFTEN"
});
tabMenu[6].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  tabMenua[6].innerText=" 팬 클럽 "
});
tabMenu[6].addEventListener('mouseout', function () {
  tabMenua[6].innerText="FANS"
});
tabMenu[7].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  tabMenua[7].innerText="BVB 역사 "
});
tabMenu[7].addEventListener('mouseout', function () {
  tabMenua[7].innerText="DER BVB"
});
tabMenu[8].addEventListener('mouseover', function () {
  // this.innerHTML="<a href>뉴스</a>"
  tabMenua[8].innerText="파트너들 / 환영 "
});
tabMenu[8].addEventListener('mouseout', function () {
  tabMenua[8].innerText="PARTNER / HOSPITALITY"
});









let headerTop = document.querySelector('.header_top');
let headerTopBtn = document.querySelector('.header_top button');
let bngBtn = document.querySelector('.bng_btn,.bng_btn span');
let tabMenuOn = document.querySelector('.tabMenu');




//모바일에서 헤더 on off

headerTopBtn.addEventListener('click', function () {
  
    if (headerTop.classList.contains('on')) {
      headerTop.classList.remove('on')
    } else {
      headerTop.classList.add('on')
    
    }
  });

  bngBtn.addEventListener('click', function () {
      
      if (this.classList.contains('on') ) {
        // topBtn.style.border = '4px solid #000';

        this.classList.remove('on')
        tabMenuOn.classList.remove('on')
        gnb.style.backgroundColor = clickedColor; // gnb 배경색 변경
        document.querySelector('#logoc').src = 'img/logo-1und1_s.svg'; // 탭이 닫힐 때 이미지 변경
        tabBodybu.classList.remove('active'); // 탭 내용에서 활성화 클래스 제거
        

        for (let i = 0; i < tabBodyItems.length; i++) {
          tabBodyItems[i].classList.remove('active'); // 탭 내용에서 활성화 클래스 제거
          console.log('확인',tabBody)

        }
        

      } else {
        this.classList.add('on')
        tabMenuOn.classList.add('on')
        gnb.style.backgroundColor = defaultColor; // gnb 배경색 변경
        document.querySelector('#logoc').src = 'img/logo-1und1_w.svg'; // 탭이 닫힐 때 이미지 변경
        topBtn.style.border = '4px solid #fff';
      
      }
  });


//모바일 gnb서브 뒤로가기

let backBtn = document.querySelectorAll('.backBtn');
// backBtn.addEventListener('click', function (e) {
//   tabBody[num].classList.remove('active'); // 현재 활성화된 탭 내용에서 활성화 클래스 제거
//   tabBodybu.classList.remove('active'); // 탭 내용에서 활성화 클래스 제거
  
//   });

  backBtn.forEach(function (e, index) {
  
    e.addEventListener('click', function (e) {
      e.preventDefault(); // 상단으로 이동하는 기본 동작 막기
      tabBody[index].classList.remove('active'); // 현재 활성화된 탭 내용에서 활성화 클래스 제거
      tabBodybu.classList.remove('active'); // 탭 내용에서 활성화 클래스 제거
      tabMenu[index].classList.remove('active'); // 현재 활성화된 탭 메뉴에서 활성화 클래스 제거
      // console.log('확인111',index);
      // console.log('확인',tabMenu[index]);
    });
  
  });


//플레이어
  var players = new Swiper({
    el: '.swiper-container.players',
    slidesPerView : 8,
    slides:13,
    initialSlide: 0,
    spaceBetween: 0,// 슬라이드간 간격/
    //slidesPerGroup:5,// 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
    //slidesPerView: 2,
    centeredSlides: false,
    slideToClickedSlide: true,
    grabCursor: true,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    mousewheel: {
        enabled: true,
    },
    
    keyboard: {
        enabled: true,
    },
    // pagination: {
    //     el: '.swiper-pagination',
    // },
    navigation: {
        nextEl: '.swiper-button-next.players',
        prevEl: '.swiper-button-prev.players',
    },
  
    on:{
      init:function(){
    //     importData();
    
      }
    },
  
    breakpoints: {
      // 화면의 넓이가 1500px 이상일 때
      1500: {
        slidesPerView: 6,
        spaceBetween: 0
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 0
      },    
      700: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 0
      },
    }
  
  });
  



//랭킹

var swiper = new Swiper({
  el: '.swiper-container.ranking_list',
  slidesPerView : 8,
  initialSlide: 0,
  spaceBetween: 0,// 슬라이드간 간격/
  //slidesPerGroup:5,// 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  //slidesPerView: 2,
  centeredSlides: false,
  slideToClickedSlide: true,
  grabCursor: true,
  scrollbar: {
      el: '.swiper-scrollbar',
  },
  mousewheel: {
      enabled: true,
  },
  keyboard: {
      enabled: true,
  },
  // pagination: {
  //     el: '.swiper-pagination',
  // },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // 화면의 넓이가 1500px 이상일 때
    1500: {
      slidesPerView: 6,
      spaceBetween: 0
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 0
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 0
    },    
    700: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 0
    },
  }
});


//메인비주얼
var visu = new Swiper({
  el: '.visual',
  
  speed : 300,
  slidesPerView : 1,
//  touchRatio: 0,//드래그 금지
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: true,
// },
  // initialSlide: 0,
  spaceBetween: 0,// 슬라이드간 간격/
  //slidesPerGroup:5,// 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  //slidesPerView: 2,
  loop : true,   // 슬라이드 반복 여부
  // centeredSlides: false,
  // slideToClickedSlide: false,
  // grabCursor: false,
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },
  mousewheel: {
      enabled: false,//스크롤링
  },
  // keyboard: {
  //     enabled: true,
  // },

  navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
  },
  pagination: { // 호출(pager) 여부
    el: ".swiper-pagination", //버튼을 담을 태그 설정
    clickable: true, // 버튼 클릭 여부
    renderBullet: function (index, className) {
      return `<li class="${className}"><img src="img/baner0${[index+1]}.jpg" alt=""></li>`
    },
  },

});







