function math(parsedUrl) {
    let num1 = parsedUrl.query.num1;
    let operator = parsedUrl.query.operator;
    let num2 = parsedUrl.query.num2;
    if (operator === "+") { 
        return num1 + num2;
    }else if (operator === "-") { 
        return num1 - num2;
    }else if (operator === "*") { 
        return num1 * num2;
    }else if (operator === "/") { 
        return num1 / num2;
    }
}

module.exports.math = math;
