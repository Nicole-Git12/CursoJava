// Se crea función JQuery para validar el formulario ingresoclientes.
$(function () {
    $("#bEnviar").on("click", function(){
        $("#ingresocliente").validate
            ({
                // Secrean las reglas necesarias según los requerimientos del ejercicios.
                rules:
                {
                    RUN: { required: true, digits: true, minlength: 7, maxlength: 9 },
                   
                    Nombre: { required: true, minlength: 3, maxlength: 20 },
                    Apellidos: { required: true, minlength: 3, maxlength: 20 },
                    Telefono: { required: true, digits: true, minlength: 7, maxlength: 9 },
                    AFP: { required: true, minlength: 3, maxlength: 10 },
                    Sistema: { required: true, minlength: 6, maxlength: 6 },
                    direccion: { required: true, minlength: 10, maxlength: 50 },
                    comuna: { required: true, minlength: 10, maxlength: 20 },
                    edad: { required: true, min: 18, max: 110 },

                },
                // Se implementan los mensajes que se imprimirán por pantalla si no se cumple con los requerimientos.
                messages:
                { 
                   RUN: { required: 'el rut es requerido', digits: 'ingrese un digito valido', minlength: 'rut no valido', maxlength: 'rut no valido' },
                  
                   Nombre: { required: 'el Nombre es requerido', minlength: 'Nombre no valido', maxlength: 'Nombre no valido' },
                   Apellidos: { required: 'el apellido es requerido', minlength: 'apellido no valido', maxlength: 'apellido no valido' },
                   Telefono: { required: 'el Telefono es requerido',digits: 'ingrese un Telefono valido', minlength: 'Telefono no valido', maxlength: 'Telefono no valido' },
                   AFP: { required: 'la afp es requerida', minlength: 'AFP no valida', maxlength: 'AFP no valida' },
                   Sistema:{ required: 'la Previsión es requerida', minlength: 'Previsión no valida', maxlength: 'Previsión no valida' },
                   direccion: { required: 'la dirección es requerida', minlength: 'dirección no valida', maxlength: 'dirección no valida' },
                   comuna: { required: 'la comuna es requerida', minlength: 'comuna no valida', maxlength: 'comuna no valida' },
                   edad: { required: 'la edad es requerida', min: 'Debe ser mayor de 18 años', max: 'edad no valida' },
                }
            }
            );

    });
});
