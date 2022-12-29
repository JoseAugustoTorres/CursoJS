/*
Crie uma função que recebe um número de 1 a 12 e retorne 
o mês correspondente como uma string. 
Por exemplo se a entrada for 2, a função deverá retornar "fevereiro".
*/

function mesCorrespondente(mesNumero) {
    let mesString;
    switch (mesNumero) {
        case 1:
            mesString = "Janeiro";
            break;
        case 2:
            mesString = "Fevereiro";
            break;
        case 3:
            mesString = "Março";
            break;
        case 4:
            mesString = "Abril";
            break;
        case 5:
            mesString = "Maio";
            break;
        case 6:
            mesString = "Junho";
            break;
        case 7:
            mesString = "Julho";
            break;
        case 8:
            mesString = "Agosto";
            break;
        case 9:
            mesString = "Setembro";
            break;
        case 10:
            mesString = "Outubro";
            break;
        case 11:
            mesString = "Novembro";
            break;
        case 12:
            mesString = "Dezembro";
            break;
        default:
            return console.log("Mês informado inválido");
    }

    console.log(`O mes nº ${mesNumero} corresponde ao mês de ${mesString}.`);
}

mesCorrespondente(10);