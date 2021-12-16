// Array method

const arr = ['a', 'b', 'c', 'd', 'e', 'a'];

arr.indexOf('a'); // 0
arr.splice(0, 1); // 'a' delete

arr.indexOf('a'); // 4
arr.splice(4, 1); // 'a' delete

// result === arr['b', 'c', 'd', 'e']
// arr.length === 4

// 반복문으로 제거해주기!

while(arr.indexOf('a') !== -1) { // a요소가 arr배열 안에 값이 -1이 되지 않을때까지 while문으로 반복해줘라~!
    arr.splice(arr.indexOf('a'), 1); // arr배열안에서 'a'요소가 있으면 제거를 해줘라~!
}

// 중복되는 것까지 제거해준다면?
const arr = ['a', 'b', 'c', 'd', 'e', 'a'];
let array = arr;
let index = arr.indexOf('a');

while(index !== -1) {
    array.splice(index, 1);
    index = arr.indexOf('a');
}

// function[함수]
// 일정한 동작을 수행하는 코드를 의미한다.

// arrow function [화살표 함수]

// function 사용예시

// ex1)
function a () {}; // function declaration statement

// ex2)
const b = function() {}; // function expression

// ex3)
const c = () => {}; // arrow function

// 상수에 대입하는 대신 function keyword뒤에 fucntion naming을 넣어주는 것을 function declaration statement[함수 선언문]이라 한다.
// 상수나 변수에 대입하는 것을 function expression[함수 표현식]이라 한다.
// 변수와 마찬가지로 function을 만드는 행위도 declare(선언)이라 표현한다.

// function a 뒤에 세미콜론을 안붙이는 이유는?
// 1. 붙여도 상관은 없다. 하지만, 프로그래밍을 짤때에는 통일성이 보기에도 편하기 때문에 그런다.
// 2. if문, for문, while문, function declaration statement의 중괄호 뒤에는 세미콜론이 붙지 않는다.

// 그리고 만든 function을 사용할때를 call(호출)한다고 표현한다.

// ex1)

function a1() {};

a1(); // call!

// function 안에서의 작업 후 call 해보기!

function a2() {
    console.log('Hello!');
    console.log('javascript!');
}

a2(); // call!!
// Hello!
// javascript!

// 익명함수는 딱 한번만 사용할때만 사용! 그외에는 익명함수를 사용하지 않는다![유의!]

// return

// ex1)

function a3 () {}

a3(); // undefined

// 주목할 점은 a3() call할때 undefined라는 결과값이 나오는데, 기본값으로 undefined가 나온다. 이 값을 return value[반환값]이라 한다.
// console.log()를 호출 할때에 undefined가 call되는 경우가 바로 return value값을 나타내주는 것이다.

// ex2)

function a4 () {
    return 5; // 5로 반환값 설정!
}

a4(); //  call 5!!

// 다른 식이나 문에도 넣어 줄 수 있다!

function a5 () {
    return 7;
}

console.log(a5()); // call 7!!!

// 상수로 대입도 가능하다

// ex3)

function a6() {
    return 9;
}

const b2 = a6();

console.log(b2); // call 9!!

// return 문 안에 값을 두가지이상 사용하고 싶다면 array형태로 넣어줄것!

// ex4)

function a7 () {
    return [1,2];
}

a7(); // call [1,2];

// return문은 함수의 실행을 중간에 멈추게 하는 역할을 한다. 그렇기에 return 함수 뒤에 아무리 코드를 적어도 실행되지 않는다!

function a8() {
    console.log('a');
    console.log('b');
    return;
    console.log('c');
    console.log('d');
    console.log('e');
}

a8(); // call a, b!!