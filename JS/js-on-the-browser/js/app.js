// 1. The Document Object
// document는 Javascript에서 HTML에 접근할 수 있는 방법이다.
// JavaScript에서 HTML의 항목들을 읽어올 수 있다.
// 즉, HTML에 항목들을 추가할 수도 있다.

// 2. HTML in Javascript
// getElemetnBy란 함수를 통해 id로 element를 가져올 수 있다.
// document에서 항목들을 가져 오는 것
// 가져 온 document 항목들을 변경하는 것
const title = document.getElementById('title');
console.log(title);
console.dir(title);

title.innerText = 'Got you!';

console.log(title.id);
console.log(title.className);

// 3. Searching for elements
// 많은 element를 한번에 가져 와야하는 경우엔 getElementByClassName을 사용하면 된다.
// getElementBy는 array 타입으로 반환한다.
// querySelector는 element를 CSS 방식으로 검색할 수 있다.
// querySelector는 조건에 맞는 요소들이 여러 개 있어도 첫번째 요소만 가져 온다.
// 조건에 부합하는 모든 elements를 가져오려면 querySelectorAll을 사용해야 된다. array로 반환함.
const hellos = document.getElementsByClassName('hello');
const title = document.querySelector('.hello h1');

// 4. Events
// addEventListener()를 통해 event를 listen할 수 있다.
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement
// document.dir로 속성들을 살펴볼 때 on... 형식으로 되어 있는 속성들이 모두 eventlistener다.
const title = document.querySelector('div.hello:first-child');

title.style.color = 'blue';

function handleTitleClick() {
    title.innerText = 'Mouse is here!';
}

function handleMouseEnter() {
    title.innerText = 'Mouse is gone!';
}

function handleMouseLeave() {
    title.style.color = 'yellow';
}

function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
    alert('copier!');
}

title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
