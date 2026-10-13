// Código de la web
const botonModo = document.getElementById('btnModo');

botonModo.addEventListener('click', () => {
    

    if(botonModo.textContent === "Modo Oscuro") {
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
