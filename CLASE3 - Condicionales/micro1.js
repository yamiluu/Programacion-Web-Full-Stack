/* 1. Desarrolla un programa que le indique al usuario 
- en base a su perfil o responsabilidades 
- qué puede hacer o no en el sistema. 
Para eso debes crear una variable llamada: “perfil” y asignarle alguno de estos valores:
a. administrador
b. asistente
c. invitado.
Es importante tener en cuenta que se debe mostrar un único mensaje, utilizando el console.log():
● Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el mensaje: 
“Debe especificar el perfil del usuario”.
● Si es un perfil “administrador - ADMINISTRADOR - Administrador”, la consola debe mostrar este mensaje: 
“Usted tiene todos los privilegios deuso del sistema”.
● Si es un perfil “asistente - ASISTENTE - Asistente”, la consola debe mostrar este mensaje: 
“Usted sólo tiene permisos de registrar, modificar y consultar datos”.
● Si es un perfil “invitado - INVITADO - Invitado”, la consola debe mostrar este mensaje: 
“Usted sólo tiene permisos de consultar datos”.
● Si se especifica un valor diferente a la variable perfil entonces se debe mostrareste mensaje: 
“Debe especificar un perfil válido”.
Para probar las diferentes respuestas asigna diferentes valores a la variable “perfil” creada. */

let perfil = "Administrador";
perfil = perfil.toLocaleLowerCase();

switch (perfil) {
    case "":
        console.log("Debe especificar el perfil del usuario.");
        break;
    
    case "administrador":
        console.log("Usted tiene todos los privilegios deuso del sistema.");
        break;

    case "asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos.");
        break;

    case "invitado":
        console.log("Usted sólo tiene permisos de consultar datos.");
        break;

    default: console.log("Debe especificar un perfil válido.");
        break;
}