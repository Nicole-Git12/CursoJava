
// Se crea función para el doc crearpago.html para dar interactividad visual a la página cuando se ingresan,
// o no se ingresan datos.
function Validation() {
  valor1 = document.getElementById("pago").value;
  valor2 = document.getElementById("meses").value;
  var colorPago = document.getElementById("pago");
  var colorMeses = document.getElementById("meses");
  var colorAnio = document.getElementById("anio");
  var colorRut = document.getElementById("RutClient");

  cont = 0;
  valor3 = document.getElementById("anio").value;

  valor4 = document.getElementById("RutClient").value;

  if (valor1 == null || valor1.length == 0) {

    alert("[ERROR] Falta rellenar Pago");
    colorPago.style.backgroundColor = "red";

    cont++;
  }

  else if (valor1 <= 0 || valor1 >= 99999999) {
    alert("[Error] Monto pago Incorrecto");
    colorPago.style.backgroundColor = "red";
    cont++;
  }

  if (valor2 == "seleccionar") {
    alert("[Error] Debe seleccionar un Mes de Pago")
    colorMeses.style.backgroundColor = "red";
    cont++;

  }
  if (valor3 == "Seleccionar") {
    alert("[Error] Debe Digitar un año")
    colorAnio.style.backgroundColor = "red";
    cont++;
  }
  if (valor4 == null || valor4.length == 0) {

    alert("[ERROR] Falta rellenar Campo RUT");
    colorRut.style.backgroundColor = "red";

    cont++;
  }

  else if (valor4 <= 1000000 || valor4 >= 100000000) {
    alert("[Error] Debe escribir un Rut valido y sin dato verificador")
    colorRut.style.backgroundColor = "red";
    cont++;
  }
  if (cont == 0) {
    alert("Datos Correctos");
    colorRut.style.backgroundColor = "green";
    colorAnio.style.backgroundColor = "green";
    colorMeses.style.backgroundColor = "green";
    colorPago.style.backgroundColor = "green";

  }



}

/*function diseno(){
  disen=document.getElementById("mitabla").value;
  colorCu1=
  colorCu2=
  colorCu3=


}


/*$(document).ready(function(){
    $('#modelo 1').style(backgroundColor="red")




})*/




$(document).ready(function () {


  $('.modelo1').click(function () {

    $('table').css('background', '#FADBD8');
    $('table').css('border', 'white');
    $('table').css('border-collapse: separate');
    $('table').css('border-spacing', ' 10px');
    $('table').css('color', '#4527A0');

  });

  $('.modelo2').click(function () {
    $('table').css('background', '#FCF3CF');
    $('table').css('border', '#000000 5px solid');
    $('table').css('text-transform', 'uppercase');
    $('table').css('font-family', 'Comic Sans');
    $('table').css('border-spacing', ' 20px');
    $('table').css('color', '#00796B');
  });
  $('.modelo3').click(function () {
    $('table').css('background', '#85C1E9');
    $('table').css('border', '#EF9A9A 2px solid');
    $('table').css('border-collapse: separate');
    $('table').css('border-spacing', ' 30px');
    $('table').css('text-transform', 'lowercase');
    $('table').css('color', '#BF360C');

  });
});
