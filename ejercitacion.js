let nombreDeUsuario = "lara22";


let lara22 = "Silvana Juarez";


let saldoDeLaCuenta = "30000";


if (nombreDeUsuario == lara22) {


    alert("Bienvenida Silvana Juarez");


    alert("Tu saldo es: $ " + saldoDeLaCuenta)


}


let montoDelRetiro = parseFloat(prompt("Ingrese el monto a retirar"));


let saldoFinal = saldoDeLaCuenta - montoDelRetiro


if (montoDelRetiro > 0){


    alert("Retiro exitoso, su saldo final es $" + saldoFinal)


    alert("Gracias por operar con nosotros")
}


else {


    alert("Por favor, ingrese un monto válido mayor a 0")


}

function sumar(numero1, numero2) {
    numero1 = numero1 + numero2

    return numero1
}

function restar(numero1, numero2) {
    let resta = numero1 - numero2

    return resta
}

function multiplicar(numero1, numero2) {
    let multiplicacion = numero1 * numero2

    return multiplicacion
}


let primerNumero = 10


console.log(sumar(primerNumero, 5))
console.log(primerNumero)
console.log(sumar(10, 890))
console.log(multiplicar(23121, 123124))
function actualizarSaldo(usuario, nuevoMonto) {
    usuario.saldo = nuevoMonto
}

let usuario1 = {
    nombreDeUsuario: "Lautaro",
    pin: 1234,
    saldo: 5000
}
let usuario2 = {
    datosPersonales: {
        username: "lucas.lopez",
        nombre: "Lucas",
        apellido: "Lopez",
        cuil: 13215646746
    },
    pin: 4321,
    saldo: 15000
}

actualizarSaldo(usuario2, 20000)