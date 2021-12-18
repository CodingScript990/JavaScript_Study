// 매개변수와 인수

function a(parameter) {
    console.log(parameter);
}
a('argument');

/*
    함수를 호출 할때 넣은 'argument'와 같은 값들을 argument[인수]라고 하고, 함수를 선언할 때
    사용한 parameter를 parameter[매개변수]라고 한다.
*/

function a (x,y,z,p) {
    console.log(x,y,z,p);
    console.log(arguments);
}

a('hello', 'Parameter', 'argument'); // hello, Parameter, argument, undefined

function a (x, y) {
    console.log(x, y);
}

a('hello', 'Parameter', 'argument'); // hello, Parameter 만 출력!

const a = (x, y, z) => {
    return x * y * z;
};

a(2,3,4); // call

const a = (x,y,z) => x * y *z; // 이렇게도 가능하다!