// par nome/valor
const saudacao = "Opa"; //(onde foi definido fisicamente) contesto léxico 1

function exec() {
    const saudacao = "Fala"; //contexto léxico 2
    return saudacao;
}

const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua x",
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);