
let arFind = [1, 2, 3, 4, 5, 6]
function fnFind(num){
    return num % 2 == 0; 
}

let resulFind = (ar, fn) => {
    let found = 0;
    for (let index = 0; index < ar.length; index++) {
        if (fn(ar[index])) {
            found = ar[index];
            break;
        }
    }
    return found; 
}

let foundFind = resulFind(arFind, fnFind); 
document.write('Este es el resultado del meodo Find: '+foundFind+'<br>'); 