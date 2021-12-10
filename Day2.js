// 체온계 만들기

if(37.0 < 40.0) {
    console.log('고온');
}

if(34.0 < 35.0) {
    console.log('저온');
}

if(36.5 < 37.0 && 34.0 < 36.5) {
    console.log('정상');
}

function thermometer(a) {
    return (34.0 < a && a < 37.0 ? '저온' : '정상');
}

// 반복문

// 구구단

// 2 dan
function gugudan (a,b) {

    for(let i = 2; i <= 2; i++) {
        for(let j = 1; j < 10; j++) {
            console.log(i,j);
        }
    }
}

// 2 ~ 9 dan

function gugudan(a, b) {
    for(let i = 2; i < 10; i++) {
        for(let j = 1; j < 10; j++) {
            console.log(i + ' X ' + j + ' = ' + (i * j));
        }
    }
}

// 간단하게 명함 만들기

function calling() {
    console.log('이름 : 자바스크립트');
    console.log('직업 : 개발자');
}

calling(); // 호출!

// 변수로 쉽게 함수 사용하기

function calling2() {
    let name = '자바스크립트';
    let jab = '개발자';
    let nickname = '손흥민';

    console.log('이름 : ' + name);
    console.log('직업 : ' + jab);
    console.log('별명 : ' + nickname);
}

calling2();

// 객체로 명함 만들기

let calling3 = {
    name = '자바스크립트',
    jab = '개발자',
    nickname = '손흥민',
    age = '27',
    call() {
        console.log('이름 : ' + this.name);
        console.log('나이 : ' + this.age);
    }
};

calling3();
calling3.call();

// 수산시장 만들기

let flatfish = 2000;

function price(fish) {
    console.log(fish * 10);
}

price(flatfish); // 입력받은 광어!!

// 만약 50마리의 광어를 출력해야 한다면? (배열 or 반복문)
// 배열 : 동일한 특성을 가지며 일정한 규칙에 따라 여러 요소가 나열되어 있는 데이터들의 집합 
