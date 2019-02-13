/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var producto1;
    var producto2;
    var producto3;
    var suma;

    producto1 = (parseFloat (document.getElementById("PrecioUno"). value) );
    producto2 = (parseFloat (document.getElementById("PrecioDos"). value) );
    producto3 = (parseFloat (document.getElementById("PrecioTres"). value) );

suma = producto1+producto2+producto3;
alert("La suma de los 3 productos es de: "+suma );
}
function Promedio () 
{
    var producto1;
    var producto2;
    var producto3;
    var suma;
    var promedio;

    producto1 = (parseFloat (document.getElementById("PrecioUno"). value) );
    producto2 = (parseFloat (document.getElementById("PrecioDos"). value) );
    producto3 = (parseFloat (document.getElementById("PrecioTres"). value) );

suma = producto1+producto2+producto3;
promedio= suma/3;
alert("el promedio de los 3 productos es de: "+promedio);
	
}
function PrecioFinal () 
{
    var producto1;
    var producto2;
    var producto3;
    var suma;
    var iva;
    var preciofinal;

    producto1 = (parseFloat (document.getElementById("PrecioUno"). value) );
    producto2 = (parseFloat (document.getElementById("PrecioDos"). value) );
    producto3 = (parseFloat (document.getElementById("PrecioTres"). value) );

suma = producto1+producto2+producto3;
iva= suma*21/100;
preciofinal= suma+iva;
alert("el iva del 21% de los 3 productos es de: "+iva);
alert("el precio final de los 3 productos es de; "+preciofinal);
	
}