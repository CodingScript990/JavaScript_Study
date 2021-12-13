// 반복문

// while문

// while문은 조건식이 참인 동안 반복해서 동작문을 실행한다. 동작문이 하나 이상인 경우에
// 중괄호로 묶어도 된다. if문과 같은 이유로 동작문이 하나더라도 중괄호로 묶어주는 것을 추천!

while (조건식) {
    동작문;
}

// while문 기본형식

while(조건식) {
    동작문1;
    동작문2;
    동작문3;
}

// 무한 루프!

while(true) {
    console.log('Hello, javascript!');
}

// 조건을 줘서 무한 반복되지 않게 하기!

let i = 1;

while(i <= 100) {
    console.log('Hello, javascript!'); // 출력!
    i++; // 증가!(1 + 1 = 2 이렇게 100까지!!)
}

// for문

// for문 기본 형식

for (시작; 조건식; 종료식) {
    동작문;
}

// 100번 출력

for (let i = 0; i < 100; i++) {
    // 풀이하자면 i라는 변수에 0이 있는데 i라는 변수를 100번 실행하기 위해서 조건식을 설정하고
    // 설정했다면 100까지 갈 수 있게 증감식을 사용해줘서 종료를 시켜라!
    console.log('Hello, javascript!');
}

// while문과 for문 비교

// 1 : 조건식, 2 : 동작문, 3 : 종료식

// while

let i = 0;// (1)

while(i < 100) { // (2)
    console.log('hello, javascript');
    i++; // (3)
}

// for

for(let i = 0; i < 100; i++) { // (1); (2); (3)++
    console.log('hello, javascript');
}

// for 문의 시작, 조건식, 종료식을 생략 가능!

for( ; ; ) {

}

// 결과는 무한반복!

// 1~100까지 for문 출력

for(let i = 1; i < 101; i++) {
    console.log(i); // 100
}

// break, continue

// break : 도달하면 멈춰!

let i = 0;

while(true) {
    if(i === 5) {
        break;
    }
    i++; // 1, 2, 3, 4, 5!
}

// for문 무한 반복! 보단 while문을 많이 사용함!

for(let i = 0; ; i++) {
    console.log(i);
}

// while 무한 반복

let i = 0;

while(true) {
    console.log(i);
}

console.log(i);

// continue : 도달하면 건너뛰어!

let i = 0;

while(i < 10) {
    i++;

    if(i % 2 === 0) { // 2로 나눠서 0이되면?
        continue; // 건너뛰어라!!
    }
    console.log(i);
}

// 중첩 반복문

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i, j);
    }
}

/*
    0 0
    0 1
    0 2
    0 3
    0 4
    0 5
    0 6
    0 7
    0 8
    0 9
    ...
*/

// 복잡하게 삼중 반복문도 사용하기도 한다.

for(let i = 0; i < 5; i++) {
    if(i % 2 === 0) continue;
    for(let j = 0; j < 5; j++) {
        if(j % 2 === 0) continue;
        for(let k = 0; k < 5; k++) {
            if(k % 2 === 0) continue;
            console.log(i, j, k);
        }
    }
}

// 짝수가 하나도 나오지 않는 구구단 만들기!

// ex1)

for(let i = 2; i< 10; i++) {
    if(i % 2 === 0) continue;
    for(let j = 1; j < 10; j++) {
        if(j % 2 === 0) continue;
        console.log(i +' X '+ j +' = '+ (i*j));
    }
}

// ex2)

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++) {
        if(i % 2 === 0 || j % 2 === 0) continue;
        console.log(i +' X '+ j + ' = ' + (i * j));
    }
}

// ex3)

for(let i = 1; i < 10; i += 2){
    for(let j = 1; j < 10; j += 2) {
        console.log(i +' X '+ j +' = '+ (i*j));
    }
}

// 별찍기

// 1번
/*
    *
    **
    ***
    ****
    *****
*/

// ex1)

for(let i = 0; i < 6; i++) {
    for(let j = 0; j < i; j++) {
        console.log('*'.repeat(j));
    }
    console.log('*'.repeat(i));
}

// ex2)

for(let i = 0; i < 5; i++) {
    console.log('*'.repeat(i + 1));
}

// 2번

/*
    *****
    ****
    ***
    **
    *
*/

// ex1)

for (let i = 5; i >= 1; i--) {
    console.log('*'.repeat(i));
}

// ex2)

for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(5 - i));
}

// 3번

/*
    *
    ***
    *****
    *******
    *********
*/

for (let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        continue;
    }
    console.log('*'.repeat(i));
}

// 4번

/*
    *********
    *******
    *****
    ***
    *
*/

for (let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        continue;
    }
    console.log('*'.repeat(10 - i));
}

// 5번

/*
    *****
     ****
      ***
       **
        *
*/

for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(i + 1) + '*'.repeat(5 - i));
}

// 6번

/*
        *
       **
      ***
     ****
    *****
*/

for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(5 - i)  + '*'.repeat(i + 1));
}

// 7번

/*
        *
       ***
      *****
       ***
        *
*/

for(let i = 0; i <= 5; i++) {
    console.log(' '.repeat(2 - (5 % i)) + '*'.repeat((5 % i) * 2 + 1));
}

// 8번

/*
        *
       ***
      *****
     *******
    *********
*/

for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(5 - i) + '*'.repeat(i) + '*'.repeat(i + 1));
}
