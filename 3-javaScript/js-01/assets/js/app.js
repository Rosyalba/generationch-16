`use strict`
//Javascript de forma stricta

/* Tipos de datos */


//Tipos de variables
let a = 20; //local
const b = 0; //constante y local
var c; //global

const PI = .1416;


//scope - contexto
//espacop en el que vive la variable


//string
let cadena = "Hola mundo!";
let cadena2 = `Hola mundo!`

//Number
let Number = 5
let numero1 = 5.89;
let numero2 = -5.89;

//Boolean
let booleano = true;
let booleano2 = false;

//undefined - indefinido
let variable;
console.log(variable + 4);

//null
let vacio = null
console.log(vacio);
//NaN - Not a Number
//No es un número
//tratar de realizar alguna operación aritmetica con algun 
//dato que no es un número

/* Plantillas literales
template strings
literal strings
Interpolacion */

console.log(`Esta es una cadena ${5+4}`);
console.log("Esta es una cadena normal ${5+4}");

let nombre = `Rosy`;

let presentacion = ``;

console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`);

/*Arreglos - matrices - arrays */
let arr = [1, "A", null, undefined, [true, false]];

//notación de corchetes
console.log(arr[4][0]);

if (arr.length >= 5){
    console.log("tiene mas de 5 elementos");
}

let arr2 = new Array("B", 2);
console.log(arr2);

//Objetos
//Clave / valor

const persona = { 
    nombre: `Rosy`,
    edad: 28,
    hobbies: ["salir a caminar",
    "ver series",
    "comer"],
    auto: {
        marca: "ninguno", 
    modelo: "no tengo",
    year: "no hay" },

    saludar: function (){
        return("Hola");
    }

};
persona.nombre = "Naruto"

//Notación de punto
console.log(`Mi nombre es ${persona.nombre}`);

console.log(`Mi hobby favorito es ${persona.hobbies[1]}`);

console.log(`la marca de mi carro es ${persona.auto.marca}`);

console.log(persona.saludar());

console.log(`la acción que realizo es: ${persona.saludar()}`);