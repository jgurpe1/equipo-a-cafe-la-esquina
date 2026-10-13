// Creamos una variable para seleccionar cada producto 
const PRODUCTOS = document.querySelectorAll(".producto");

// Creamos una constante que encuentra cada boton de filtro que vamos a utilizar
const BTNTODO = document.getElementById("btnTodo");
const BTNCAFE = document.getElementById("btnCafe");
const BTNDULCE = document.getElementById("btnDulce");
const BTNSALADO = document.getElementById("btnSalado");


let botones = document.querySelectorAll("button");
console.log(botones)

/* Función para ocultar/mostrar los productos según la ficha aplicada */
function mostrarProducto(ficha) {
    let contador = 0;

    PRODUCTOS.forEach(producto => {
        if (ficha === "todo" || producto.classList.contains(ficha)) {
            producto.style.display = "block";
            contador++;
        } else {
            producto.style.display = "none";
        }
    });

    // Actualizamos el aviso con el número de productos visibles
    document.getElementById("avisoProducto").textContent = `Mostrando ${contador} productos`;
}

// Función para resaltar el botón activo
//function resaltarBoton(Seleccionado) {
//if (botones [Seleccionado]){
//    botones.style.backgroundColor = "green"
//} 
//}


// Asignamos los eventos de clic a cada botón, estableciendo una función anónima para que se aplique unicamente al cliquear en el botón
BTNTODO.addEventListener("click", function () {
    mostrarProducto("todo");
    resaltarBoton("btnTodo");
});

BTNCAFE.addEventListener("click", function () {
    mostrarProducto("cafe");
    resaltarBoton("btnCafe");
});

BTNDULCE.addEventListener("click", function () {
    mostrarProducto("dulce");
    resaltarBoton("btnDulce");
});

BTNSALADO.addEventListener("click", function () {
    mostrarProducto("salado");
    resaltarBoton("btnSalado");
});

// Inicializamos la página mostrando todo y marcando el botón de "Todos"
mostrarProducto("todo");
