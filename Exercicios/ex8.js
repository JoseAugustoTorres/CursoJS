/*
Desenvolva uma função que recebe dois números inteiros não negativos 
(maiores ou iguais a zero) e realize a multiplicação deles. 
Porem, não utilize o operador de multiplicação.
*/

function multiplicar(num1, num2) {
    let resultado = 0;
    for (i = 0; i < num2; i++){
        resultado += num1;
    }
    console.log(resultado);
}

multiplicar(10, 3);