// Crear un elemento

const imagen = document.createElement("img")
console.log(imagen);
//modificar los atributos html del emento
imagen.src ="https://placeimg.com/640/480/animals?t=1659991261832";
imagen.alt = "Imagenes de animalitos"

//lo insertamos en un elemento padre
document.body.appendChild(imagen)

document.body.insertAdjacentElement("afterbegin",imagen)

document.body.insertAdjacentElement("afterend",imagen)
document.body.insertAdjacentElement("beforebegin",imagen)
document.body.insertAdjacentElement("beforeend",imagen)

//forma correcta de crear e insertar un elemento
// 1-- se crea el elemento que contendrá la imagen
//2-- seleccionar el elemento padre

const padreImg = document.getElementById("padreImg");

//3-- Crear el elemento

const imagen2 = document.createElement("img");

//4- Modificamos los atributos del elemento
imagen2.src ="https://placeimg.com/640/480/any/grayscale";
imagen2.alt = "imagen en escala de grises";

//5--- insertar el elemento
padreImg.appendChild (imagen2);

//Utilizar forEach para pintar datos


const frutas = ["toronja", "manzana", "mandarina", "limon", "granada", "limon"];

const listaFrutas = document.getElementById("frutas");


//forma1
// frutas.forEach((element) => {
//     const li = document.createElement("li");
//     li.textContent = element
//     listaFrutas.appendChild(li)
// })

//forma2
frutas.forEach((el) => {
    listaFrutas.innerHTML += `<li>${el}</li>`
})
