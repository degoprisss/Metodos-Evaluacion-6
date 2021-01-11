let arPluck = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
function fnPlunck(arr, index){
    return arr[index].name; 
}
let resulPlunck = (arr, fn) => {
    let newPluck = [];
    for (let index = 0; index < arr.length; index++) {
        newPluck.push(fn(arr, index));
    }
    return newPluck; 
}

let resuPlunck = resulPlunck(arPluck,  fnPlunck); 
document.write('Este es el resultado del metodo Plunck: '+'['+resuPlunck+']'+'<br>'); 