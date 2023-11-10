/*
window.onload = () => {
	// 윈도우 body로딩 다 하고 하겠다고
	// 로딩이 늦어짐
	console.log('순수함수');
	const title = document.querySelector('h1');
	console.log(title); //null 초기객체
};
*/
//defer 동시에 읽고 실행해준다
//type="module" 각각의 파일명대로 지역변수를 만들어 줌, 돔도 읽을 수 있음

// console.log('순수함수');
// const h1 = document.querySelector('h1');
// console.log(h1); //null 초기객체

// let text = 'hello';
// console.log(text);

const section = document.querySelector('section'); // 태그명으로 단수 요소
const articles = section.querySelectorAll('article'); // 태그명으로 복수 요소, 유사배열, non live dom
//querySelector 매칭되는 첫번째 요소만 찾아줌
const btn = section.querySelector('.btn'); // 클래스명으로 단수 요소
const childrenEl = section.children; // 모든 직계 자식 요소, 유사배열, live dom
const parentEl = btn.parentElement; // 직계부모
//const parentEl1 = btn.parentElement.parentElement; 조상요소
const grandparentEl = btn.closest('section'); // 조상요소
const prevEl = btn.previousElementSibling; // 특정 요소의 이전 형제 요소
const nextEl = btn.nextElementSibling; // 다음 형제 요소
const sibling = btn.parentElement.children; // 모든 형제 요소
const siblings = btn.parentElement.querySelectorAll('li');

console.log(section);
console.log(articles);
console.log(articles[1]);
console.log(btn);
console.log(childrenEl);
console.log(parentEl);
console.log(grandparentEl);
console.log(prevEl);
console.log(nextEl);
console.log(sibling);
console.log(siblings);
