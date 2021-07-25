// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.

let arg1 = 1
let arg2 = 2
let operation = '+'

function sum(num1, num2) {
    return result = num1 + num2
}

function diff(num1, num2) {
    return result = num1 - num2
}

function mult(num1, num2) {
    return result = num1 * num2
}

function div(num1, num2) {
    return result = num1 / num2
}


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': return sum(arg1, arg2)
        case '-': return diff(arg1, arg2)
        case '*': return mult(arg1, arg2)
        case '/': return div(arg1, arg2)
    }
}

alert(mathOperation(arg1, arg2, operation))