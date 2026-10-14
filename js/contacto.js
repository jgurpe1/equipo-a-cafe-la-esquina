//JS de la página Contacto

//Funcionamiento validarFormulario Trabajo ELI
//Creamos la función validarFormulario 

function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let mensaje = document.getElementById("mensaje").value;

  let valido = true;

  document.getElementById("error-nombre").textContent = "";
  document.getElementById("error-correo").textContent = "";
  document.getElementById("error-mensaje").textContent = "";
  document.getElementById("mensaje-exito").textContent = "";

  if (nombre === "") {
    document.getElementById("error-nombre").textContent = "El nombre es obligatorio";
    valido = false;
  }

  if (correo === "" || !correo.includes("@") || !correo.includes(".")) {
    document.getElementById("error-correo").textContent = "Introduce un correo válido";
    valido = false;
  }

  if (mensaje === "") {
    document.getElementById("error-mensaje").textContent = "El mensaje es obligatorio";
    valido = false;
  }

  if (valido) {
    document.getElementById("mensaje-exito").textContent = "Mensaje enviado correctamente";
    document.getElementById("formulario-contacto").reset();
  }
}

//Falta meter el control del contador de los caractéres del formulario del contacto//