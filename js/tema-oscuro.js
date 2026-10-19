let botonTema = document.querySelector(".tema-oscuro");

if (botonTema) {
	botonTema.addEventListener("click", function () {
		document.body.classList.toggle("oscuro");

		if (document.body.classList.contains("oscuro")) {
			botonTema.textContent = "Tema Claro";
		} else {
			botonTema.textContent = "Tema Oscuro";
		}
	});
}
