/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var productoUno, productoDos, productoTres, suma;

function Sumar () 
{
	productoUno = parseFloat(document.getElementById("PrecioUno").value);
    productoDos = parseFloat(document.getElementById("PrecioDos").value);
    productoTres = parseFloat(document.getElementById("PrecioTres").value);

    suma = productoUno + productoDos + productoTres;

    alert("La suma de los productos es " + suma);
}
function Promedio () 
{
    var promedio

	productoUno = parseFloat(document.getElementById("PrecioUno").value);
    productoDos = parseFloat(document.getElementById("PrecioDos").value);
    productoTres = parseFloat(document.getElementById("PrecioTres").value);

    suma = productoUno + productoDos + productoTres;
    promedio = suma / 3

    alert("El promedio de los productos es " + promedio);
}
function PrecioFinal () 
{
    var porcentaje, precioFinal

	productoUno = parseFloat(document.getElementById("PrecioUno").value);
    productoDos = parseFloat(document.getElementById("PrecioDos").value);
    productoTres = parseFloat(document.getElementById("PrecioTres").value);

    suma = productoUno + productoDos + productoTres;
    porcentaje = suma * 21 / 100;
    precioFinal = suma + porcentaje;

    alert("El precio final es " + precioFinal);


}