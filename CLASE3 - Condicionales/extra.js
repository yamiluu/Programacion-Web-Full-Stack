/* 1. Desarrolla el programa aterrizar avión. Nos indicará si el avión está listo para iniciar el aterrizaje o no. 
Considerará para ello la altura y la velocidad del vuelo, teniendo en cuenta que:
a. La velocidad debe estar comprendida entre 268 a 278 km/hr.
b. La altura debe estar comprendida entre 150 m a 300 m. */

let altura = 300;
let velocidad = 270;

if ((velocidad>= 268 && velocidad<= 278) && altura>=150 && altura<=300) {
    console.log("El avion esta listo para aterrizar.");
} else {
    console.log("El avion NO esta listo para aterrizar.");
}