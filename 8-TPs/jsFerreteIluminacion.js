/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var precioRegular=35;
    var descuento;
    var marca;
    var impuesto;
    var precioFinal;
    var precioConDescuento;

    cantidad= parseInt(document.getElementById("Cantidad").value);
    marca= document.getElementById("Marca").value;

    if(cantidad>=6){

        descuento=precioRegular*50/100;

        alert(" descuento del 50% " );
    } else if (cantidad ==5){

        if (marca=="ArgentinaLuz"){
            descuento= precioRegular *40/100;
            alert (" descuento del 40%");
        } else {
            descuento= precioRegular*30/100;
            alert("descuento del 30%");
        }
    } else if (cantidad==4){
        if (marca== "ArgentinaLuz"|| marca=="FelipeLamparas"){
            
            descuento= precioRegular*25/100;
            alert ("25% de descuento");
        } else {
            descuento=precioRegular*20/100;
            alert("20% de descuento");
        }
    } else if (cantidad==3){
        if (marca=="ArgentinaLuz"){
            descuento=precioRegular*15/100;
            alert("el descuento es del 15%");
        } else if (marca=="FelipeLamparas"){
            descuento=precioRegular*10/100;
            alert("el descuento es del 10%");
        } else {
            descuento=precioRegular*5/100;
            alert("descuento del 5%");
        }
        }
        precioConDescuento=precioRegular-descuento;

        document.getElementById("precioDescuento").value=precioConDescuento;

        precioFinal= cantidad*precioConDescuento;

        if(precioFinal> 120){

            impuesto=precioFinal*10/100;

            precioFinal= precioFinal+impuesto;
            alert("impuesto a pagar es de  "+ impuesto );
        }

        alert( " El precio final es de "+precioFinal);

    }

    

 	

