let x = 10;
console.log(x.lenght);

let persona = {
    nombre: "Juan",
    apellido: "Fernandez",
    edad: 23,
    email: "usuario@servidor.com",
    // nombreCompleto: function(){
      //   return this.nombre + ''  +this.apellido;
    

    idioma: "es",
    get leng() {
        return this.idioma.toUpperCase(); 
    },
    set leng (Lang){
        this.idioma = Lang.toLowerCase ();
    }

    
}

console.log(persona.leng);
persona.lang = "ES";
console.log(persona.leng);
console.log(persona.idioma);


persona.tel = "11223344"
persona.te1 = "556677"

console.log(persona);
console.log(persona.nombre);
// console.log(persona.nombreCompleto());

// For in

for (VarPropiedad in persona){
    console.log(persona[VarPropiedad]);
}

let personaString = JSON.stringify(persona);
console.log(personaString);

