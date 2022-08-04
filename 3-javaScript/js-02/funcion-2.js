function miFuncion (a,b){
    return( a + b);
}

let resultado = miFuncion( 3, 6);
console.log("el resultado es " + resultado);

//Función expresión
// o anónima

let suma = function (a,b){ return (a + b)};

let res = suma (2,3);
let caracteres = "La suma es : "
console.log(caracteres + res );

let resta = function (c,d){ return ( c - d)}
let resul = resta (2,3);
let carac1 = "la resta es : "
console.log(carac1 + resul);

let multi = function (e,f){ return ( e * f)}
let resulta = multi (2,3);
let caracte = "la resta es :"
console.log(caracte + resulta);

//función autollamada
// Self Invoking
//Es una función única, de una sola vez

(function (a, b){
    console.log("El resultadode Self Invoking es: "+ (a + b));
}
) (3,4);