// Los mensajes son constantes y no se modificarán
const mensajeUno = "Ingrese el primer número:";
const mensajeDos = "Ingrese el segundo número:";
console.log("Se solicita el ingreso de los números para las operaciones matemáticas.");
// Solicito el ingreso de los números
const primerNumero = Number(prompt(mensajeUno));
const segundoNumero = Number(prompt(mensajeDos));
if (isNaN(primerNumero) || isNaN(segundoNumero)) { // Verifica que los valores ingresados sean números
        alert("Por favor ingrese números válidos.");
        console.log("\nSe ingresaron números inválidos.");
}
else {
        console.log("\nSeleccione la operación a realizar");
        console.log("\nSuma: 1 , Resta 2, Multiplicación 3, División 4");
        // Se solicita la selección de la operación deseada
        const operacion = Number(prompt("Seleccione la operación a realizar: 1 Suma, 2 Resta, 3 Multiplicación, 4 División"));
        let resultado; // Variable que almacena el resultado de la operación matemática
        switch (operacion) {  // Se ejecuta la operación elegida
                case 1:
                        console.log("Suma");
                        resultado = primerNumero + segundoNumero;
                        alert("El resultado de la suma es: " + resultado);
                        console.log("\nLa suma de los dos números es: " + resultado);
                        break;
                case 2:
                        console.log("Resta");
                        resultado = primerNumero - segundoNumero;
                        alert("El resultado de la resta es: " + resultado);
                        console.log("\nLa resta de los dos números es: " + resultado);
                        break;
                case 3:
                        console.log("Multiplicación");
                        resultado = primerNumero * segundoNumero;
                        alert("El resultado de la multiplicación es: " + resultado);
                        console.log("\nLa multiplicación de los dos números es: " + resultado);
                        break;
                case 4:
                        console.log("División");
                        if (segundoNumero !== 0) { // Verifico que el divisor no sea cero y realizo la división
                                resultado = primerNumero / segundoNumero;
                                alert("El resultado de la división es: " + resultado);
                                console.log("\nLa división de los dos números es: " + resultado);
                        }
                        else {
                                alert("No es posible dividir por 0."); // En caso de que el divisor sea cero, muestro el mensaje
                                console.log("\nSe intentó dividir por 0.");
                        }
                        break;
                default:
                        alert("Selección no válida. Por favor seleccione 1, 2, 3 o 4.");
                        console.log("\nNo se seleccionó ninguna de las opciones: 1, 2, 3 o 4.");
        }
}
