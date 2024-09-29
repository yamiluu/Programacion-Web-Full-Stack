/*function area(largo,ancho) {
    return largo * ancho;
}
console.log(area(10,50)); */  //No me devuelve nada si no le pongo el "console.log()" para que me lo muestre por la pantalla. 

/* 1. Crea una función que permita calcular el monto a pagar por el alquiler de un vehículo, 
que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y “silla para bebe”.
2. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:
a. De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
i. Compacto: $14000
ii. Mediano: $17000
iii. Camioneta: $28000
b. Si adicionalmente el cliente requiere la silla para niños, se le cobra un adicional por día de $12004. 
Una vez creado el programa, ejecutalo. ¿Recuerdas cómo?
3. Para probar las diferentes respuestas invoca a la función, asigna diferentes valores o argumentos. 
Usando el console.log(), muestra los resultados al usuario: “Estimado cliente: en base al tipo de vehículo compacto 
alquilado,considerando los 3 días utilizados, el monto total a pagar es de $42000”
Recuerda que si el cliente pidió la silla para niños debe también indicarlo en el mensaje final. */

function alquilerAuto(tipoAuto, diasAlquilado, sillaBebe) {
    
    let precio = 0;
    tipoAuto = tipoAuto.toLowerCase();
    
    switch (tipoAuto) {
        case "compacto":
            precio = diasAlquilado * 14000;
            break;
        case "mediano":
            precio = diasAlquilado * 17000;
            break;
        case "camioneta":
            precio = diasAlquilado * 28000;
            break;
    
        default: return "El vehiculo no es correcto, tiene que elegir entre Compacto, Mediano o Camioneta."; 
    }

    let mensaje = "";

    if (sillaBebe == true) {
        precio += diasAlquilado * 12004;
        mensaje = "y como usted pidio la silla de bebe que tiene un valor adicional por dia de $12004.";
    } else {
        precio;
        mensaje = "y como usted no pidio la silla de bebe, no se le cobra ningun valor adicional.";
    }

    return "Estimado cliente: en base al tipo de vehículo " + tipoAuto + " alquilado, considerando los " + diasAlquilado + " días utilizados, " + mensaje + " Entonces, el monto total a pagar es de $" + precio ;

}

console.log(alquilerAuto("Compacto", 2, true));