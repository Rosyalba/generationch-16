/*  

    Instrucciones:

    * Utilizar la API cat
        - https://api.thecatapi.com/v1/images/search

    * Con un boton se debe mostrar una imagen de un gato
    * Que las imagenes tengan un tamaño de 600x400 sin deformar la imagen

    Nota:
    Cuidado con el tipo de dato que se recibe

*/

const urlAleatorio = "https://api.thecatapi.com/v1/images/search"
const imgGatito = document.getElementById("img-catito");
const btn = document.getElementById("btn-cati");
console.log(btn);

btn.addEventListener("click" , () => {
    console.log("Boton presionado");

    //Agregar la funcionalidad
    obtenerGatitoAleatorio(urlAleatorio)

})


async function obtenerGatitoAleatorio(url){
const respuesta = await fetch(url)
const dato = await respuesta.json()

console.log(dato);

console.log(dato[0])
console.log(dato[0].id);
console.log(dato[0].url);
// console.log(datos.message);
// console.log(datos.status);

imgGatito.src = dato[0].url

}
