/*
Crie uma função que receba um array e retorne o primeiro e o último elemento desse array
como um novo array.
ex: arr1 = [1, 2, 3] >> arr2 = [1, 3]
*/

function separarElementos(arr1) {
    let arr2 = [];
    arr2.push(arr1[0], arr1[arr1.length-1]);
    console.log(arr2);
}

separarElementos([1, 2, 3]);