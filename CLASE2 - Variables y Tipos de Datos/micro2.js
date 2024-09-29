/* 1. En el archivo se desarrolla un código para calcular el nuevo sueldo a un trabajador, para ello debes declarar 
las siguientes variables y almacenar en ellas los siguientes datos del trabajador: 
nombre , apellido, sueldoActual, porcentajeAumento.
2. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la operación del aumento del trabajador 
(sueldoActual * porcentajeAumento) / 100). 
3. En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo sueldo.
4. Usando el console.log() y concatenando string, muestra en la consola de Visual Studio Code los contenidos de cada una 
de las variables: 
Ejemplo de código:
Hola, estimad@ Gloria Sanchez
En base a su sueldo actual: $20000
Ha recibido un aumento del 25%: $5000 
y su nuevo sueldo es de: $25000. */

let nombre = "Gloria";
let apellido = "Sanchez";
let sueldoActual = 20000;
let porcentajeAumento = 0.25;

let calculoAumento = (sueldoActual * porcentajeAumento);

let nuevoSueldo = calculoAumento + sueldoActual;

console.log(`Hola, estimad@ ${nombre} ${apellido} 
En base a su sueldo actual: $${sueldoActual} 
Ha recibido un aumento del 25%: $${calculoAumento} 
y su nuevo sueldoActual: $${nuevoSueldo}`);
