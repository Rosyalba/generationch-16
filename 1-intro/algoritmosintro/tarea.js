let numero = prompt("Escribe un numero");
console.log(numero);

function encontrardivisibles (num) {
    let resultado = num/7 
    let resultado2 = num/8

    let residuo1 = resultado % 7 
    let residuo2 = resultado2 % 8
    
    if(residuo1 === 0 && residuo2 === 0){
        return true;
        
    }else {
        return false;
    }
}

encontrardivisibles (numero);
