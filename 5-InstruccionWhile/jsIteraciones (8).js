function Mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;
	var contadorN = 0;

do {
	numero = parseInt(prompt("Ingrese un numero: "));

	while(isNaN(numero)){
		numero= parseInt(prompt("eso no es un numero. ingrese un numero: "));
	}

	if (numero>=0 ){
		positivo= positivo+numero;
	} else {
		negativo= negativo* numero;
		contadorN++;

	}

	respuesta= prompt("Desea continuar?: ");
} while (respuesta=="s" || respuesta=="S"); 

document.getElementById('suma').value=positivo;
if (contadorN==0){
	negativo=0;
}
document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN