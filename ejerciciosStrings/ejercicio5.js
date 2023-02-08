//Escribir un programa para obtener el nombre de usuario de un correo electrónico.

// #Ejemplo
// Entrada: nombredeuser@magbdigital.net
// salida: nombredeuser

let correo="kls_angelo@hotmail.com";
let nameUser="";

for(let i=0; i < nombres.length ;i++){    
    if(correo[i]=== "@"){
        nameUser=correo.substring(0,i);
    }
}

console.log("El nombre de usuario es:" + nameUser);