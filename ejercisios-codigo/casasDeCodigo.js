// -----------------CASA DE TAURO--------------------


let carreritas =["Lucía", "Roberto", "Maria", "Jesus", "Andrea", "Jose"]
console.log(carreritas);

carreritas.unshift ("federico");
console.log(carreritas);


carreritas.pop ("Jose")
console.log(carreritas);

carreritas.splice (3,4,"Maria")
carreritas.splice (5,2, "Andrea")
carreritas.splice (5,5, "jesus")
console.log(carreritas);

carreritas.splice (2,0, "cristobal", "fernanda", "armando")
console.log(carreritas);

console.log("Al final de la carrera las posiciones de primero al ultimo fueron" +  carreritas);

// ------CASA DE VIRGO

const pesoPayasos = 112
const pesoMuñecas = 75
let ventaPayasos = prompt("Ingresa el número de payasos")
let ventaMuñecas = prompt("Ingresa el número de muñecas")
let pesoPack = ((pesoMuñecas * ventaMuñecas) + (pesoPayasos * ventaPayasos))

numeroPacks= (pesoPack / 1000)

if (numeroPacks < 1){
    alert("Se enviara 1 paquete");
}else if (numeroPacks > 1){
   alert("Se enviaran "+ numeroPacks + " paquetes");
}

alert("El peso total de paquetes es: " + pesoPack + " gramos");

// CASA DE ESCORPIO

alert('Bienvenido a la 🦂CASA DE ESCORPIO🦂 donde tendras que encontrar el "Número Mágico" para pasar... \n\nPara salir del juego ingresa el número "0"');

let max = 100;
let min = 1;

let secretNum = Math.random() * (max-min) + min;
secretNum = parseInt(secretNum);

console.log(secretNum);

let message = "Adivina el número mágico..."

while (true) {

    let userNum = prompt(message,"0");
    userNum = parseInt(userNum);

    if (userNum === secretNum) {
        alert("🎉Felicidades, adivinaste el número mágico.🎉");
        break;

    }else if (userNum === 0) {
        break;
        
    } else if (userNum > secretNum) {
        message = "El número " + userNum + " es mayor al número mágico...";
    } else if (userNum < secretNum) {
        message = "El número " + userNum + " es menor al número mágico...";
    }
}