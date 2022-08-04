//Funciones como objetos

function miFuncion (a =b, b= 7){ //(a, b) <-- parámetros
 let res = 0; //propiedad
 res = (a * b); //acción o proceso
 return res;
 
}

console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);