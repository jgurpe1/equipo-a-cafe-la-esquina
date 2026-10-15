//JS de Luis
// Creamos una variable para seleccionar cada producto
const PRODUCTOS = document.querySelectorAll(".producto");

// Creamos una constante que encuentra cada boton de filtro que vamos a utilizar
const BTNTODO = document.getElementById("btnTodo");
const BTNCAFE = document.getElementById("btnCafe");
const BTNDULCE = document.getElementById("btnDulce");
const BTNSALADO = document.getElementById("btnSalado");

let botones = document.querySelectorAll(".filtro");
console.log(botones);

// Función para ocultar/mostrar los productos según la ficha aplicada. La lógica es la siguiente: usamos "foreach" para que mire todas las class producto,
//en cada uno comprueba la categoria del boton o "ficha", si es el boton "todo" todas cambian a display block, si la class es igual a la "ficha" cambia esa
function mostrarProducto(ficha) {
	let contador = 0;

	PRODUCTOS.forEach((producto) => {
		if (ficha === "todo" || producto.classList.contains(ficha)) {
			producto.style.display = "block";
			contador++;
		} else {
			producto.style.display = "none";
		}
	});

	// Actualizamos el aviso con el número de productos visibles
	document.getElementById("avisoProducto").textContent =
		`Mostrando ${contador} productos`;
}

// Asignamos los eventos de clic a cada botón, estableciendo una función anónima para que se aplique unicamente al cliquear en el botón
BTNTODO.addEventListener("click", function () {
	botones.forEach((filtro) => (filtro.style.backgroundColor = "white"));
	botones.forEach((filtro) => (filtro.style.border = "1px #008000d7 solid"));
	botones.forEach((filtro) => (filtro.style.color = "black"));
	BTNTODO.style.color = "white";
	mostrarProducto("todo");
	BTNTODO.style.color = "white";
	BTNTODO.style.backgroundColor = "#008000d7";
	BTNTODO.style.border = "2px #008000d7 solid";
});

BTNCAFE.addEventListener("click", function () {
	botones.forEach((filtro) => (filtro.style.backgroundColor = "white"));
	botones.forEach((filtro) => (filtro.style.border = "1px #008000d7 solid"));
	botones.forEach((filtro) => (filtro.style.color = "black"));
	mostrarProducto("cafe");
	BTNCAFE.style.color = "white";
	BTNCAFE.style.backgroundColor = "#008000d7";
	BTNCAFE.style.border = "2px #008000d7 solid";
});

BTNDULCE.addEventListener("click", function () {
	botones.forEach((filtro) => (filtro.style.backgroundColor = "white"));
	botones.forEach((filtro) => (filtro.style.border = "1px #008000d7 solid"));
	botones.forEach((filtro) => (filtro.style.color = "black"));
	BTNTODO.style.color = "black";
	mostrarProducto("dulce");
	BTNDULCE.style.color = "white";
	BTNDULCE.style.backgroundColor = "#008000d7";
	BTNDULCE.style.border = "2px #008000d7 solid";
});

BTNSALADO.addEventListener("click", function () {
	botones.forEach((filtro) => (filtro.style.backgroundColor = "white"));
	botones.forEach((filtro) => (filtro.style.border = "1px #008000d7 solid"));
	botones.forEach((filtro) => (filtro.style.color = "black"));
	BTNTODO.style.color = "black";
	mostrarProducto("salado");
	BTNSALADO.style.color = "white";
	BTNSALADO.style.backgroundColor = "#008000d7";
	BTNSALADO.style.border = "2px #008000d7 solid";
});

// Inicializamos la página mostrando todo
mostrarProducto("todo");

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
		document.getElementById("error-nombre").textContent =
			"El nombre es obligatorio";
		valido = false;
	}

	if (correo === "" || !correo.includes("@") || !correo.includes(".")) {
		document.getElementById("error-correo").textContent =
			"Introduce un correo válido";
		valido = false;
	}

	if (mensaje === "") {
		document.getElementById("error-mensaje").textContent =
			"El mensaje es obligatorio";
		valido = false;
	}

	if (valido) {
		document.getElementById("mensaje-exito").textContent =
			"Mensaje enviado correctamente";
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
		1: { apertura: 9 * 60, cierre: 18 * 60 }, // Lunes
		2: { apertura: 9 * 60, cierre: 18 * 60 }, // Martes
		3: { apertura: 9 * 60, cierre: 18 * 60 }, // Miércoles
		4: { apertura: 9 * 60, cierre: 18 * 60 }, // Jueves
		5: { apertura: 9 * 60, cierre: 18 * 60 }, // Viernes
		6: { apertura: 10 * 60, cierre: 14 * 60 }, // Sábado
	};

	let horario = horarios[dia];

	let estaAbierta = false;

	if (horario) {
		if (horaActual >= horario.apertura && horaActual < horario.cierre) {
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
