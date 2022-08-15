const palindromo = require("../js/palindromo.js")

describe("Pruebas de la función palindromo", () =>{
    Test('debe regresar "Es un palindromo" si regresamos ojo',() =>{
let mensaje = "Es un  palindromo";
let palabra = "ojo";

expect (palindromo(palabra)).toBe(mensaje);
    

    test('debe regresar "No es un palindromo" al ingresar generation', () =>{
        let mensaje = "Es un palindromo"
        let palabra = "generation";
    expect(palindromo(palabra)).not.toBe(mensaje1)    })
} )

test('al ingresar un número debe regresar el mensaje', ()  =>{
    let mensaje ="No es una palabra";
    let valor= 1;

    expect(palindromo(valor)).toBe(mensaje)
})
})