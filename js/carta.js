/*CSS de la página Carta*/
/*TARJETAS DE LOS PRODUCTOS*/

.tarjetas {
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    background: white;
    border: 2px solid var(--Amarillo-calido);
    border-radius: 15px;
    color: black;
    box-sizing: border-box;
}

.tabla-tarjetas {
    width: 60%;
    margin: 40px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}

/*Introduzco un body margin 0 para que los elementos de la pagina no tenga un incomodo espaciado en los limites de la página*/
body {
    margin: 0%;
}

/*La categoria b-carta_superior se aplica a un article que abarca la parte superior de la página de la carta: el buscador, los botones de filtro y el aviso de la cantidad 
de productos seleccionados*/

.b-Carta_superior {
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-right: 20%;
}

.b-Carta_superior h2 {
    font-size: 2.5rem;
}

.b-Carta_superior p {
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
}
.b-Carta_superior input {
    margin: 10px;
}

.b-Carta_superior>div {
    width: 70%;
    padding-left: 30%;
}


/*Trabaja el botón "todos". el botón de todos comienza ligeramente diferente al resto ya que indica que se han marcado
todos los productos*/
.b-Carta_superior div button:first-of-type {
    border: 2px solid green;
    background-color: #008000d7;
    color: white;
    border-radius: 15px;
    padding: 2%;
    font-family: Lato;
    font-size: 1.6rem;
    font-weight: 800;
    line-height: 2.4rem;
    letter-spacing: .03em;
    color: #fff;
}

/*Este estilo condiciona los botones*/
.b-Carta_superior div button:nth-child(n+2) {
    border: 1px solid green;
    border-radius: 15px;
    padding: 2%;
    font-family: Lato;
    font-size: 1.6rem;
    font-weight: 800;
    line-height: 2.4rem;
    letter-spacing: .03em;
}

.botones-Añadir {
    background-color: white;
    border: 1px solid green;
    border-radius: 15px;
    padding: 10px 15px;
    font-size: 15px;
}




/*la clase b-carta_medio abarca los estilos que trabajan con las fichas de producto de la página de carta*/
.b-Carta_medio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2%;
    background-color: rgba(12, 97, 12, 0.514);
    padding: 2%;
    margin-bottom: 0;
}

/*Este estilo, junto con el de tarjetas, definido más arriba condiciona las dimensiones de las fichas de producto*/
.b-Carta_medio div {
    padding: 0;
    flex-basis: 24%;
    margin-bottom: 2%;
    height: 80%;
    gap: 40%;
}

/*Cambiamos el estilo del título de las fichas de producto*/
.b-Carta_medio div h4:nth-child(n+0) {
margin: 0;
    color: black;
    text-align: center;
    font-size: 1.7rem;
}

/*Cambiamos el estilo del precio dentro de las fichas de producto*/
.b-Carta_medio div p {
    color: #008000d7;
    font-weight: 800;
    margin: 0%;
    padding: 1%;
    text-align: center;
    font-size: 1.2rem;
    padding-left: 5%;
}

/*Cambiamos el estilo de los botones de las fichas de producto*/

.b-Carta_medio>div>button {
    margin: 0;
    width: 100%;
    color: black;
    background-color: rgba(240, 248, 255, 0.774);
}

.b-Carta_medio>div:hover {
    transform: scale(1.02);
    transition: 1s;
}

footer {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: rgba(57, 94, 6, 0.918);
    color: white;
}
/* Estilos de la web */
:root {
    --Amarillo-calido: #f0e5bb;
    --color-cabecera: #E3F6F5;
    --verde-bosque-dark: #145214dc;
    --verde-bosque: #5bd35f9f;
}

body {
    background-color: #ebe8bc;
}

h1 {
    font-size: 2.5rem;
    color: var(--color-cabecera);
}

h2 {
    text-align: center;
    font-style: oblique;
}

input {
    font-size: 1.2rem;
    /* Aumenta el tamaño del texto */
    padding: 10px 30px;
    /* Aumenta el espacio interior (arriba/abajo y lados) */
    margin-left: 800px;
}


// Inicializamos la página mostrando todo 
mostrarProducto("todo");
