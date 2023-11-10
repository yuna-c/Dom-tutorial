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
/*
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
*/

/*
자바스크립트의 style제어
- 자바스크립트는 HTML,JS 파일 외에는 접근 권한이 없음
- style 변경시 css파일이 변경되는 것이 아닌 HTML요소에 인라인 형태로 style을 강제로 꽂아 넣어서 스타일 덮어쓰기
*/

const btns = document.querySelectorAll('.list1 li');
const box = document.querySelector('.box');
console.log(btns);

/*
DOM (Document Object Model) : web api
: 브라우저가 HTML태그를 해석해서 렌드링 할 때 자바스크립트로 하여금 제어할 수 있도록 객체형태로 만들어주는 API(Application Programing Interface : 입출력 시스템)
*/
console.dir(btns[0]); //돔객체 구조
/*
btns[0].onclick = () => {
	console.log('엄청 중요한 작업');
	btns[0].style.color = 'tomato';
};

btns[0].onclick = () => {
	console.log('실수로 연결한 쓸데없는 작업');
};
*/

// addEventListener('명령어', 콜백함수)
// 이벤트 중복 연결 가능
/*
btns[0].addEventListener('click', () => {
	console.log('엄청 중요한 작업');
	btns[0].style.color = 'pink';
});
btns[0].addEventListener('click', () => {
	console.log('실수로 연결한 쓸데없는 작업');
});
*/
// btns 요소를 forEach로 반복을 돌면서 각 버튼 클릭시 console.log(button1~button3)

btns.forEach((btn, index) => {
	btn /*btns[index]*/
		.addEventListener('click', () => {
			console.log(`button${index + 1}`);
			//btns[index].style.color = 'pink';
			btns[index].classList.toggle('active');
		});
});
console.dir(box);
//lnline script로 바로 꽂아 넣는 거임
btns[0].addEventListener('click', () => {
	box.style.backgroundColor = 'pink';
	console.dir(box);
});

btns[1].addEventListener('click', () => {
	box.style.width = '400px';
});
btns[2].addEventListener('click', () => {
	box.style.marginLeft = '50%';
});

// js로 기존 스타일을 동적으로 덮어 쓰는 것이 아닌
// 기존의 원래 스타일 값을 css로 가져오는 것은 불가능 (JS는 css 접근 불가)
// 자바스크립트는 역으로 화면에 출력되고 있는 결과물을 다시 수치적으로 재계산해서 가져옴

btns[1].addEventListener('click', () => {
	console.log(getComputedStyle(box).width);
	console.log(getComputedStyle(box).backgroundColor);
});
