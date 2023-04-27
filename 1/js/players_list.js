




// import products from "../data.json" assert{type:'json'}


fetch('../data.json')
     .then(response => response.json())
     .then(dataaaa => {
          // 데이터 처리 로직
          let obj = Object.values(dataaaa.data);
          const ul = document.querySelector('.swiper-wrapper.list_bu');
          obj.forEach((el)=>{
          const li = document.createElement('li');
          li.className='swiper-slide ';
          
          li.innerHTML=
          `
          <div>
               <a href="#">
                    <div class="img">
                         <img src="${el.img}" alt="">
                         <p class="p1"><span></span></p>
                         <p class="p2"></p>
                         <p class="p3"></p>
                         <p class="p4"></p>
                    </div><!--img : END-->
                    <dl>
                         <dt><span>${el.id}</span><span>${el.name}</span></dt>
                         <dd></dd>
                    </dl>
               </a>
          </div>
          `;
     
          ul.append(li)


          
     })
}).catch();



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





