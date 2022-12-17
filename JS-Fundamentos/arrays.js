const valores = [7.7, 8.9, 6.3, 2.1];
console.log(valores[0], valores[3]);

valores[4] = 10;
console.log(valores);

//valores[10] = 2; 
//o js identifica que existem espaços vazios e informa na saída
//console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
//a fun push() adiciona dados ao array
console.log(valores);

console.log(valores.pop());
//tira o ultimo dado do array e retorna ele na saída
delete valores[0];
//apaga o elemento do array e o indice fica vazio - undefined
console.log(valores);

console.log(typeof valores);