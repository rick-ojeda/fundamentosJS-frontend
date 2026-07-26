function sumar(a, b) {
        return a + b;
}

function restar(a, b) {
        return a - b;
}

function multiplicar(a, b) {
        return a * b;
}

function dividir(a, b) {
        if (b === 0) { // Excepción por si se intenta dividir por 0
                return "Error: No se puede dividir por cero";
        }
        return a / b;
}

// Función que selecciona y ejecuta la operación solicitada.
function calculadora(operacion, num1, num2) {
        let resultado;

        switch (operacion) {
                case "+":
                        resultado = sumar(num1, num2);
                        break;
                case "-":
                        resultado = restar(num1, num2);
                        break;
                case "*":
                        resultado = multiplicar(num1, num2);
                        break;
                case "/":
                        resultado = dividir(num1, num2);
                        break;
                default:
                        return "Operación no válida";
        }

        return resultado;
}

// Función autoejecutable que inicia la calculadora
(function ejecutarCalculadora() {
        let continuar = true;
        while (continuar) {
                console.log("Solicitud de ingreso de valores al usuario");
                let numero1Ingresado = prompt("Ingresa el primer número:"); // Solicita los números al usuario
                let numero2Ingresado = prompt("Ingresa el segundo número:");
                if ((numero1Ingresado) === null || (numero2Ingresado) === null) { // Verifica si el usuario pulsó Cancelar
                        alert("Por favor ingresa números válidos");
                        console.log("Operación cancelada por el usuario");
                        continuar = false;
                }
                else {
                        const numero1 = Number(numero1Ingresado); // Convierte las entradas a tipo numérico.
                        const numero2 = Number(numero2Ingresado);
                        console.log(`Número 1 ingresado: ${numero1}`);
                        console.log(`Número 2 ingresado: ${numero2}`);
                        if (isNaN(numero1) || isNaN(numero2)) { // Valido que ambos sean números válidos
                                alert("Por favor ingresa números válidos");
                                continuar = false;
                        }
                        else {
                                const operacion = prompt("Ingresa la operación (+, -, *, /):"); // Recibo el simbolo de la operación
                                console.log(`Operación seleccionada: ${operacion}`);
                                const resultado = calculadora(operacion, numero1, numero2); // Ejecuta la operación seleccionada
                                console.log(`Resultado obtenido: ${resultado}`);
                                if (!isNaN(resultado)) {  // Verifico que el retorno de la calculadora sea un número
                                        alert(`El resultado de la operacion es : ${resultado}`);
                                }        
                                else {
                                        alert(resultado); // En caso que sea una operación no válida se lo indico al usuario
                                }
                                const deseaContinuar = prompt("Desea seguir utilizando la calculadora (s/n)");
                                if (deseaContinuar === null || deseaContinuar.toLowerCase() !== 's') {
                                        console.log("El usuario finalizó la calculadora.");
                                        continuar = false;
                                }
                        }
                }
        }
})();

