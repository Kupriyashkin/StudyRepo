"use strict";

/*let i=0
 while (i<2) {
     alert(i)
    i++
}*/

/*for (let i = 0; i < 3; i++) {
     alert(i);
    }*/

/*let sum = 0;
while (true) {
    let value = +prompt("Введите число", '');
    if (!value) break;
sum += value;
}
alert( 'Сумма: ' + sum );*/

/*for (let i = 2; i<11;i++) {
    alert (i)
}*/

/*n = +prompt("Number", '')
nextPrime:
    for(let i = 2; i<n; i++) {
        for (let j = 2; j<n; j++) {
            if(i%j == 0) continue nextPrime;
}
alert(n);
}*/
/*console.log('hello')//bygaga*/

/*let number = 2;
switch (number) {
    case 0:
        console.log('0');
        break;
    case 1:
        console.log('1');
        break;
    case 2:
        case 3: console.log("2 or 3");
        break;
    default: console.log(not found)
}*/

/*function pow (x,n) {
    let result = x;
    for(let i=1; i<n; i++) {
        result*=x
    }
    return result;
}
console.log(pow(3,10))*/

/*function min(a,b) {
    if(a<b) {return a;}
    else {return b}
}
console.log(min(5,6))*/

/*function checkAge(age) {
    return (age>18) ? true : confirm('?')
    return (age>18) || confirm('?')
}*/


//Function Expression

/*let sayHi = function() {
    alert("Hi");
};*/

/*let age = +promt("How old are you?",'')
let welcome
if (age<18) {
    welcome = function() {
        alert("Hi");
    };
} else {
    welcome = function() {
        alert("Good morning");
    };
}
welcome()


//стрелочные функции //Arrow Function

/*let func = (arg1, arg2, argN) => expression;
let funct = function(arg1, arg2, argN) {
    return expression;
}*/
/*let sum = (a,b) => {
    let result = a+b;
    return result;
};*/
/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask("Вы согласны?",
() => console.log('Good'),
() => console.log('Hmm...'));*/