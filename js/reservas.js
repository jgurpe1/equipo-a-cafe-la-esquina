//JS de la página Reservas

// * Fin modo oscuro

const INPUT_NOMBRE = document.getElementById("input-nombre");
const SPAN_NOMBRE = document.getElementById("span-nombre");
const INPUT_FECHA = document.getElementById("Fecha");
const SPAN_FECHA = document.getElementById("span-fecha");
const SELECT_HORA = document.getElementById("hora");
const SPAN_HORA = document.getElementById("span-select");
const INPUT_PERSONAS = document.getElementById("input-personas");
const SPAN_PERSONAS = document.getElementById("span-personas");
const BOTON = document.querySelector(".reservar-jesus");

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
	RESERVA.textContent = "";
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
		todoBien = false;
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

// * Modo oscuro Oscar
const botonModo = document.getElementById("btnModo");

botonModo.addEventListener("click", () => {
	if (botonModo.textContent === "Modo Oscuro") {
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
		botonModo.textContent = "Modo Claro";
		//Cambio los colores a Oscuro y el texto del botón a "Modo Claro" para poder activarlo más tarde
	} else {
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
		botonModo.textContent = "Modo Oscuro";
		//Cambio los colores a Claro y el texto del botón a "Modo Oscuro" para poder activarlo más tarde
	}
});
