`use scrict`;

//conversión de tipos de datos
//casteo , parseo
//casting parsing

//coersión de tipo de datos
//conversión automática de datos
let num = "5";
let num2 = "10";

//concatenación
//resultado de unir dos cadenas de texto
//unimos un número con una cadena de texto
console.log(num + num2);

//Number ()
//Conviernte cadenas o booleanos a números

let num3 = Number ("56"); //en cualquiera de los dos lados podrías ponerlo
console.log(Number(num3)); //pero en console.log no es permanente

let num4 = "" //si no hay nada, lo vuelve 0
console.log(Number(num4));

//string ()
//Convierte cadenas o booleanos a cadenas

let num5 = String (4);
console.log(num5);
console.log(typeof (num5));

//Boolean()
//Convierte numeros y cadenas a booleanos
// 0, "", undefined, NaN- false
//faultsy values - valores que tienden a falso
// todos los demas números los convierte a true

let num6 = Boolean (0);
console.log(num6);
console.log(typeof (num6));
