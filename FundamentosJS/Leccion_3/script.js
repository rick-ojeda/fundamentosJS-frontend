console.log("Definición de variables");
const numeros = []; // Defino un arreglo vacío para almacenar los números
const total = Math.floor(Math.random() * 20) + 1; // Genero al azar un número entre 1 y 20 para el largo del arreglo
let i = 0;
let j = 0;
const mayores = []; // Defino un arreglo vacío para almacenar los números según la condición
while (i < total) { 
        numeros[i] = Math.floor(Math.random() * 100) + 1; // Genero números al azar entre 1 y 100 y los ingreso al arreglo números
        i++;
}
console.log("El contenido del arreglo es:");
// Recorro el arreglo con los números con un ciclo while
while (j < numeros.length) { 
        console.log(numeros[j]);
        j++;
}
// Recorro el arreglo con un ciclo for
console.log("\nRecorrido del arreglo con un ciclo for y con una condición de filtrado");
for (let k = 0; k < numeros.length; k++) {
        if (numeros[k] >= 15) { // Establezco la condición para ingresar números al nuevo arreglo
                console.log(`${numeros[k]} es mayor o igual a 15, se agrega al arreglo`);
                mayores.push(numeros[k]);
        }
        else {
                console.log(`${numeros[k]} es menor a 15, no se agrega al arreglo`);
        }
}





