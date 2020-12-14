{
n =  new Date();
//Año
y = n.getFullYear();
//Mes
m = n.getMonth() + 1;
//Día
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

}


    

function Validation(){
    valor1=document.getElementById("pago").value;
    valor2=document.getElementById("meses").value;
     var colorPago=document.getElementById("pago");
     var colorMeses=document.getElementById("meses");
     var colorAnio=document.getElementById("anio");
     var colorRut=document.getElementById("RutClient");

    cont=0;
    valor3=document.getElementById("anio").value;

    valor4=document.getElementById("RutClient").value;

   if(valor1 == null || valor1.length == 0 ){
     
     alert("[ERROR] Falta rellenar Pago");
     colorPago.style.backgroundColor="red";
     
     cont++;
    }

    else if (valor1 <=0 || valor1 >= 99999999){
      alert("[Error] Monto pago Incorrecto");
      colorPago.style.backgroundColor="red";
     cont++;
    }
    
    if( valor2== "seleccionar" ){
     alert("[Error] Debe seleccionar un Mes de Pago")
     colorMeses.style.backgroundColor="red";
     cont++;

    }
    if( valor3=="Seleccionar"){
      alert("[Error] Debe Digitar un año")
      colorAnio.style.backgroundColor="red";
      cont++;
    }
    if(valor4 == null || valor4.length == 0 ){
     
        alert("[ERROR] Falta rellenar Campo RUT");
        colorRut.style.backgroundColor="red";
        
        cont++;
   }

    else if(valor4 <=1000000 || valor4>=100000000){
        alert("[Error] Debe escribir un Rut valido y sin dato verificador")
        colorRut.style.backgroundColor="red";
        cont++;
    }
    if(cont==0){
    alert("Datos Correctos");
    colorRut.style.backgroundColor="green";
    colorAnio.style.backgroundColor="green";
    colorMeses.style.backgroundColor="green";
    colorPago.style.backgroundColor="green";
    
    }
   


}



