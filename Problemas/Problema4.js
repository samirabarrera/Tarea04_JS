/*"Desarrolla un código que solicite al usuario su nombre de usuario
utilizando la función prompt.
Si el usuario ingresa 'Admin', se le pedirá que ingrese una contraseña.
Si el usuario deja el campo vacío o presiona 'Esc', se mostrará
'Cancelado'. Si ingresa cualquier otra cadena, se mostrará 'No te
conozco'.
La contraseña se verificará de la siguiente manera:
● Si es 'Jedi', se mostrará '¡Que la fuerza te acompañe!'.
● Para cualquier otra contraseña, se mostrará 'Contraseña
incorrecta'.
● Para una cadena vacía o una entrada cancelada, se mostrará
'Cancelado'."*/


let nombreUsuario = prompt("Ingrese su nombre de usuario")

if (nombreUsuario === "Admin") {
    console.log ("el usuario es correcto");
    alert ("Usuario correcto")
    let contraseña = prompt("Ingrese una contraseña");
    console.log ("ingresar contraseña")
    if (contraseña === "Jedi") {
        alert("¡Que la fuerza te acompañe!");
    } else {
        alert ("Contraseña incorrecta");
    }
} else {
    console.log("Ingresó otro usuario");
    alert ("No te conozco");
}


