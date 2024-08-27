let dolar = 1350;
let euro = 1507;

function calcular(pesos, dolar, euro, cuenta) {
    switch(cuenta) {
        case "1":
            if(pesos === 0) {
                return "No se puede dividir por 0";
            } else {
                return pesos / dolar;
            }
        case "2":
            if(pesos === 0) {
                return "No se puede dividir por 0";
            } else {
                return pesos / euro;
            }
        case "3":
            return dolar * pesos;
        case "4":
            return euro * pesos;
        default:
            return "Operación Inválida";
    }
}

let continuar = true;

while (continuar) {
    let operacion = prompt("Seleccioná una operación indicando el N°:\n1 Pesos a Dolares\n2 Pesos a Euros\n3 Dolares a Pesos\n4 Euros a Pesos\n0 Salir");
    
    if (operacion === "0") {
        continuar = false;
        alert("¡Gracias por usar la calculadora de conversiones!");
    } else {
        let pesos = parseFloat(prompt("Ingresa el Valor a convertir"));

        if (isNaN(pesos)) {
            alert("Por favor ingresa un número válido.");
            continue; // Volver a comenzar el bucle si el valor ingresado no es un número válido
        }

        let resultado = calcular(pesos, dolar, euro, operacion);
        alert(resultado);
    }
}
