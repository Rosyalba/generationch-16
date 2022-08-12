// Tipo prefefinido
let tiempo = new Date();
console.log(tiempo);
console.log(Math);

let obj_literal ={
    nombre: "juan",
    edad: 35
}

let obj_constructor = new Object();
obj_constructor.nombre = "Dora";
obj_constructor.edad = 23;

console.log(obj_literal);
console.log(obj_constructor);

obj_literal["nombr"];
let llave = "nombr"
console.log("esto es una llave" + obj_literal [llave]);
//Tipo cadena

let cadena = "Esto es una cadena";
let cadena_Obj = new String("Esto es otra cadena obj")
console.log(cadena);
console.log(cadena_Obj);

//Tipo numérico

let numero = 13;
let numero_obj = new Number(13.13)
console.log(numero);
console.log(numero_obj);


let numeros = ["2","3","5", "7"];
let numeros_obj = new Array ("1", "4", "6", "8","9");
console.log(numeros);
console.log(numeros_obj);