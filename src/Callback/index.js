//funcion base
function suma(num1,num2){
    return num1+num2;
}
//funcion callback con parametro funcion base

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2,2,sum));