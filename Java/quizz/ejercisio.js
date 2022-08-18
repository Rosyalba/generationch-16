let cadena = "parangaricutirimicuaro";
let caracter = "1"

function enumerar(cadena, caracter){
    let contador = 0;
    for (let i = 0; i < cadena.length; i++){
        if (cadena[i] == caracter){
            contador++
        }
    }
    return contador
}

console.log(enumerar(cadena,caracter))

let mensaje = "hola"
const array = [1,2,3,4,5]
console.log(mensaje.length);
console.log(array.length);

console.log(mensaje[mensaje.length -1]);
/////////////////////////////////

function calcularFactorial (num) {
    let factorial = 1

    for( let i= 1; i <= num; i++){
        factorial= factorial * i
    }
return factorial
}
console.log(cacularFactorial(0));