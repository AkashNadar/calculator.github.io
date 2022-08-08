const display = document.getElementById('display');
const clear = document.getElementById('ac');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const mul = document.getElementById('x');
const div = document.getElementById('/');
const equals = document.getElementById('=');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const zero = document.getElementById('0');
const dot = document.getElementById('.');


var exp = "";

plus.addEventListener('click', () =>{
    exp = exp + '+';
    display.innerHTML = exp;
})

minus.addEventListener('click', () =>{
    exp = exp + '-';
    display.innerHTML = exp;
});

mul.addEventListener('click', () =>{
    exp = exp + '*';
    display.innerHTML = exp;
});

div.addEventListener('click', () =>{
    exp = exp + '/';
    display.innerHTML = exp;
});

equals.addEventListener('click', () =>{
    exp = eval(exp).toString();
    display.innerHTML = exp;
});

equals.addEventListener('click', () =>{});
clear.addEventListener('click', () =>{
    exp = "";
    display.innerHTML = "0";
});
zero.addEventListener('click', () =>{
    exp = exp + '0';
    display.innerHTML = exp;
});

one.addEventListener('click', () =>{
    exp = exp + '1';
    display.innerHTML = exp;
});


two.addEventListener('click', () =>{
    exp = exp + '2';
    display.innerHTML = exp;
});


three.addEventListener('click', () =>{
    exp = exp + '3';
    display.innerHTML = exp;
});


four.addEventListener('click', () =>{
    exp = exp + '4';
    display.innerHTML = exp;
});


five.addEventListener('click', () =>{
    exp = exp + '5';
    display.innerHTML = exp;
});


six.addEventListener('click', () =>{
    exp = exp + '6';
    display.innerHTML = exp;
});


seven.addEventListener('click', () =>{
    exp = exp + '7';
    display.innerHTML = exp;
});


eight.addEventListener('click', () =>{
    exp = exp + '8';
    display.innerHTML = exp;
});


nine.addEventListener('click', () =>{
    exp = exp + '9';
    display.innerHTML = exp;
});


dot.addEventListener('click', () =>{
    exp = exp + '.';
    display.innerHTML = exp;
});
