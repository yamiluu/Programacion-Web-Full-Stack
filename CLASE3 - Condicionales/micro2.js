/* 1. Desarrolla el programa Ajuste tarifario de energía eléctrica. 
Utilizando el operador condicional ternario, queremos determinar cuánto va a pagar un hogar según su consumo. 
Veamos los pasos a seguir...
a. Crear una variable “pagoMes” y asignarle un pago actual de energía eléctrica por mes.
b. Crear otra variable “consumoKWH” y asignarle un consumo mensual de Kilovatios hora de consumo mensual por el hogar.
c. Si en el hogar se consumen más de 300 kwh por mes, entonces al pago actual se le incrementará un 20%.
d. En el caso contrario se le mantendrá el subsidio, es decir que no tendrá ningún aumento.
e. Una vez obtenido el monto del pago por consumo mostrar al usuario este mensaje: 
“Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh 
por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de 14400”. */

let pagoMes = 12000;  //Pago Actual.
let consumoKWH = 450; //Consumo Mensual. 

let consumoActual = consumoKWH > 300 ? pagoMes += pagoMes * 0.2 : pagoMes;

console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH}KWH, en base al ajuste tarifario 
(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que 
se ha ajustado el total a pagar, que será de ${pagoMes}`);
