//JS de la página Carta
// Creamos una variable para seleccionar cada producto 
const PRODUCTOS = document.querySelectorAll(".producto");

// Creamos una constante que encuentra cada boton de filtro que vamos a utilizar
const BTNTODO = document.getElementById("btnTodo");
const BTNCAFE = document.getElementById("btnCafe");
const BTNDULCE = document.getElementById("btnDulce");
const BTNSALADO = document.getElementById("btnSalado");

let botones = document.querySelectorAll(".filtro");
console.log(botones)

// Función para ocultar/mostrar los productos según la ficha aplicada. La lógica es la siguiente: usamos "foreach" para que mire todas las class producto, 
//en cada uno comprueba la categoria del boton o "ficha", si es el boton "todo" todas cambian a display block, si la class es igual a la "ficha" cambia esa
function mostrarProducto(ficha) {
    let contador = 0;

    PRODUCTOS.forEach(producto => {
        if (ficha === "todo" || producto.classList.contains(ficha)) {
            producto.style.display = "block";
            contador++;
        } else {
            producto.style.display = "none";
        }}
    
    );

    // Actualizamos el aviso con el número de productos visibles
    document.getElementById("avisoProducto").textContent = `Mostrando ${contador} productos`;
}



// Asignamos los eventos de clic a cada botón, estableciendo una función anónima para que se aplique unicamente al cliquear en el botón
BTNTODO.addEventListener("click", function () {
    botones.forEach(filtro => filtro.style.backgroundColor = "white")
    botones.forEach(filtro => filtro.style.border = "1px #008000d7 solid")
    botones.forEach(filtro => filtro.style.color = "black")
    BTNTODO.style.color = "white"
    mostrarProducto("todo");
    BTNTODO.style.color = "white"
    BTNTODO.style.backgroundColor = "#008000d7";
    BTNTODO.style.border = "2px #008000d7 solid";
});

BTNCAFE.addEventListener("click", function () {
    botones.forEach(filtro => filtro.style.backgroundColor = "white")
    botones.forEach(filtro => filtro.style.border = "1px #008000d7 solid")
    botones.forEach(filtro => filtro.style.color = "black")
    mostrarProducto("cafe");
    BTNCAFE.style.color = "white"
    BTNCAFE.style.backgroundColor = "#008000d7";
    BTNCAFE.style.border = "2px #008000d7 solid";
});

BTNDULCE.addEventListener("click", function () {
    botones.forEach(filtro => filtro.style.backgroundColor = "white")
    botones.forEach(filtro => filtro.style.border = "1px #008000d7 solid")
    botones.forEach(filtro => filtro.style.color = "black")
    BTNTODO.style.color = "black"
    mostrarProducto("dulce");
    BTNDULCE.style.color = "white"
    BTNDULCE.style.backgroundColor = "#008000d7";
    BTNDULCE.style.border = "2px #008000d7 solid";
});

BTNSALADO.addEventListener("click", function () {
    botones.forEach(filtro => filtro.style.backgroundColor = "white")
    botones.forEach(filtro => filtro.style.border = "1px #008000d7 solid")
    botones.forEach(filtro => filtro.style.color = "black")
    BTNTODO.style.color = "black"
    mostrarProducto("salado");
    BTNSALADO.style.color = "white"
    BTNSALADO.style.backgroundColor = "#008000d7";
    BTNSALADO.style.border = "2px #008000d7 solid";
});



// Inicializamos la página mostrando todo 
mostrarProducto("todo");
