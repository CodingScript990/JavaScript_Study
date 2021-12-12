// stack(스택)

let boxs = [];

boxs.push('ipad');

boxs(); // ipad

boxs.push('rice');
boxs.push('bottled-water');
boxs.push('laptop');

boxs(); // ipad, rice, bottled-water, laptop

// But i want to rice!!
// pop >> Take out the last one you put in first

boxs.pop(); // out => laptop
boxs.pop(); // out => bottled-water

// rice!!

let rice = boxs.pop(); // setting variable rice!

boxs.pop(); // Here is ipad!! But not rice! where?

// It's in the variable that I set earlier! 

rice(); // Calling a variable! [rice]

// queue(큐) : come to first and leave first

let boxs = ['box1', 'box2', 'box3'];

boxs(); // box1, box2, box3

boxs.shift(); // out => box1

boxs(); // box2, box3

boxs.shift(); // out => box2

// If you want box 1, you can set the variable!

let boxs = ['box1', 'box2', 'box3'];

let box1 = boxs.shift(); // box1!!

box1(); // box1

boxs(); // box2, box3


// aggregation(집합)

// The biggest number

let numbers = [1, 5, -20, 100, 30];

function biggest (numbers) {

    let number = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        // i = 1;
        if(number < numbers[i]) {
            number = numbers[i]
        }
    }
    console.log(number); // biggest number => 100
}

// The sum of all numbers(모든 수의 합)

let num = [2,4,6,8,10,12];

num[0] + num[1] + num[2] + num[3] + num[4] + num[5] // ???

// 42

let pls = 0;

for(let i = 0; i < num.length; i++) {
    pls = pls + num[i]; // 42
}