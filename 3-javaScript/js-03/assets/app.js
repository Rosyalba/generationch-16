//Condicionales
//If

let condicion = "A"; //asignación
// === Igual que, devuelve un verdadero
//cuando cumple la condición


if(condicion === "A"){
    //Codigo que se hace si se cumple
    //la condicion A
    console.log("Entro en la condición A");
}

else if (condicion === "B") {
    //Codigo que se hace si se cumple
    //la condición B
    console.log("Entro en la condición B");
}

else if (condicion === "C"){
    //Codigo que se hace si se cumple
//la condición C
console.log("Entro en la condición B");
}

else {
    //Codigo que se hace si no se cumple
    //alguna de las condiciones anteriores
    console.log("No cumple con ninguna");
}

function dividir (a,b){
    if(b===0){
console.log("No se puede realizar la operación");
    }
    else
    console.log( a / b);
}
dividir(10,2)

//Switch
//Similar al if

let nuevaCondicion = "Hola";
switch(nuevaCondicion){
    case "Hola":
        console.log("Buenos días");
        console.log("Espero que te encuentres bien");
break;
        case "Adios" :
            console.log("Nos vemos");
break;

case "Saludo" :
    console.log("Te mando un abrazo");
break
default: //Por defecto
console.log("No entendí tu mensaje");
break

}

let edad = 30
switch(edad >= 18){
    case true:
    console.log("mayor");
    break
    case false:
        console.log("menor");
}

let elegir = 1
switch(elegir){
    case "sumar":
    console.log("Vamos a sumar");
    break
    case restar:
        console.log("Vamos a restar");
        case dividir:
            console.log("Vamos a dividir");
            case multiplicar:
                console.log("Vamos a multiplicar");
                default:
                    console.log("No entiendo");
                
    }
let evaluar= "sumar"
    if(evaluar === "sumar"){
        console.log("Vamos a sumar");
        
     } else if(evaluar == "restar")
      {  console.log("Vamos a restar");
        
      }else if(evaluar == "dividir")
       { console.log("Vamos a dividir");
        
       }else(evaluar == "multiplicar")
    {console.log("Vamos a multiplicar");
    }