console.log(typeof Object);

class Produto {}
console.log(typeof Produto); // -> função

// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

// Funcao com retorno
function soma (a, b = 0){ //caso b não receba valor, "0" será utilizado como valor padrao
    return a + b;
}

console.log(soma(2, 5));

////////////////////////////
//armazenar funcao em variavel

const imprimirSum = function(a, b) {
    console.log(a + b);
}

imprimirSum(2, 3);

//função arrow

const sum = (a, b) => {
    return a + b;
}

console.log(sum(2, 3));

//retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 1));

const imprimir = a => console.log(a)
imprimir("oi");