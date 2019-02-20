/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var ancho, largo, perimetro, alambre;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    perimetro = largo * 2 + ancho * 2;
    alambre = perimetro * 3;

    alert("Se necesitan " + alambre + " metros de alambre.");


}
function Circulo () 
{
	var radio, perimetro, alambre;

    radio = parseFloat(document.getElementById("Radio").value);

    perimetro = 2 * Math.PI * radio;
    alambre = perimetro * 3;

    alert("Se necesitan " + alambre + " metros de alambre.");
}
function Materiales () 
{
    var ancho, largo, cemento, cal, superficie;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    superficie = largo * ancho;
    cal = superficie * 3;
    cemento = superficie * 2;

    alert("Para " + superficie + " m2, se necesitan " + cal + " bolsas de cal y " + cemento + " bolsas de cemento.");
}