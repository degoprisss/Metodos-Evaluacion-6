let arFindIdex = [3, 10, 18, 20]
function fnFindIndex(num){
    return num >= 20; 
}

let resulFindIndex = (ar, fn) => {
    let found = 0;
    for (let index = 0; index < ar.length; index++) {
        if (fn(ar[index])) {
            found = index;
            break;
        }
    }
    return found; 
}

let foundFindIndex = resulFindIndex(arFindIdex, fnFindIndex); 
document.write('Este es el resultado del meodo FinIndex: '+foundFindIndex+'<br>'); 