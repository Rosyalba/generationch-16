//Variable que simula los datos pedidos 

const saludo = "Hola amigo"  
const datos =[
{nombre: "Rosy",
    apellido: "Serrano"
},
{nombre: "Rosy",
    apellido: "Serrano"
},
{nombre: "Rosy",
    apellido: "Serrano"
},
]

//Funcion para simular una petición

function obtenerDatos (){
return new Promise ( (resolve, reject) => {
//     setTimeout( () => {
//     resolve (datos)
//     }, 2000)
// }
// )

setTimeout(() => {
    if(false){
        resolve(datos);
    } else{
        reject("Nunca te quiso");
    
} 2000})})};




//     setTimeout( () => {
//     return saludo;
// }, 2000)


//Forma N.1
obtenerDatos().then((datos) => {
console.log(datos);
}).catch((error) =>{
    console.log(error);

} )

//Forma numero2

async function funcionAsincrona (){
 
    try{const datos = await obtenerDatos ()
        console.log(datos);
         
    } catch(error){
        console.log(error);
    }

    
}

funcionAsincrona()