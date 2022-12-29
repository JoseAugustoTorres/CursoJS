/*
Desenvolva uma função que recebe dois parâmetros, um é a quantidade 
de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. 
O retorno dessa função deve ser a string "Salário igual a R$ X", 
em que X é o quanto o funcionário ganhou no mês.
*/

function calcularSalario(horasTrabalhadasMes, reaisPorHora) {
    console.log(`Este funcionário receberá, neste mês, R$ ${(horasTrabalhadasMes * reaisPorHora).toFixed(2)} por ter trabalhado ${horasTrabalhadasMes} horas recebendo R$ ${(reaisPorHora).toFixed(2)} p/Hora`);
}

calcularSalario(320, 12.42);