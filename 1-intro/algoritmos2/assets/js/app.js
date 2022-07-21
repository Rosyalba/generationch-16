function saludar () {
    // console.log("Hola mundo");
}

//saludar ();

//Un array, tambien llamado matrix, arreglo o vector, no es mas que
//un tipo de dato estructurado que permite guardar un conjunto de datos
//ordenado. A cada dato se le asigna un indice que indica su posicion
//dentro del array
//Empieza desde el numero 0

//Arreglos

let num = [];
// console.log(num);

let arr1 = new Array ();
// console.log(arr1); // no tan usada

//usar arreglo

const arr = [1,2,3,4,5];
// console.log(arr);


//notacion de corchetes []
// console.log(arr[3]);

arr[5] = 25;
Attr[6] = 8;
arr[7] = 0;
arr[10] = 40;
// console.log(arr);

//Propiedades de los arreglos
//descripcion de nuestro arreglo
// console.log(arr.length);

//Métodos
//acciones que puede realizar arreglo

const frutas =["manzana", "platano"];
// console.log(frutas.length);
// console.log(frutas);

//push ()
//permita agregar un valor al final del arreglo
let fruta = "Toronja";

frutas.push("naranja");
frutas.push (fruta);
// console.log(frutas);

//pop()
//quita un elemento del final del arreglo


let elementoBorrado = frutas.pop ();
// console.log(frutas);
// console.log(elementoBorrado);

//unshift ()
//agrega un elemento al inicio del arreglo

let devolver = frutas.unshift("uva");
// console.log(frutas);
// console.log(devolver);

//shift
//elimina un elemento del inicio de un arreglo

frutas.shift();
frutas.shift();
let frutaQuitada1 = frutas.shift();
let frutaQuitada = frutas.shift();
// console.log(frutas);
// console.log(frutaQuitada);
//Arreglo multidimensional

const newArr = [1, 45, "Hola", "Adios", true, null,[ 
    30, 31, 32], ["Azul", "Amarillo", "Verde"]];

//     console.log(newArr);
//  console.log(newArr[6][1]);
//  console.log(newArr[7][1]);

 //Objetos
//estructura especial llamada objeto
//nos permite guardar pares de valores
//key - valor
//llave - valor


const obj = { nombre : "Pedro",
 edad : 25,
color : "Azul",
hobbies : ["Leer", "Correr"]
};

console.log(obj.edad);
console.log(obj.hobbies[1]);