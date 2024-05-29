/*Crea un algoritmo que solicite el precio de tres platos del menú de
un restaurante y el impuesto que debe ser cobrado. Despliega con
alert() el monto total de la factura. Debes realizar una llamada a una
función.*/

function sumarPrecios(plato1, plato2, plato3) {
return plato1 + plato2 + plato3;
}

let Plato1 = 100;
let Plato2 = 200;
let Plato3 = 300;
let impuesto = 12

let sumarPlatos = sumarPrecios(Plato1, Plato2, Plato3);
let impuestoCobrado = sumarPlatos * (impuesto / 100);

alert(`La suma de ${Plato1}, ${Plato2} y ${Plato3} es ${sumarPlatos} y el impuesto cobrado es ${impuestoCobrado}`);

