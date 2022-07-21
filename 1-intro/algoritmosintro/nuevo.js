// un ALGORTitmo que permita calcular el sueldo de un empleado 
//por semana y por mes
// como dato tenemos su sueldo diario (600) y como salida se debe
//imprimir el nombre y el dinero que recibira por semana y mes 

let empleado = "Rosy"
let sueldoDiario = 60;
let semanaMes = prompt ("que desea calcular")

if (semanaMes === "semana" ) {
    console.log(empleado + "gana" + sueldoDiario * 5 + "por semana");
} else if (semanaMes === "mes" ) {
    console.log(empleado + "gana" + sueldoDiario * 30 + "por mes");
}


fun