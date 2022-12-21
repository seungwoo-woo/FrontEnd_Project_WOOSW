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