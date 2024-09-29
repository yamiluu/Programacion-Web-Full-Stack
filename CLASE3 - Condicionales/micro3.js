/* 1. Desarrollar el programa traductor condicional. La idea es que si el usuario ingresa una palabra como “perro”, 
“gato”, “puerta”, “ventana”, o “mesa”, se le devuelva la misma palabra traducida al idioma inglés. 
Te recomendamos usar la estructura switch. Puedes ayudarte con Google Traductor.En caso de que la palabra sea distinta a 
la esperada, deberás mostrar al usuario un mensaje que le informe que “La palabra ingresada es incorrecta”. */

let palabra = "Perro";
palabra = palabra.toLowerCase();

switch (palabra) {
    case "perro":
        console.log("La traduccion de Perro es: dog.");
        break;
    
    case "gato":
        console.log("La traduccion de Gato es: cat.");
        break;
    
    case "puerta":
        console.log("La traduccion de Puerta es: door.");
        break;
    
    case "ventana":
        console.log("La traduccion de Ventana es: window.");
        break;
    
    case "mesa":
        console.log("La traduccion de Mesa es: table.");
        break;
        
    default: console.log("La palabra ingresada es incorrecta.");
        break;
}
