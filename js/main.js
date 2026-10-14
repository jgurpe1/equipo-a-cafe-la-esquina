// Código de la web 
//Apartado de contactoFormulario

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




//Aviso de Abierto Ahora o Cerrado Ahora

function comprobarEstadoCafeteria() {
  let ahora = new Date();

  // Día de la semana: 0 = domingo, 1 = lunes, ..., 6 = sábado
  let dia = ahora.getDay();

  let hora = ahora.getHours();
  let minutos = ahora.getMinutes();
  let horaActual = hora * 60 + minutos;

  // Horarios de apertura y cierre
  let horarios = {
    1: { apertura: 9 * 60, cierre: 18 * 60 },  // Lunes
    2: { apertura: 9 * 60, cierre: 18 * 60 },  // Martes
    3: { apertura: 9 * 60, cierre: 18 * 60 },  // Miércoles
    4: { apertura: 9 * 60, cierre: 18 * 60 },  // Jueves
    5: { apertura: 9 * 60, cierre: 18 * 60 },  // Viernes
    6: { apertura: 10 * 60, cierre: 14 * 60 } // Sábado
  };

  let horario = horarios[dia];

  let estaAbierta = false;

  if (horario) {
    if (horaActual >= horario.apertura &&
        horaActual < horario.cierre) {
      estaAbierta = true;
    }
  }

  return estaAbierta;
}

function mostrarAvisoCafeteria() {
  let aviso = document.getElementById("aviso-cafeteria");
  let estaAbierta = comprobarEstadoCafeteria();

  if (estaAbierta) {
    aviso.textContent = "Abierto ahora";
    aviso.className = "aviso abierto";
  } else {
    aviso.textContent = "Cerrado ahora";
    aviso.className = "aviso cerrado";
  }
}

// Mostrar el aviso al cargar la página
mostrarAvisoCafeteria();

// Actualizar el estado cada minuto
setInterval(mostrarAvisoCafeteria, 60000);


