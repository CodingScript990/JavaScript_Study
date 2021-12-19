// Object literal basic
// Object literal는 특정 정보를 나타내는 variable을 말함

// const를 사용시에 단 한번 밖에 값을 설정 못한다. 그러나 자주 변화가 있는 경우?

const name = 'javascript';
const year = 2021;
const month = 12;
const date = 19;
const gender = 'M';

// Array를 사용하여 Object Literal 할 수 있다.

const JS = {
    'name' : 'javascript',
    'year' : 2021,
    'month' : 12,
    'date' : 19,
    'gender' : 'M'
};

// name, year, month, date, gender info들을 property(속성)이라고 한다.
// {}를 사용해 object를 표현 한 것을 object literal이라고 한다.

const Object = {
    propertyName1 : propertyValue1,
    propertyName2 : propertyValue2,
    propertyName3 : propertyValue3,
};

// 여러개 일때 마지막 속성에도 끝에 쉼표를 넣어준 것이 보일 것이다. 넣어줘도 되지만 넣지 않아도 된다.
// 쉼표를 붙이는 이유는 혹여 추가를 해야하는 상황이 올때 또 쉼표를 넣어줘야 하기 때문이다. 즉,
// 에러를 최대한 방지하고자 하는 것이다. 

const name = 'javascript';
console.log(javascript['name']); // javascript
console.log(javascript[name]); // javascript['date']와 같다
console.log(javascript.hello); // object내부에 존재하지 않는 경우 undefined가 나온다.

// javascript
// 19
// undefined

// obejct 수정
// variable.property / [변수].[속성]

javascript.gender = 'W';
console.log(javascript.gender); // W

// object 제거
// delete variable.property / [변수].[속성]

delete javascript.gender;
console.log(javascript.gender);

// undefined

// Array와 function이 object인 이유?
// 둘다 객체의 성질을 모두 다 사용할 수 있어서 이다. 수정, 제거도 가능하다. 

function hola() {};
hola.a = 'ready';

const array = [];
array.b = 'bye';

console.log(hola.a); // ready
console.log(array.b); // bye

// method 이해
/*
    property value 값으로 javascript all value in possible. String도 되고, number, boolean, 
    null, undefined도 된다. function, array, others object in possible.
    Object property valued in function 할때 property를 method라고 한다.
*/

const debug = {
    log : function(value) {
        console.log(value);
    },
};

debug.log('Hello, Method');

// log는 debug Object의 method이다. console.log도 function이 console object의 log method이다.
// console object와 log method는 web browser is basic으로 만들어둔 object이므로 선언하지 않아도
// using 할 수 있다.

// object간의 비교

// {} == {} => false!

// 객체가 아닌 숫자, 문자열, 불 값, null, undefined는 모두 true를 반환한다.

'str' === 'str';
123 === 123;
false === false;
null === null;
undefined === undefined;

// object 모양이 같아도 생성할 때마다 새로운 object가 생성된다. 값을 비교할려면 object를 varable에
// 저장해 두어야 한다.

const a = {
    name : 'javascript',
}; // object literal

const array = [1,2,a]; // array

console.log(a === array[2]); // true

// reference 와 copy

const a = {
    name : 'javascript',
};

const b = a;

a.name = 'hero';
console.log(b.name); // hero!

/*
    b가 a를 대입한 상황이다. 즉 a의 property value는 b.name의 perporty이고
    b는 a를 reference하기 때문에 이같은 결과가 나온다. 그러나 object가 아닌 value
    (string, number, boolean, null, undefined)의 경우는 다르다.
*/

let a = 'javascript';
let b = a;

a = 'hero';

console.log(b); // javascript

/*
    여기에서는 값을 복사하였다고 표현하는데, 위에서의 참조관계와 다르다. 이미 
    b는 a의 값을 복사하겠다고 선언을 하였기 때문에 a의 값을 나중에 값을 다르게 주어도
    결국 b의 값은 처음으로 지정 해주었던 a의 value값만 들고 오는 것이다. 이 의미를
    copy라고 한다.
*/
