let valor;
console.log(valor); //retorna undefined pois foi declarado mas nunca foi inicializado

valor = null;
console.log(valor);
//console.log(valor.toString()) gera Erro!

const produto = {}
console.log(produto);
console.log(produto.preco); //retorna undefined
//acredito que nas versões mais recentes isso não seja mais possível
produto.preco = 3.50;
console.log(produto)

produto.preco = undefined; //evitar atribuir com undefined
console.log(!!produto.preco);
console.log(produto);