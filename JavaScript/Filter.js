const varFil = [1, 2, 7, 10];

function fnFilter(valor){
    return valor < 10;
}

function filtre(arreglo, fn){
    let ar = [];
    for (let index = 0; index < arreglo.length; index++) {
        if (fn(arreglo[index])) {
            ar.push(arreglo[index])
         }
    }
    return ar; 
}

let resu = filtre(varFil, fnFilter); 
document.write('Este es el resultado del metodo Filter: '+'['+resu+']'+'<br>'); 