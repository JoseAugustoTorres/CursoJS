/*
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo)
e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo.
Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando
se o numero é igual a minimo ou maximo. ex: min = 3, max = 10 >>> if num >= min && num <= max.
Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto,
a lógica será exclusiva, não considerando se  numero é igual a minimo ou maximo;
*/

function estaEntre(num, min, max, inclusivo) {
    return console.log((inclusivo !== true) ? (num > min && num < max) : (num >= min && num <= max));
}

estaEntre(10, 2, 12);
estaEntre(10, 2, 10);
estaEntre(10, 2, 10, true);