function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var num= Math.floor(Math.random()*10+1);
	
	if(num<=4){
		alert ("La nota es " +num + " Vamos, La proxima se puede");
	}
	else if(num<=8){
		alert("la nota es "+num+ "Aprobo");

	}else if (num<=10){
		alert ("excelente");
	}


}//FIN DE LA FUNCIÓN