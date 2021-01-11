const arForEach = [5, 8, 9];

let suma = 0;

function fnForEach(valor, indice, areglo){
    suma += valor; 
}
let recoForEach = (arr, fn) => {
    for (let index = 0; index < arr.length; index++) {
        fn(arr[index], index, arr);
    }
    document.write('Este es el resultado del metodo forEach: '+suma+'<br>');
}

recoForEach(arForEach, fnForEach); 