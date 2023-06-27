function calculator(firstOperand, operator, secondOperand){
    if(operator == "+"){
        return firstOperand + secondOperand;
    }
    if(operator == "-"){
        return firstOperand - secondOperand;
    }
    if(operator == "*"){
        return firstOperand * secondOperand;
    }
    if(operator == "/"){
        return firstOperand / secondOperand;
    }
}
module.exports = calculator;
