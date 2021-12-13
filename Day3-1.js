// if문
// 주어진 조건에 띠라 코드를 실행하거나 실행하지 않는 문이다.

// 기본 if문

if(조건식) {
    동작문;
}

// 하나 이상일 때 if조건문의 기본 형식

if(조건식) {
    동작문1;
    동작문2;
    동작문3;
}

// sample ex)

if(true) {
    console.log('Hello, javascript!');
}

// true 값없이도 true로 형 변환되는 값이나 그것을 담고 있는 변수를 넣어도 된다.

let condition = true;

if(condition) {
    console.log('Hello, javascript!');
}

// else, else if, switch

// if - else문의 기본형식
if(조건식) { // 조건식이 참인 값일 때 실행
    동작문;
} else { // 조건식이 거짓인 값일 때 실행
    동작문;
}

let val = 'apple';

let condition = false; // else문에 실행

if(condition) {
    val = 'banana';
} else {
    val = 'grape';
}
console.log(val); // grape

// if - else if - else

if(조건식) {
    동작문;
} else if(조건식) {
    동작문;
} else {
    동작문;
}

// 좋지 않은 코드!

const score = 90;
if(score >= 90) { // 90이상
    console.log('A+');
} else if(score < 90 && score >= 80) { // 90점 미만 80점 이상
    console.log('A');
} else if(score < 80 && score >= 70) { // 80점 미만 70점 이상
    console.log('B+');
} else if(score < 70 && score >= 60) { // 70점 미만 60점 이상
    console.log('B');
} else { // 60점 미만
    console.log('F');
}

// 그나마 좋은 예시

const score = 90;
if(score >= 90) { // 90이상
    console.log('A+');
} else if(score >= 80) { // 80점 이상
    console.log('A');
} else if(score >= 70) { // 70점 이상
    console.log('B+');
} else if(score >= 60) { // 60점 이상
    console.log('B');
} else { // 60점 미만
    console.log('F');
}

// 중첩 if 조건문


// 중첩 전

let first = true;
let second = false;

if(first) {
    console.log('첫 번째 조건 충족');

    if(second) {
        console.log('두 번째 조건 충족');
    } else {
        console.log('두 번째 조건은 불충족');
    }
}  else {
    console.log('첫 번째 조건 불충족');
}

// 중첩 후(최소한 중첩이 좋음!)

let first = true;
let second = false;

if(first && second) { // first 와 second 모두 true 경우
    console.log('첫 번째 조건 충족');
    console.log('두 번째 조건 충족');
} else if(first) { // first만 true
    console.log('첫 번째 조건 충족');
    console.log('두 번째 조건은 불충족');
} else { // 둘 다 false 일때
    console.log('첫 번째 조건 불충족');
}

// switch문
// switch는 if문과 동일한 점이 조건이 충족할 때 실행되는 반면 차이점은 case의 비교 조건식값이 
// 일치하면 동작문이 실행되고 보통은 조건식에 변수를 넣고 비교하지만 비교 조건식에는 변수와 
// 단 if문과 switch의 차이점이라면 switch는 중괄호가 없다는 것이다! case문 안에 선언한 것들은
// 모두 출력된다!

switch(조건식) {
    case 비교조건식 :
        동작문;
}

let val = 'A';

switch(val) {
    case 'A':
        console.log('A');
}

switch(val) {
    case 'A':
        console.log('A');
        console.log('B');
}

// if문 else if문 처럼 case로 사용할 수 있다.

let val = 'B';

switch(val) {
    case 'A': {
        console.log('A');
        break;
    } case 'B' : {
        console.log('B');
        break;
    } case 'C' : {
        console.log('C');
        break;
    }
}

// if문과 switch문 비교

// switch는 default가 가장 위에 있어도 상관없다!

let fruit = '사과';

switch(fruit) {
    default: {
        console.log('과일 종류를 알 수 없습니다.');
        break;
    } case '사과': {
        console.log('사과!');
        break;
    } case '배' : {
        console.log('배!');
        break;
    } case '포도' : {
        console.log('포도!');
        break;
    }
}

// if문

let fruit = '사과';

if(fruit === '사과') {
    console.log('사과!');
} else if(fruit === '배') {
    console.log('배!');
} else if(fruit === '포도') {
    console.log('포도!');
} else {
    console.log('과일 종류를 알 수 없습니다.');
}

// 조건부 연산자 (삼항 연산자)
// 조건식 ? 참 일때 실행되는 식 : 거짓일 때 실앻되는 식;

5 > 0 ? 'true' : 'false'; // 삼항식

let condition = true;

let val = condition ? 'true' : 'false';

console.log(val); // true

// if문

if(condition) {
    val = 'true';
} else {
    val = 'false';
}

console.log(val); // true

// 중첩 조건분(소괄호로 구분)

let con1 = true;
let con2 = false;

let val2 = con1 ? (con2 ? 'All true' : 'con1만 : true') : 'con1이 : false';

// con1은 All true(true), con1이(false)가 들어가지만 con2는 소괄호 안에서 true, false가 이루어진다.
// con2는 All true(true), con1만 true(false) 이렇게 된다는 점! 유의!! 

console.log(val2); // con1만 : true

// 들여쓰기도 가능

let val = con1 
    ? con2 
        ? 'All true'
        : 'con1만 : true'
    : 'con1이 : false';

// 첫 번째 조건이 참인 경우에 중첩된 조건부 연산에 들어갔지만, 거짓인 경우에도 들어갈 수 있다.

let con1 = false;
let con2 = true;

let val3 = con1 ? 'con1이 : true' : (con2 ? 'con2가 : true' : 'All false');

console.log(val3); // con2가 true : All false

// if문 일때

let cond = true;

let val = '';

if(cond) {
    val = 'true';
} else {
    val = 'false';
}

// switch문 일때

let cond = true;

let val = '';

switch(cond) {
    case true: {
        val = 'true';
        break;
    } case false: {
        val = 'false';
        break;
    }
}

// 조건부 연산자 일때

let cond = true;

let val = cond ? 'true' : 'false';