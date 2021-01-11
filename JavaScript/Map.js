
let arMap = [1, 2, 6, 8];
function fnMap(num){
    return num * 2;
}

let resulMap = (arr, fn) => {
    let newMap = [];
    for (let index = 0; index < arr.length; index++) {
        newMap.push(fn(arMap[index]));
    }
    return newMap; 
}

let Mapeado = resulMap(arMap, fnMap); 
document.write('Este es el resultado del meodo Map: '+'['+Mapeado+']'+'<br>'); 