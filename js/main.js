const INPUT_NOMBRE = document.getElementById("input-nombre");
const SPAN_NOMBRE = document.getElementById("span-nombre");
const INPUT_FECHA = document.getElementById("Fecha");
const SPAN_FECHA = document.getElementById("span-fecha");
const SELECT_HORA = document.getElementById("hora");
const SPAN_HORA = document.getElementById("span-select");
const INPUT_PERSONAS = document.getElementById("input-personas");
const SPAN_PERSONAS = document.getElementById("span-personas");
const BOTON = document.querySelector(".reservar-jesus");
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

// Código de la web
const botonModo = document.getElementById('btnModo');

//* JESUS ⬇️
// ! HECHO POR CLAUDE
const hoy = new Date().toLocaleDateString("en-CA");

const fechaManana = new Date();

// * COMENTARIO DE JESUS: .setDate() hace que la fecha se convierta en lo que esta entre ().
// * COMENTARIO DE JESUS: .getDate() pregunta a que numero de día estamos.
// * COMENTARIO DE JESUS: como fechaManana tiene .setDate = (fechaManana.getDate() + 1)
// * lo que hace es recoge que día es HOY y le suma 1, con .setDate, establece que la fecha es HOY + 1
// * por eso la variable se llama fechaManana
// * COMENTARIO DE JESUS: con fechaPasado es lo mismo pero +2

fechaManana.setDate(fechaManana.getDate() + 1);
const manana = fechaManana.toLocaleDateString("en-CA");

const fechaPasado = new Date();
fechaPasado.setDate(fechaPasado.getDate() + 2);
const pasadoManana = fechaPasado.toLocaleDateString("en-CA");

// * Esto no lo hizo claude.
BOTON.addEventListener("click", function () {
	const RESERVA = document.getElementById("info-reserva-jesus");
	//* Hasta aqui.

	let todoBien = true; // pasa a false si algo falla
	let textoFecha = ""; // HOY, MAÑANA, PASADO MAÑANA o la fecha DD/MM/YYYY
	// ! HASTA AQUI HECHO POR CLAUDE
	//* JESUS ⬆️

	if (INPUT_NOMBRE.value === "") {
		SPAN_NOMBRE.textContent = "Escribe tu nombre.";
		SPAN_NOMBRE.style.color = "red";
		todoBien = false;
	} else {
		SPAN_NOMBRE.textContent = "";
	}

	if (INPUT_PERSONAS.value <= 0 || INPUT_PERSONAS.value >= 9) {
		SPAN_PERSONAS.textContent = `El número de personas tiene que estar entre 1 y 8`;
		SPAN_PERSONAS.style.color = "red";
	} else {
		SPAN_PERSONAS.textContent = "";
	}

	if (INPUT_FECHA.value === "") {
		SPAN_FECHA.textContent = "Elige una fecha.";
		SPAN_FECHA.style.color = "red";
		todoBien = false;
	} else {
		SPAN_FECHA.textContent = "";
		const elegida = INPUT_FECHA.value;

		if (elegida < hoy) {
			SPAN_FECHA.textContent = `No puedes elegir una fecha pasada.`;
			SPAN_FECHA.style.color = "red";
			todoBien = false;
		} else if (elegida === hoy) {
			textoFecha = "HOY";
		}
		//* JESUS ⬇️
		// ! HECHO POR CLAUDE
		else if (elegida === manana) {
			textoFecha = "MAÑANA";
		} else if (elegida === pasadoManana) {
			textoFecha = "PASADO MAÑANA";
		} else {
			// de "2026-10-20" a "20/10/2026"
			const partes = elegida.split("-");
			textoFecha = `el ${partes[2]}/${partes[1]}/${partes[0]}`;
		}
		// ! HASTA AQUI HECHO POR CLAUDE
		//* JESUS ⬆️
	}

	if (SELECT_HORA.value === "elige-una-hora") {
		SPAN_HORA.textContent = "Elige una hora";
		SPAN_HORA.style.color = "red";
		todoBien = false;
	} else {
		SPAN_HORA.textContent = "";
	}
	//* JESUS ⬇️
	// ! HECHO POR CLAUDE
	if (todoBien) {
		RESERVA.textContent = `Reserva para ${INPUT_PERSONAS.value} persona(s) ${textoFecha} a las ${SELECT_HORA.value}, a nombre de ${INPUT_NOMBRE.value}.`;
	} else {
		RESERVA.textContent = "";
	}
	// ! HASTA AQUI HECHO POR CLAUDE
	//* JESUS ⬆️
});
