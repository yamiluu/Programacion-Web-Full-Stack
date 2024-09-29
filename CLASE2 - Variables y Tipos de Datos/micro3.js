/* 1. En el archivo creado debes desarrollar un código para lograr efectuar operaciones aritméticas. 
Para ello, declarar dos variables, otorgando el nombre y los valores numéricos que consideres. 
Ejemplo: let numero1 = 16;
2. Usando el console.log() mostrar al usuario los resultados de las siguientes operaciones aritméticas, 
en función de los valores asignados a las variables:
a. suma
b. resta
c. multiplicación
d. división
e. módulo
3. ¿Cual de los valores es mayor? Si el valor es mayor, mostrará un valor boolean true. De lo contrario mostrará false 
4. ¿Cual de los valores es menor? Si el valor es menor mostrará un valor boolean true. De lo contrario mostrará false. */

let numero1 = 4;
let numero2 = 2;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let división = numero1 / numero2;
let modulo = numero1 % numero2;

if (numero1<numero2) {  //(numero2>numero1 || numero1<numero2) se podria poner asi pero es lo mismo y mas eficiente.
    console.log(true);  
} else {
    console.log(false);
}
