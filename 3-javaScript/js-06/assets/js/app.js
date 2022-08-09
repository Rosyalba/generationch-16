//console.log(document.URL);

//getElementById()

console.log(document.getElementById("parrafo1").textContent);

const parrafo1 = document.getElementById("parrafo1");

console.log(parrafo1.textContent);

parrafo1.textContent = ""; //CAMBIA EL CONTENIDO DEL PARRAFO1 A VACIO

parrafo1.textContent = "Hola desde el parrafo 1 ";
console.log(parrafo1.textContent);

console.log(parrafo1.style);

parrafo1.style.color = "red";
parrafo1.style.backgroundColor = "yellow";

// querySelector ()
//etiqueta = p 
// clase = parrafo
// id = #parrafo1

const parrafo2 = document.querySelector(".parrafo");
console.log(parrafo2.textContent);

console.log( parrafo2.textContent += "\n Modificando el contenido desde JavaScript");
// \n --- Inserta un salto de linea === <br>

//  querySelector All () LIsta de nodos, nodeList

const parrafos = document.querySelectorAll("p")
console.log(parrafos[2]);
parrafos[2].style.fontSize ="2rem";

//css ---- font-size
// js ---- fontSize --- Lower camel case

//Modificar los atributos del html

const enlace = document.getElementById("enlace");
console.log(enlace.href);

enlace.href = "https://www.youtube.com/";
enlace.target = "_blank"
enlace.textContent = "enlace de Youtube"

const gato = document.getElementById("gato")
console.log(gato.textContent);
gato.style.backgroundColor = "green"
gato.textContent = (gato.textContent += " tambien hacia guauf")

// Reemplazar contenido

const parrafo4 = document.getElementById ("parrafo4");

console.log(parrafo4.nodeName);
console.log(parrafo4.innerHTML); // muestra el HTMK que haya en el interior del ducmento
console.log(document.body.innerHTML);
console.log(parrafo4.outerHTML); //muestra el contenido HTML, incluyendo al elemento

parrafo4.textContent = '<a href ="http://google.com">Enlace</a>' //mal
//reemplaza el contenido del elemento
parrafo4.innerHTML = '<a href ="http://google.com">Enlace</a>' //bien


console.log(parrafo4.outerHTML); // // reemplaza al elemento completo

parrafo4.innerHTML='<div class="elemento">Este es un div</div>';
parrafo4.innerHTML='<div class="elemento">Esto tambn es un div</div>'

// Js pwemirw modificar las clases css
//utilizando style

console.log(parrafo4.classList.contains("elemento"));
parrafo4.classList.add("elemento");

const cambiaColor =() => {
    parrafo4.classList.toggle("elemento");

}

cambiaColor(); //Se agrega la clase
cambiaColor(); //se quita la clase