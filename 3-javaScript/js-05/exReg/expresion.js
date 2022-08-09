
//let texto = "Hoy parece que va a salir el sol";
//let texto01 = "La espero en el aeropuerto de LA"
//let buscar = /sol/;
//console.log(buscar.test(texto));

let text = "te marqué anoche"
let buscar = /[eo]/;
console.log(buscar.test(text));


let texto001 = "o = 4,567"
let buscars = /[1 - 5]/;

console.log(buscars.test(texto001));
let tex01 = "Los numeros primos son 235 7 dentro de los primeros 10 numeros";
let busca = /\d{3}/;
console.log(busca.test(tex01));

let tex = "usuario@servidor.com";
let bus = /[\w]+@{1}[\w]+\.[a-z]{2,3}/;
console.log(bus.test(tex));
