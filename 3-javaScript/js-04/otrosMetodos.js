

//    ------ Sort ()
// Ordenar los elementos de un arreglo 

const arr = ["X", "A", "H", "a", "W", "b"]

arr.sort();
console.log(arr);

const arr2 = ["Hola", "adios", "bienvenido", "Calle"];

arr.sort();

console.log(arr2);

const arr3 = [5, 1231, 567, 1, 80]; //En número sólo toma el primer valor para ordenar

arr3.sort();
console.log(arr3);

// ------------ Función  declarada
// ---Holsting
// Un proceso de reacomodo automatico del código
// Se puede declarar desde cualquier parte del código
function sumar(a,b){
    return a + b;
}
let a = 2;
console.log(a);

//console.log(sumar(5,7));

// ---------fUNCIÓN EXPRESADA
//hoisting no funciona

const multiplicar = function(a,b){
    return  a * b;
}
console.log(multiplicar(3,5));

//  ----------- FUNCIONES  FLECHA
// const dividir = (a,b) =>{
// return a / b;
// }

const dividir =(a,b) => a/b // La flecha es basicamente de adorno pero necesaria
console.log(dividir (10,2));


const arr6 = [5, 1231, 5567, 1, 80]; // ----ORDENAMIENTO DE BURBUJA
arr6.sort((a,b) => b - a ); //ordena número de forma descendente
arr6.sort((a,b) => a -b); // Ordena de menor a mayor 
console.log(arr6); //

//------ ForEach ()
//Un ciclo que recorre en automatico todo nuestro arreglo

const arrNumeros = [1,4,6,8,10];
// for( let i = 0; i< arrNumeros.length; i++){
// arrNumeros[i] = arrNumeros[i]*2;
// }
arrNumeros.forEach((elemento, index, arr)  => 
    console.log(elemento *= 2) // elemento *= 2
)
// console.log(elemento, index, arr));

// forEach (elemento, indice, arreglo completo)