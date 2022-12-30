// Math functions
function add(a,b){return Number(a)+Number(b);}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b}
function divide(a,b){
    if(b==0){return "ERROR"}
    return a/b}


//DOM elements variables
const inputDiv = document.querySelector(".inputDiv")
const resultDiv = document.querySelector(".resultDiv")
const clearBtn = document.querySelector(".clearBtn")
const deleteBtn = document.querySelector(".deleteBtn")
const opButtons = document.querySelectorAll(".operationButtons>div")
const digits = document.querySelectorAll(".dig")
const signs = document.querySelectorAll(".sign")
const equalSign = document.querySelector(".equalSign")
const pointBtn = document.querySelector(".point")
//operation variables
let operand1="";
let operand2="";
let operator="";
let result;
// operation function
function operate(){
    if(operator == " + "){
        result = add(operand1,operand2)
    }else if(operator == " - "){
        result = subtract(operand1,operand2)
    }if(operator == " × "){
        result = multiply(operand1,operand2)
    }if(operator == " ÷ "){
        result = divide(operand1,operand2)
    }
    result = `${result}`
    
    if(result.length>8){
        result = Number(result).toExponential()
        let splitResult = result.split("e")
        if(splitResult[0].length>5){
            splitResult[0] = splitResult[0].slice(0,5)
            result = splitResult[0]+"e"+splitResult[1]
        }
        
    }
    resultDiv.textContent = result;
    inputDiv.textContent += operand2
    operand1 = result
    operand2 = ""
    if(result == "ERROR"){
        operand1=""
        operand2=""
        operator=""
    }
}
// digit buttons function
digits.forEach(digit=>{
    digit.addEventListener('click',()=>{
        if(operator==""){
            let content = digit.textContent
            if(operand1.length<8){operand1 += content}
            resultDiv.textContent = operand1
        }
        if(operator!==""){
            let content = digit.textContent
            if(operand2.length<8){operand2 += content}
            resultDiv.textContent = operand2
        }
    })
})
// sign buttons function
signs.forEach(sign=>{
    sign.addEventListener('click',()=>{
        if(operand2!==""){
            operate()
        }
        if(operand1!==""){
            let content = sign.textContent
            operator = ` ${content} `
            inputDiv.textContent = operand1 + operator
        }
    })        
})
// equal sign function
equalSign.addEventListener('click',()=>{
    if(operand1!==""&&operand2!==""&&operator!==""){operate()}
})
// clear buttons function
clearBtn.addEventListener('click',()=>{
    operand1 = ""
    operand2 = ""
    operator = ""
    resultDiv.textContent = "0"
    inputDiv.textContent = ""
})
//delete button function
deleteBtn.addEventListener('click',()=>{
    let text = resultDiv.textContent
    if(text.length>0){
        text = text.slice(0,-1)
    }
    resultDiv.textContent = text
    if(operator==""){
        operand1 = operand1.slice(0,-1)
    }else{
        operand2 = operand2.slice(0, -1)
    }
})
// point button function
pointBtn.addEventListener('click',()=>{
    if(operator==""){
        let splitOperand = operand1.split("")
        if(splitOperand.find(char=>char==".")){
        }else{
            let content = pointBtn.textContent
            if(operand1==""){operand1 = `0`}
            if(operand1.length<8){operand1 += content}
            resultDiv.textContent = operand1
        }
    }else if(operator!=""){
        let splitOperand = operand2.split("")
        if(splitOperand.find(char=>char==".")){
        }else{
            let content = pointBtn.textContent
            if(operand2==""){operand2 = `0`}
            if(operand2.length<8){operand2 += content}
            resultDiv.textContent = operand2
        }
    }
})
// animation 
const rightButtons = document.querySelectorAll(".right")
const leftButtons = document.querySelectorAll(".left")
rightButtons.forEach(button => {
    button.addEventListener('mousedown',()=>{
        button.setAttribute('id',"clickedRight")
    })
    button.addEventListener('animationend',()=>{
        button.setAttribute('id','')
    })
})
leftButtons.forEach(button => {
    button.addEventListener('mousedown',()=>{
        button.setAttribute('id',"clickedLeft")
    })
    button.addEventListener('animationend',()=>{
        button.setAttribute('id','')
    })
})