function Mostrar()
{
//tomo la edad  

var edad;

edad= parseInt(document.getElementById("edad").value);

if (edad>=18){
    alert ("es mayor de edad");
} else {
    alert("Es menor de edad");
}

alert("fin")
}//FIN DE LA FUNCIÓN