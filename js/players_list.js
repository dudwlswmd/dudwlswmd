const soccerPlayer = new Swiper('.swiper-container', {//'swiper-container' 클래스가 있는 div를 상자로 설정하고, 'players' 클래스를 포함하는 div에 옵션을 넣는다.

    el: '.swiper-container.players',
    slidesPerView : 8,
    initialSlide: 0,
    spaceBetween: 0,
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
    navigation: {
        nextEl: '.swiper-button-next.players',
        prevEl: '.swiper-button-prev.players',
    },

    breakpoints: {
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

fetch('../data.json')
        .then(response => response.json())//json을 스크립트로 활용할수있게 만든다
        .then(soccer => {
            soccer.data.forEach((elLi)=>{
                const { img, id, name } = elLi;
                const ul = document.querySelector('.swiper-wrapper.list_bu');
                const newLi = document.createElement('li');
                newLi.classList.add('swiper-slide');
                newLi.innerHTML=
                `
                <div>
                    <a href="#">
                        <div class="img">
                            <img src="${img}" alt="">
                            <p class="p1"><span></span></p>
                            <p class="p2"></p>
                            <p class="p3"></p>
                            <p class="p4"></p>
                        </div>
                        <dl>
                            <dt><span>${id}</span><span>${name}</span></dt>
                            <dd></dd>
                        </dl>
                    </a>
                </div>
                `;
                ul.append(newLi)
            });
            soccerPlayer.update();

}).catch(error => console.error(error));


//li만들어서 ul에 넣어주는 함수
// const createItem = function(a){
//      // console.log(a);
//      const players = document.querySelector('.swiper-container.players');
//      const ul = document.querySelector('.swiper-wrapper.list_bu');
//      const li = document.createElement('li');
//      const img = document.createElement('img');

//      // img.setAttribute('src',a.img);
//      li.className='swiper-slide';

//      li.innerHTML=
//      `
//      <div>
//           <a href="#">
//                <div class="img">
//                     <img src="${a.img}" alt="">
//                     <p class="p1"><span></span></p>
//                     <p class="p2"></p>
//                     <p class="p3"></p>
//                     <p class="p4"></p>
//                </div><!--img : END-->
//                <dl>
//                     <dt><span>${a.id}</span><span>${a.name}</span></dt>
//                     <dd></dd>
//                </dl>
//           </a>
//      </div>
//      `;

//      ul.append(li)

//      console.log(li)

// }
//만든 li들을 반복
// const importData = function(){
//      products.data.map(function(product){
//           if( !document.getElementById(product.id) ){//계속 추가되는거 방지 //아이디 값이 이미 있을때는 작동❌
//                createItem( product );
//           }else{
//                //alert('끝!!!');
//           }
//      })
// }

// button.addEventListener('click',importData);
// importData();


//플레이어들





