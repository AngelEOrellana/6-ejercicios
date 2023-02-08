//Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el formato
// de numeración de las oficinas  es: “01.24” lo que significa piso 1 oficina 24.
// #Ejemplo:
// codigo: "01.24"
// salida: 01


let numero="01.24";

console.log("El número de piso de " + numero + " es " + numero.substring(0,2));