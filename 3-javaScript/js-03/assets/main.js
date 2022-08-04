//Bucles
//Estructura que nos permite repetir nuestro código

//For
//Es un ciclo controlado
//Se le tiene que indicar lo siguiente:
// La variable con la que va a trabajar
// i, j, k, l
// Condición para que se ejecute
//Cambio de nuestra variable de trabajo

for (let i = 0; i <= 10; i ++)  {
console.log("El valor de i es " + i);
}

for (let j = 0; j <= 10; j = j +2)  {
    console.log("El valor de i es " + j);
    }

    //while
    //Es un ciclo no controlado
//Se necesita:
//Una condición

    //mientras => true o false


    while(/*true*/){ //No lo hagas!! Lopp infinito literal!!
        console.log("Loop infinit");

    }
let saludo;
    while(saludo = "Hola"){
        saludo = prompt("Saludame");
    }