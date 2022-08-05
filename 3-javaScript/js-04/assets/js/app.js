//for (control; condicion, modificador)
// i == variable local

for (let i = 0; i < 5; i ++){ // i = i + 1
    console.log(i);
}

for(var i = 1; i == 5; i ++){
    console.log(i);
}
// while
let control = 0; //control
while(control < 5){ // condición
    console.log("while " + control);

    control++; //modificador


}

let control2 = true;
while(control2 === false){
    alert ("estoy trabajando");
}

// ----- Do ... While
//Hacer .... hasta/mientras

//iterar   --------  ejecutar el código
let numero = 0;
do{
console.log("Do...While: " + numero);
numero++;
}while(numero < 5);