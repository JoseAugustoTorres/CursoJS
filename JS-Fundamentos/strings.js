const escola = "uma escola";

console.log(escola.charAt(4)); //puxa o indice, u-0; m-1; a-2; ' '-3; e-4...
console.log(escola.charCodeAt(3)); //puxa o valor unicode
console.log(escola.indexOf('m')); //busca em qual indice o char informado está, se não houver ele retorna -1

console.log(escola.substring(1)); //ignora o que está nos indicies anteriores, neste caso ignora o indice 0
console.log(escola.substring(0, 3)); //seleciona somente os indicies  0 a 3, não incluindo o indice 3

console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(' ', '-')); //substitui uma parte por outra, uma letra por outra letra, uma letra por um espaço, um espaço por um numero, etc etc....

console.log("Ana,maria,pedro".split(',')); //quebra em um array tudo o que estra entre vigulas = ["Ana", "Maria", "Pedro"]
