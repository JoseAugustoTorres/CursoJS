/*
Escreva uma função que receba a idade de 
uma pessoa em anos e retorne a mesma idade em dias

Todo ano tem 365 dias, desconsiderar anos bissextos 
e desconsiderar dias após ultimo aniversario
*/

function converterAnosParaDias(idade) {
    console.log(`A pessoa tem ${idade} ano(s), total de dias: ${idade * 365}`);
}

converterAnosParaDias(28);