{
    {
        {
            { var sera = "Será???"}
        }
    }
}
console.log(sera);

function teste() {
    var local = 123;
}

teste();
//console.log(local); ñ funciona pois foi declarado dentro de uma função

var numero = 1;
{
    var numero = 2;
    console.log("Dentro =", numero);
}
console.log("Fora =", numero);

var num = 1;
{
    let num = 2;
    console.log("Dentro =", num); //ao usar let ele prioriza o que está dentro do bloco
}
console.log("Fora =", num);

for (var i = 0; i < 10; i++){
    console.log(i);
}

console.log("i =", i);

for (let i = 0; i < 10; i++){
    console.log(i);
}

console.log(i); //ao usar let a variável i não fica visível fora do bloco for acima

const funcs = [];

// for (var i = 0; i < 10; i++){
//     funcs.push(function() {
//         console.log(i);
//     })
// }

// funcs[2]();
// funcs[8]();

for (let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]();
funcs[8]();