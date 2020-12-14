// Se crea función JQuery para validar el formulario listadoaccidente. 
$(function () {
    $("#bEnviar").on("click", function(){
        $("#listacci").validate
            ({
                // Secrean las reglas necesarias según los requerimientos del ejercicios.
                rules:
                {
                    IDAC: { required: true, digits: true, minlength: 1, maxlength: 4 },
                    FECHACC:{ required: true },
                    HORA: { required: true },
                    lugar: { required: true, minlength: 3, maxlength: 50 },
                    origen: { required: true, minlength: 3, maxlength: 100 },
                    CLIENTE: { required: true, minlength: 3, maxlength: 20 },
                    

                },
                // Se implementan los mensajes que se imprimirán por pantalla si no se cumple con los requerimientos.
                messages:
                { 
                   IDAC: { required: 'el ID  es requerido', digits: 'ingrese un digito valido', minlength: 'ID no valido', maxlength: 'ID no valido' },
                   FECHACC:{ required:'Debe ingresa fecha' },
                   HORA: { required: 'Debe ingresar Hora' },
                   lugar: { required: 'informacion requerida', minlength: 'debe ser mas especifico'},
                   origen: { required: 'donde se origino?', minlength: 'escriba el lugar de origen', maxlength: 'no debe tener mas de 100 caracteres' },
                   CLIENTE: { required: 'el Cliente es requerido', minlength: 'cliente no valido', maxlength: 'cliente no valido' },
                   
                }
            }
            );

    });
});