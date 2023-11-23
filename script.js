// script.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('miFormulario'); // Reemplaza 'miFormulario' con el ID real de tu formulario

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(message => {
        console.log(message);
        // Aquí puedes realizar cualquier acción adicional después de la carga exitosa
      })
      .catch(error => {
        console.error('Error:', error);
        // Maneja errores si es necesario
      });
  });
});
