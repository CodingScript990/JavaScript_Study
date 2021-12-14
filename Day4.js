// Array[배열]

// Object는 자료형의 일종으로 다양한 값을 모아둔 또다른 값이다.

// Object

const apple = 'apple';
const orange = 'orange';
const pear = 'pear';
const strawberry = 'strawberry';

// Array

const fruits = ['apple', 'orange', 'pear', 'strawberry'];

// 배열 내부의 값을 개별적으로 불러올때

console.log(fruits[0]); // apple
console.log(fruits[1]); // orange
console.log(fruits[2]); // pear
console.log(fruits[3]); // strawberry

// 배열안에 다른 배열이나 변수를 넣을 수 있다!

const arrayofArray = [[1,2,3], [4,5]];

arrayofArray[0]; // [1,2,3]

const A = 11;
const B = 30;

const variableArray = [A, B, 50];

variableArray[1]; // 30(B의 값)

// 배열 내부의 값을 element라고 한다.

const everything = ['apple', 3, undefined, true, 'Array', null];
const duplicated = ['ga', 'na', 'da', 'ra', 'ma'];
const empty = [];

// length로 배열안에 객체들이 몇개가 있는지 알려준다.

const everything = ['apple', 3, undefined, true, 'Array', null];
console.log(everything.length); // 6

// 마지막 index 번호 추출하기

const arr = [1,2,3,4,5,5,6,7,8,8,9,9,9,10];
console.log(arr.length - 3);

// 배열안에 객체 추가하기

const target = ['apple', 'orange'];
target[3] = 'pear';

console.log(target); // ['apple', 'orange', 'pear'];

const target1 = ['apple', 'orange', 1, 2, 3];

// add 'pear'

target1[target1.length] = 'pear';

console.log(target1); // ['apple', 'orange', 1, 2, 3, 'pear']

// 맨앞에 값을 추가 하고 싶을 때! 그러나 주의! 0번방에 값이 변한다!

const target1 = ['apple', 'orange', 1, 2, 3];

target1[0] = 'pear';

console.log(target1); // ['pear', 'orange', 1, 2, 3];

// 맨앞에 값을 추가하고 싶을 때 unshift를 사용하면 된다!

const target1 = ['apple', 'orange', 1, 2, 3];

target1.unshift('pear');

console.log(target1); // ['pear', 'apple', 'orange', 1, 2, 3];

// 그리고 맨뒤에도 요소들을 추가 하고 싶을때 push를 사용하면 된다.

const target1 = ['apple', 'orange', 1, 2, 3];

target1.push('pear');

console.log(target1); // ['apple', 'orange', 1, 2, 3, 'pear'];

/*
    [const]
    - target 변수가 const로 선언이 되어 있다. 그러나 target 배열에 새 값을 추가하거나 수정이 가능하다.
    즉, 여기에서 느꼈지만, const는 상수가 아니다. 새로운 값을 대입을 하지 못할 뿐 const에 객체가
    대입된 경우 객체 내부의 속성이나 배열의 요소는 수정 할 수 있다!
*/

const target2 = ['a1', 'b1', 'c1', 'd1'];
target2 = ['f1', 'g1']; // 불가능함!!
target2[1] = 'g2'; // 가능하다!