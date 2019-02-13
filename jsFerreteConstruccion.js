/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoAlambre;
    var anchoAlambre;
    var perimetro;
    var totalCompra;

    largoAlambre= (parseFloat(document.getElementById("Largo").value));
    anchoAlambre= (parseFloat(document.getElementById("Ancho").value));

    perimetro= largoAlambre+anchoAlambre+largoAlambre+anchoAlambre;
    totalCompra= perimetro*3;

    alert(" Hay que comprar en hilo "+totalCompra);



}
function Circulo () 
{
     var radio;
     var perimetro;
     var totalHilo;
radio= (parseFloat(document.getElementById("Radio").value));
perimetro= 2* 3.14 *radio;
totalHilo= perimetro*3;

alert("el total del hilo para rodear la circunferencia es de: "+totalHilo.toFixed(2));
	
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;

    
    largo=parseFloat(document.getElementById("Largo").value);
    ancho=parseFloat(document.getElementById("Ancho").value);

    area= largo*ancho;
    cemento= area*2;
    cal=area*3;

    alert ("para una superficie de "+area+" se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");


	
}