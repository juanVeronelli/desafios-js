// Función principal que maneja las opciones
function main() {
    let opcion = prompt("Elige una opción:\n1. Calcular punto de equilibrio\n2. Dividir montón total\n3. Verificar credenciales\n4. Verificar edad");

    switch(opcion) {
        case '1':
            calcularPuntoEquilibrio();
            break;
        case '2':
            dividirMontoTotal();
            break;
        case '3':
            verificarCredenciales();
            break;
        case '4':
            verificarEdad();
            break;
        default:
            alert("Opción no válida");
            break;
    }
}

function calcularPuntoEquilibrio() {
    let costosFijos = parseFloat(prompt("Ingresa los costos fijos:"));
    let precioVenta = parseFloat(prompt("Ingresa el precio de venta:"));
    let costosVariables = parseFloat(prompt("Ingresa los costos variables:"));

    if (precioVenta - costosVariables === 0) {
        alert("El cálculo no puede realizarse porque el denominador es 0.");
        return;
    }

    let puntoEquilibrio = costosFijos / (precioVenta - costosVariables);
    alert(`El punto de equilibrio es: ${puntoEquilibrio}`);
}

function dividirMontoTotal() {
    let montoTotal = parseFloat(prompt("Ingresa el monto total:"));
    alert(`Gastos necesarios: ${montoTotal * 0.50}\nGastos opcionales: ${montoTotal * 0.30}\nAhorro e inversión: ${montoTotal * 0.20}`);
}

function verificarCredenciales() {
    const usuarioCorrecto = "admin";
    const contraseñaCorrecta = "1234";

    let usuario = prompt("Ingresa tu usuario:");
    let contraseña = prompt("Ingresa tu contraseña:");

    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
        alert("Bienvenido");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}


function verificarEdad() {
    let edad = parseInt(prompt("Ingresa tu edad:"));

    if (edad >= 18) {
        alert("Bienvenido");
    } else {
        alert("No cumples con la edad requerida");
    }
}

// Iniciar el programa
main();