/*Para resolver este problema deberás utilizar if-else para crear un
código que obtenga a través de un prompt un número y muestre un
alert:
● 0, si el número ingresado es igual a cero.
● 1, si el número ingresado es mayor que cero.
● -1, si el valor es menor a cero.
Asumimos que siempre el usuario introduce un número.*/

const Array = [0, 1, -1]

let numero = prompt("Ingrese un número:")
numero = parseInt(numero);
if (numero <=0) {
    console.log("Número igual o mayor a cero");
    alert("El número ingresado es menor o igual a cero")
} else {
    console.log ("El número es mayor a cero")
    alert("El número que ingresaste es mayor a cero")
}
