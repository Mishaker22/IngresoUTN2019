function Mostrar()
{
//tomo la edad  

var edad;
edad=parseInt(document.getElementById("edad").value);

if (edad<13){
    alert("Es un niño");
} 
else if (edad <18){
    alert("Es adolecente");  
}
else if (edad<70){
    alert("es un Adulto");

} else {
    alert("Es anciano");
}





}//FIN DE LA FUNCIÓN
