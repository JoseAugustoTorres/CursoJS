/* 
Elabore uma função que recebe um número como parâmetro e retorne
uma string com o símbolo "+" na quantidade especificada no parâmetro.
*/

function adicionarMais(num1) {
    let saida = "";
    
    for (i = 0; i < num1; i++){
        saida += "=";
    }   
    console.log(saida);
}

adicionarMais(5);