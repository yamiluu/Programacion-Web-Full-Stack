/* 1. Crear una función que recibe un string en minúscula, lo convierte a mayúsculas y lo retorna. 
Investiga qué hace el método de strings.toUpperCase()
2. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
Investiga qué hace la palabra reservada typeof.
3. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
4. Crear una función que calcule el valor de una hora de trabajo, teniendo en cuenta que dicha función recibe tres 
parámetros: El salario mensual, la cantidad de días trabajados y la cantidad de horas que regularmente trabajada por día. */

function stringMinuscula(palabra) {
    palabra = palabra.toUpperCase();
    return palabra;
}
console.log(stringMinuscula("hola"));  //Lo convierte a MAYUCÚLAS.

function tipoDato(mensaje) {
    return typeof mensaje;
}
console.log(tipoDato(2)); //Devuelve qué tipo de dato es ese parámetro.

function calcularEdad(edadPerros) {
    edadPerros = edadPerros * 7;
    return edadPerros;
} 
console.log(calcularEdad(4));

function valorHora(salarioMensual, cantidadDias, cantidadHoras) {
    let horasTrabajadas = cantidadHoras * cantidadDias;  //Total de Horas trabajadas Mensual.
    let precioHora = salarioMensual / horasTrabajadas;
    return precioHora; 
}
console.log(valorHora(10000, 2, 2));
