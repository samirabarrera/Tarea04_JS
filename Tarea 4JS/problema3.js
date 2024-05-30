/*A continuación se presenta un código de JavaScript, reescribelo
utilizando operadores ternarios múltiples ‘?’

let message;

if ( login == "Trabajador") {
    message = "Hola";
} else if ( login == "Dueño" ) {
    message = "Felicidades";
} else if ( login == "") {
    message = "Sin sesión";
} else {
    message = "";
}*/

let message1 = (login = "Trabajador") ? "Hola" : "Sin sesión";

let message2 = (login = "Dueño") ? "Felicidades" : "Sin sesión";