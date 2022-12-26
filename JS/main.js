const memuEl = document.querySelector('.menu');
const menuItemEl = document.querySelector('ul.sub-menu');
const backGrdEl = document.querySelector('.menu-item-background');

console.log(memuEl);
console.log(menuItemEl);
console.log(backGrdEl);

memuEl.addEventListener('mouseover', function () {
  backGrdEl.style.display = 'block';
});

memuEl.addEventListener('mouseleave', function () {
  backGrdEl.style.display = 'none';
});


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  // 메소드 체이닝
  new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 감시할 요소를 지정
    triggerHook: 0.8 // 화면의 80% 지점에서 보여짐 여부 감시(0~1 사이 지정)
  })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당
});



let wasCountDown = 0;
window.addEventListener('scroll', function () {
  
  if (window.scrollY > 1400 && wasCountDown== 0) {
    countUp();
    wasCountDown = 1;
  }

  if (window.scrollY < 700 && wasCountDown == 1) {
    wasCountDown = 0
  }

  function countUp() { 
    let count1 = 1900;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    const countEl1 = document.querySelector('.count-no1');
    const countEl2 = document.querySelector('.count-no2');
    const countEl3 = document.querySelector('.count-no3');
    const countEl4 = document.querySelector('.count-no4');
    const countEl5 = document.querySelector('.count-no5');  

    let id1 = setInterval(function(){no1_change()},1000/122);
    let id2 = setInterval(function(){no2_change()},1000/99);
    let id3 = setInterval(function(){no3_change()},1000/99);
    let id4 = setInterval(function(){no4_change()},1000/26);
    let id5 = setInterval(function(){no5_change()},1000/21);

    function no1_change() {
      count1 = count1 + 1;
      if(count1 > 2022) {
        clearInterval(id1);
      } else {
        countEl1.innerHTML = `${count1}년`;
      }      
    }

    function no2_change() {
      count2 = count2 + 1;
      if(count2 > 99) {
        clearInterval(id2);
      } else {
        countEl2.innerHTML = `${count2}억`;
      }      
    }

    function no3_change() {
      count3 = count3 + 1;
      if(count3 > 99) {
        clearInterval(id3);
      } else {
        countEl3.innerHTML = `${count3}개`;
      }      
    }

    function no4_change() {
      count4 = count4 + 1;
      if(count4 > 26) {
        clearInterval(id4);
      } else {
        countEl4.innerHTML = `${count4}개`;
      }      
    }

    function no5_change() {
      count5 = count5 + 1;
      if(count5 > 21) {
        clearInterval(id5);
      } else {
        countEl5.innerHTML = `${count5}명`;
      }      
    }

  }
})


new Swiper('.production-webQuotation365-dist .swiper', {
  direction: 'horizontal', 
  loop: true, 
  autoplay: { // 자동 재생 여부
  delay: 3500 // 5초마다 슬라이드 바뀜
  },
  
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  // },

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});



new Swiper('.production-webQuotation365 .swiper', {
  direction: 'horizontal', 
  loop: true, 
  autoplay: { // 자동 재생 여부
  delay: 3500 // 5초마다 슬라이드 바뀜
  },
  
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  // },

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});