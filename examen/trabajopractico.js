// 1. Pídele al usuario mediante `prompt()` que indique su `edad` 
// y asigna el valor a una variable. Luego, identifica si el usuario
// es mayor de edad (18 años) y muestra un mensaje que diga "Tienes
// [edad] años, [eres/no eres] mayor de edad" mediante un
// `alert()`, reemplazando con los valores correspondientes.

let edad = prompt("Por favor, ingrese su edad")

if (edad < 18) {

    alert("Tienes " + edad + " años, eres menor de edad")
} else {

    alert("Tienes " + edad + " años, eres mayor de edad")
}

// 2. Pídele al usuario mediante `prompt()` que ingrese un valor en
// grados Celsius. Convierte esta temperatura a grados Fahrenheit 
// utilizando la fórmula `F = (C * 9/5) + 32` y muestra el resultado un `alert()`, formateando el mensaje.

let temperaturaCelsius = prompt("Por favor, ingrese un valor en grados Celsius")

let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

alert("El valor ingresado equivale a " + temperaturaFahrenheit + " grados Fahrenheit")

// 3. Pídele al usuario mediante `prompt()` que ingrese un valor 
// numérico entre 0 y 100, y guárdalo en una variable llamada 
// `calificación`. Valida que el valor ingresado sea un número 
// válido. Utiliza una estructura condicional para mostrar en un 
// `alert()` si la calificación es "Excelente," "Aprobado," o 
// "Reprobado" según un rango de calificaciones.

let calificacion = prompt("Ingrese un valor de 0 al 100")

if (calificacion == 100) {
    
        alert("Excelente")

    } else if (calificacion >= 60 && calificacion <= 99) {

        alert("Aprobado")
    } 

    if (calificacion < 60) {

        alert("Reprobado")
        
    } else {

        alert("Ingrese una calificación válida")
    }

// 4. Pídele al usuario mediante `prompt()` que ingrese un valor 
// numérico entre 1 y 7, y guarda en una variable llamada 
// `diaSemana` su equivalente en palabras (1 == lunes, 2 ==
// martes, etc). Valida que el valor ingresado sea un número válido.
// Utiliza una declaración `switch` para mostrar un mensaje amigable
// y entendible, que indique si es un "Día laboral" o "Fin de semana" en función del valor de `diaSemana`.

// 5. Pídele al usuario mediante `prompt()` que ingrese tres valores
// numéricos que representen las longitudes de los lados de un 
// triángulo. Valida que los valores ingresados sean números válidos
// y enteros positivos mayores que 0. Escribe una estructura
// condicional para determinar si el triángulo es equilátero (todos
// los lados iguales), isósceles (dos lados iguales), o escaleno 
// (ningún lado igual). Muestra un mensaje amigable y entendible indicando el resultado.