// Array[수정, 조회]

// 수정

const target = [1,2,3,4,5,6,7];
target[3] = 8;
console.log(target); // [1,2,3,8,5,6,7];

// element 제거 - pop
// pop : 마지막 element를 제거하는 기능이 pop이다.

const target = [1,2,3,4,5,6,7];
target.pop();
console.log(target); // [1,2,3,4,5,6]; 마지막 index가 제거!

// 맨 앞 index를 제거 하고 싶다면? - shift / - unshift : 추가

const target = [1,2,3,4,5,6,7];
target.shift();
console.log(target); // [2,3,4,5,6,7]; 맨 앞 1이 제거된다.

// 중간 element를 제거하는 것은? - splice

const target = [1,2,3,4,5,6,7];
target.splice(1, 1);
console.log(target); // [1,3,4,5,6,7]; 2가 제거

const target = [1,2,3,4,5,6,7];
target.splice(2, 2); // 2개 제거
console.log(target); // [1,2,5,6,7]; 3,4가 제거

// splice에 하나만 넣으면 해당 index부터 끝까지 모든 요소를 제거한다는 뜻!

const target = [1,2,3,4,5,6,7];
target.splice(2); // 2개 제거 하고 전부!
console.log(target); // [1,2]; 3,4,5,6,7 이 제거

// splice에 전부 지울수도 있지만 지워진 자리에 다른 값을 넣어 줄수도 있다.

const target = [1,2,3,4,5,6,7];
target.splice(2, 5, 8, 9); // 5개 제거 하고 제거된 자리에 8,9가 들어간다
console.log(target); // [1,2,8,9]; 3,4,5,6,7 이 제거하고 8,9가 들어간다.

// splice를 사용하더라도 지우지 않고 추가를 해주고 싶을때?

const target = [1,2,3,4,5,6,7];
target.splice(3, 0, 3); // 제거되지 않고 3번 index뒤에 3이 추가된다.
console.log(target); // [1,2,3,3,4,5,6,7]; 제거한 index값은 없는 대신 추가를 해주는 작업!

// element 찾기 - includes [true/false]

const target = [1,2,3,4,5,6,7];
const rs = target.includes(3); // 3을 찾고자한다.
const rs2 = target.includes(8); // 8을 찾고자 한다.

console.log(rs); // true 3
console.log(rs2); // false 8 

// 몇 번째 있는 index 위치를 아는 법? - indexOf / - lastIndexOf

const target = [1,2,3,4,5,6,7];
const rs = target.indexOf(3); // index 2
const rs2 = target.indexOf(6); // index 5
const rs3 = target.indexOf(2); // index 1

// 배열 반복
// while, for문에서도 사용 가능하다.

const target = [0,1,2,3,4,5];

let i = 0;

while(i < target.length) {
    console.log(target[i]); // target 안에 element
    i++; // 증감식
}

// 0, 1, 2, 3, 4, 5 === 6

const target = [0,1,2,3,4,5];

for (let i = 0; i < target.length; i++) {
    console.log(target[i]);
}

// 0, 1, 2, 3, 4, 5 === 6

