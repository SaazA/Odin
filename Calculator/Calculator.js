const container = document.querySelector("#container");

const div = document.createElement("div");
div.classList.add("div");
container.appendChild(div);

const screne = document.createElement("div");
screne.classList.add("screne");
div.appendChild(screne);
screne.setAttribute("class" , "screne")

div.setAttribute("class" , "Calculator")

const variables = ['C', '%' , '<' , '÷' , '*', '6','7','8','9','0' , '5','4','3','2','1','-', '+','=','.','00'];

let num1 = '';
let num2 = '';
let operator  = '';
function displayCalci(){
    for (let i=0;i<variables.length;i++){
        const divi = document.createElement("div");
        divi.classList.add("divi");
        divi.textContent= variables[i];
        div.appendChild(divi);
        divi.addEventListener('click', function () {
            operation(variables[i]);
            updateScreen();
    })
}
}

function operation(value){
    if (value === 'C') {
        clear();
    } else if (value === '=') {
        calculate();
    } else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
        operator = value;
    } else if (!operator) {
        num1 += value;
    } else {
        num2 += value;
    }
}
function updateScreen() {
    if(num1 !=='' && num2 !==''){
        screne.textContent = num1 + operator + num2;
    }else if (num2 == ''){
        screne.textContent = num1 + operator;
    }else{
        screne.textContent = num1;
    }
}

function clear() {
    num1 = '';
    num2 = '';
    operator = '';
    updateScreen();
}

function calculate(){
    if(num1!== '' && num2!=='' && operator !=='' ){
    const result = operate(parseFloat(num1),operator, parseFloat(num2));
    console.log(result);
    if(result){
        num1=result;
        updateScreen();    
        num2 = '';
        operator = '';
    }
    }
}

function operate(num1,operator, num2){
let result ='';
    if(operator == '+' ){
    result = add(num1 , num2);
}
else if(operator == '-' ){
    result = subtract(num1 , num2);
}
else if(operator == '*' ){
    result = multiply(num1 , num2);
}
else if(operator == '/' ){
    result = divide(num1 , num2);
}else if( operator == '%'){
    result = percentage(num1,num2);
}
return result;
}













function add(num1, num2){
    console.log(typeof(num1))
    return num1+num2;
}
function subtract (num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return 'Error: Division by zero';
    }
}
function percentage(num1 , num2){
    return num2/100*num1;
}


displayCalci()