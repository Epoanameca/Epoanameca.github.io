function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido_paterno = document.getElementById('apellido_paterno').value;
    var apellido_materno = document.getElementById('apellido_materno').value;
    var grupo = document.getElementById('grupo').value; // Se agrega la variable 'grupo'
    var curp = document.getElementById('curp').value;
    var cedula = document.getElementById('cedula').value;
    var credencial = document.getElementById('credencial').value;
    // Verificar si los campos obligatorios están llenos
    if (nombre == "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }
    if (apellido_paterno == "") {
        alert("Por favor, ingrese su apellido paterno.");
        return false;
    }
    if (apellido_materno == "") {
        alert("Por favor, ingrese su apellido materno.");
        return false;
    }
    if (grupo == "") {
        alert("Por favor, ingrese su grupo.");
        return false;
    }

    // Verificar si los documentos están subidos
    if (curp == "") {
        alert("Por favor, suba el archivo PDF de su CURP.");
        return false;
    }
    if (cedula == "") {
        alert("Por favor, suba el archivo PDF de su cédula de beca.");
        return false;
    }
    if (credencial == "") {
        alert("Por favor, suba el archivo PDF de su credencial institucional.");
        return false;
    }

    return true; // Si todas las validaciones pasan, se permite el envío del formulario
}
