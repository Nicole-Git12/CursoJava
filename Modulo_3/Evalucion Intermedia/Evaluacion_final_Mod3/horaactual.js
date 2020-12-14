// Se crea pequeña porción de código para imprimir fecha actual en doc. crearpago.html.
{
    n =  new Date();
    //Año
    y = n.getFullYear();
    //Mes
    m = n.getMonth() + 1;
    //Día
    d = n.getDate();
    document.getElementById("date1").innerHTML = d + "/" + m + "/" + y;
    
    }
    