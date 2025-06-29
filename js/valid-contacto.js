// alert("Entro a js")

// Función para validar el formulario
function validarFormulario(event) {
    
    // alert("Entro a la funcion");
    event.preventDefault(); // Evitar el envío del formulario

    // Validar los campos: capturo el valor de los campos
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var check = document.getElementById("check-priv").checked;

    var errores = []; 

    if (nombre.trim() === "") {
        errores.push("Por favor, ingrese su nombre.");
    }

    if (!/^\+?[0-9]{2}-?[0-9]{10}$/.test(telefono)) {
        errores.push("El teléfono debe tener el formato correcto (+xx-1234567810).");
    }

    if (!/^\S+@\S+\.\w+(\.\w{2,})?$/.test(email)) {
        errores.push("Por favor, ingrese un correo electrónico válido (x@x.xxx).");
    }

    if (mensaje.trim() === "") {
        errores.push("Por favor, ingrese su mensaje, mínimo 8 caracteres!!!.");
    }

    if (!check) {
        errores.push("Debe aceptar enviar los datos.");
    }

    if (errores.length > 0) {
        alert(errores.join("\n"));
        return; // Detener el envío del formulario si hay errores, osea que se retorna
    }

    // Se enviará el formulario si no hay errores
    // Aquí podrías enviar el formulario mediante "algo" o hacer cualquier otra cosa
    alert("Formulario fue enviado correctamente.");
}

// Event listener al formulario "escuchar" el evento submit del boton
document.getElementById("form-contacto").addEventListener("submit", validarFormulario);
