
let arContains = [1, 2, 3];

let resulContains = (ar, fn) => {
    for (let index = 0; index < ar.length; index++) {
        if (fn === ar[index]) {
           var resul = true;
           break;  
        }else{
            resul = false; 
            // break; 
        }
    }

    return resul; 
}

let resulBoolean = resulContains(arContains, 1); 
document.write('Este es el resultado del meodo Contains: '+resulBoolean+'<br>'); 
