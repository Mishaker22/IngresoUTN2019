function Mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();

while (!(sexo=="f" ||  sexo=="m")){

sexo = prompt("letra invalida, ingrese m, para masculino o f para femenino").toLowerCase;


}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN