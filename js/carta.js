let listaPedido = document.getElementById("lista-pedido");
let totalPedido = document.getElementById("total-pedido");
let botonVaciar = document.getElementById("vaciar-pedido");
let botonesAnadir = document.querySelectorAll(".botones-Añadir");
let total = 0.0;

botonesAnadir.forEach(function (boton) {
	boton.addEventListener("click", function () {
		let productoElegido = boton.parentElement.querySelector("h4").textContent;
		let precioProductoElegido = parseFloat(
			boton.parentElement.querySelector("span").textContent,
		);

		let clase = productoElegido.replace(/ /g, "-");

		let productoEnLista = listaPedido.querySelector(`.${clase}`);

		if (productoEnLista === null) {
			listaPedido.innerHTML += `<li class="${clase}"><span class="nombre">${productoElegido}
			</span> x <span class="cantidad">1</span> — <span class="subtotal">${precioProductoElegido.toFixed(2)}</span> €</li>`;
		} else {
			let cantidadActual =
				parseInt(productoEnLista.querySelector(".cantidad").textContent) + 1;
			let nuevoSubtotal = precioProductoElegido * cantidadActual;

			productoEnLista.querySelector(".cantidad").textContent = cantidadActual;
			productoEnLista.querySelector(".subtotal").textContent =
				nuevoSubtotal.toFixed(2);
		}

		total = total + precioProductoElegido;
		totalPedido.textContent = total.toFixed(2);
	});
});

botonVaciar.addEventListener("click", function () {
	listaPedido.innerHTML = "";
	total = 0.0;
	totalPedido.textContent = "0.00";
});
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
