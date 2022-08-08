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



plus.onclick = () => {
    exp = exp + '+';
    display.innerHTML = exp;

};

minus.onclick = () => {
    exp = exp + '-';
    display.innerHTML = exp;

};

mul.onclick = () => {
    exp = exp + '*';
    display.innerHTML = exp;

};

div.onclick = () => {
    exp = exp + '/';
    display.innerHTML = exp;

};

equals.onclick = () => {
    exp = eval(exp).toString();
    display.innerHTML = exp;
};

clear.onclick = () => {
    exp = "";
    display.innerHTML = "0";
};

one.onclick = () => {
    exp = exp + '1';
    display.innerHTML = exp;
    
};

two.onclick = () => {
    exp = exp + '2';
    display.innerHTML = exp;
    
};

three.onclick = () => {
    exp = exp + '3';
    display.innerHTML = exp;
    
};

four.onclick = () => {
    exp = exp + '4';
    display.innerHTML = exp;
    
};

five.onclick = () => {
    exp = exp + '5';
    display.innerHTML = exp;
    
};

six.onclick = () => {
    exp = exp + '6';
    display.innerHTML = exp;
    
};

seven.onclick = () => {
    exp = exp + '7';
    display.innerHTML = exp;
    
};

eight.onclick = () => {
    exp = exp + '8';
    display.innerHTML = exp;
    
};

nine.onclick = () => {
    exp = exp + '9';
    display.innerHTML = exp;
};

zero.onclick = () => {
    exp = exp + '0';
    display.innerHTML = exp;
    
};

dot.onclick = () => {
    exp = exp + '.';
    display.innerHTML = exp;
    
};