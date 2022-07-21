//funciones

function sumar (numero1, numero2) {
    console.log("Voy a sumar");
    console.log("El resultado de la suma es: " + (numero1 + numero2));
}

sumar(10,5);
sumar (1,1);
sumar (4,5);


//sumar (10,5);
//sumar (1,1)
//sumar (4,5);
//ejercicio 2 


function calculadoraSueldo (sueldoIngresado, diasTrabajados) {

//     let nombre = prompt ("Escribe tu nombre");
// console.log(nombre);

const sueldo = sueldoIngresado
const diasSemana = diasTrabajados
const semanaMes = 4;

/*console.log("sueldo Semana: " + (sueldo * diasSemana));
console.log( "Sueldo Semana: " + (sueldo *diasSemana * semanaMes)); */

console.log("sueldo Semana: " + (sueldoIngresado * diasTrabajados));
console.log( "Sueldo Semana: " + (sueldoIngresado *diasTrabajados * semanaMes));

return semanaMes;
}
 let mes = calculadoraSueldo (100,2)
calculadoraSueldo (100,2)

console.log(semanasMes);

//calculadora de porcentaje
//0.6 = 60%

function calcularporcentaje (numero, porcentaje) {

    let resultado = numero * porcentaje
    return {resultado, numero, porcentaje }
   

}
let resultado2 = calcularporcentaje (100, 0.40)
console.log(resultado2);

let multi = 5 + 5
console.log(multi);



