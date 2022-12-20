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