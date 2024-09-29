/* 1. Desarrollar el programa mi primera calculadora. Queremos que, usando estructura switch, 
muestres al usuario cuál es el resultado de una operación aritmética. Esto se hará en base a dos valores suministrados 
y al tipo de operación indicada: “sumar”, “restar”, “multiplicar”, “dividir”.
Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la respuesta al usuario debe ser: 
“El resultado de sumar 2 + 2 es 4”.
2. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle un mensaje al usuario que le 
informe que “Las operaciones aceptadas son: 
-sumar 
-restar 
-multiplicar
-dividir”. */

let numero1 = 2;
let numero2 = 4;

let valor;
let operacion = "sumar";
operacion = operacion.toLowerCase();
let signo = "+";

switch (operacion) {
    
    case "sumar":
        valor = numero1 + numero2;
        break;

        case "restar":
            valor = numero1 - numero2;
            break;

            case "multiplicar":
                valor = numero1 * numero2;
                break;

                case "dividir":
                    valor = numero1 / numero2;
                    break;

    default: console.log("Las operaciones aceptadas son: sumar, restar, multiplicar, dividir.");
        break;
}

console.log(`El resultado de ${operacion} ${numero1} ${signo} ${numero2} es ${valor}.`);
