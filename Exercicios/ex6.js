/*
Escreva uma função que receba um valor booleano ou numérico. 
Se o parâmetro fornecido for booleano, o retorno da função deverá ser inverso. 
Por exemplo, se a entrada for false, retornará true. 
Se o parâmetro for numério, o retorno será o número inverso. 
Por exemplo, se for fornecido o 1, o retorno será -1. 
Se o parâmetro de entrada não for de nenhum dos tipos acima, 
retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".
*/

function doContra(valor) {
    if(valor == true || false){
        return console.log(!valor);
    } else if (typeof(valor) === typeof(1)){
        return console.log(valor * -1);
    } else {
        return console.log("Booleano ou número esperados, mas o parâmetro é do tipo " + typeof(valor));
    }
}

doContra(2);
doContra(true);
doContra("ablublé");