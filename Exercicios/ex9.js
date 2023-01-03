/* 
Escreva uma função que receba dois parâmetros. 
O primeiro parâmetro é o elemento que repetirá, 
enquanto que o segundo será o número de vezes que haverá repetição. 
Um array será retornado.
*/

function repetir(num1, num2) {
    let arr = [];
    for (i = 0; i < num2; i++){
        arr.push(num1);
    }
    console.log(arr);
}

repetir(2, 4);