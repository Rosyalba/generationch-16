
//URL a consumir
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"





//Elementos del DOOM
const imgpokemon = document.getElementById("img-pokemon")
console.log(imgpokemon);

const idpokemon = document.getElementById("id-pokemon")
console.log(idpokemon);

const nombrepokemon = document.getElementById("nombre-pokemon")
console.log(nombrepokemon);

const listaHabilidades = document.getElementById("lista-habilidades");
console.log(listaHabilidades);

const listaTipos = document.getElementById("lista-tipos")
console.log(listaTipos);

const formulario = document.getElementById("buscador-pokemon")
console.log(formulario);
// -----Eventos
formulario.addEventListener("submit", (e) =>{
    e.preventDefault()

const inputPokemon = document.getElementById("busqueda-pokemon")
console.log(inputPokemon.value);
const nuevaBusqueda = urlPokemon + inputPokemon.value
console.log(nuevaBusqueda);

obtenerPokemon(nuevaBusqueda)



})



//Funciones

async function obtenerPokemon(url){
try{
    
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
//     console.log(datos);
// console.log(datos.forms[0].name);
// console.log(datos.abilities);
// console.log(datos.id);
// console.log(datos.types);
// console.log(datos.sprites.other["official-artwork"].front_default)

    const pokemon = {
        nombre: datos.forms[0].name,
        habilidad: datos.abilities,
        numero: datos.id,
        tipo: datos.types,
        imagen: datos.sprites.other["official-artwork"].front_default
    }


    //Imagen, nombre y ID
    console.log(pokemon.habilidad);
    imgpokemon.src = pokemon.imagen
idpokemon.textContent = pokemon.numero;
nombrepokemon.textContent = pokemon.nombre

//Habilidades
console.log(pokemon.habilidad.length);

let template = ` `
for (let i=0; i< pokemon.habilidad.length; i++){
    const nombreHabilidad = pokemon.habilidad[i].ability.name
console.log(nombreHabilidad);
template += `<li class="list-group-item">${nombreHabilidad}</li>`


}

listaHabilidades.innerHTML =  template;

//Tipos
console.log(pokemon.tipo);

let templateTipos = `` 

pokemon.tipo.forEach((tipo) => {
    console.log(tipo.type.name);
    const nombreTipo = tipo.type.name;
    console.log(nombreTipo);

templateTipos += `<li class="list-group-item">${nombreTipo}</li>`



})


listaTipos.innerHTML = templateTipos;



}catch(e){
alert("Pokemon no valido")
    }
}



