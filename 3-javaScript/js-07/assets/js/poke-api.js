
//URL a consumir

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/78"




//Elementos del DOOM
const imgpokemon = document.getElementById("img-pokemon")
console.log(imgpokemon);

const idpokemon = document.getElementById("id-pokemon")
console.log(idpokemon);

const nombrepokemon = document.getElementById("nombre-pokemon")
console.log(nombrepokemon);

//Funciones

async function obtenerPokemon(url){
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

    console.log(pokemon.habilidad);
    imgpokemon.src = pokemon.imagen
idpokemon.textContent = pokemon.numero;
nombrepokemon.textContent = pokemon.nombre

}

obtenerPokemon(urlPokemon)