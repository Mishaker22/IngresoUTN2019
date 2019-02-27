function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var seguir=true
	var numero;
	var promedio;
	

 while (seguir==true){
	 
	 numero= parseInt(prompt("Agregue un Numero: "));
	 seguir= confirm ("quiere agregar mas numeros?");
	 acumulador=acumulador+numero;
	 contador++;
 }
 promedio=acumulador/contador;

	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio.toFixed(2);




}//FIN DE LA FUNCIÓN