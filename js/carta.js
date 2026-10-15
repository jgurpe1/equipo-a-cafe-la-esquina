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
