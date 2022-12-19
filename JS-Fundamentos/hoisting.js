//com o hoisting a variável é declarada aqui *var a;*
console.log("a =", a);
var a = 2; //e aqui acontece a atribuição *a = 2;*
console.log("a =", a);

//console.log("b =", b);
let b = 2; //o hoisting não acontece ao usar let
console.log("b =", b);