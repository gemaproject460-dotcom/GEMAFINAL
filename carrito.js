/*
==========================================
        CARRITO GEMA
        PARTE 1
==========================================
*/

// ==========================
// VARIABLES
// ==========================

let carrito = [];

const carritoIcono =
document.getElementById("carritoIcono");

const contadorCarrito =
document.getElementById("contadorCarrito");

const modalCarrito =
document.getElementById("modalCarrito");

const productosCarrito =
document.getElementById("productosCarrito");

const subtotalCarrito =
document.getElementById("subtotalCarrito");

const cerrarCarrito =
document.getElementById("cerrarCarrito");

const btnRealizarPedido =
document.getElementById("btnRealizarPedido");


// ==========================
// AGREGAR AL CARRITO
// ==========================

function agregarAlCarrito(id){

    const producto =
    obtenerProductoPorId(id);

    if(!producto){

        return;

    }

    // Buscar si ya existe
    const existente =
    carrito.find(item => item.id === id);

    if(existente){

        existente.cantidad++;

    }else{

        carrito.push({

            id: producto.id,

            nombre: producto.nombre,

            precio: producto.precio,

            imagen: producto.imagen,

            cantidad: 1

        });

    }

    actualizarContador();

    actualizarCarrito();

    mostrarNotificacionCarrito();

}

function mostrarNotificacionCarrito(){

    let notificacion =
        document.getElementById(
            "notificacionCarrito"
        );

    if(!notificacion){

        notificacion =
            document.createElement("div");

        notificacion.id =
            "notificacionCarrito";

        notificacion.className =
            "notificacion-carrito";

        notificacion.innerHTML = `

            <i class="fa-solid fa-check"></i>

            <span>
                Producto agregado correctamente
            </span>

        `;

        document.body.appendChild(
            notificacion
        );

    }


    // Reiniciar la animación

    notificacion.classList.remove(
        "mostrar"
    );


    void notificacion.offsetWidth;


    notificacion.classList.add(
        "mostrar"
    );


    // Ocultarla después de 3 segundos

    clearTimeout(
        notificacion.timeout
    );


    notificacion.timeout =
        setTimeout(() => {

            notificacion.classList.remove(
                "mostrar"
            );

        }, 3000);

}


// ==========================
// ACTUALIZAR CONTADOR
// ==========================

function actualizarContador(){

    let total = 0;

    carrito.forEach(item => {

        total += item.cantidad;

    });

    contadorCarrito.textContent = total;

}


// ==========================
// CALCULAR SUBTOTAL
// ==========================

function calcularSubtotal(){

    let subtotal = 0;

    carrito.forEach(item => {

        subtotal += item.precio * item.cantidad;

    });

    return subtotal;

}

/*
==========================================
        CARRITO GEMA
        PARTE 2
==========================================
*/


// ==========================
// MOSTRAR CARRITO
// ==========================

function actualizarCarrito(){

    productosCarrito.innerHTML = "";

    if(carrito.length === 0){

        productosCarrito.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío.
            </p>
        `;

        subtotalCarrito.textContent = "$0.00";

        return;

    }

    carrito.forEach(item =>{

        const producto = document.createElement("div");

        producto.className = "item-carrito";

        producto.innerHTML = `

            <img
                src="${item.imagen}"
                alt="${item.nombre}">

            <div class="info-item">

                <h4>${item.nombre}</h4>

                <p>
                    $${item.precio.toFixed(2)}
                </p>

                <p>
                    Cantidad: ${item.cantidad}
                </p>

            </div>

            <button
                class="btnEliminar"
                onclick="eliminarDelCarrito(${item.id})">

                <i class="fa-solid fa-trash"></i>

            </button>

        `;

        productosCarrito.appendChild(producto);

    });

    subtotalCarrito.textContent =
        "$" + calcularSubtotal().toFixed(2);

}


// ==========================
// ELIMINAR PRODUCTO
// ==========================

function eliminarDelCarrito(id){

    const indice =
    carrito.findIndex(item => item.id === id);

    if(indice === -1){

        return;

    }

    if(carrito[indice].cantidad > 1){

        carrito[indice].cantidad--;

    }else{

        carrito.splice(indice,1);

    }

    actualizarContador();

    actualizarCarrito();

}

/*
==========================================
        CARRITO GEMA
        PARTE 3
==========================================
*/


// ==========================
// ABRIR EL CARRITO
// ==========================

carritoIcono.addEventListener("click", () => {

    actualizarCarrito();

    modalCarrito.classList.add("activo");

});


// ==========================
// CERRAR CON BOTÓN X
// ==========================

cerrarCarrito.addEventListener("click", () => {

    modalCarrito.classList.remove("activo");

});


// ==========================
// CERRAR HACIENDO CLIC
// FUERA DEL MODAL
// ==========================

modalCarrito.addEventListener("click", (e) => {

    if(e.target === modalCarrito){

        modalCarrito.classList.remove("activo");

    }

});


// ==========================
// CERRAR CON ESCAPE
// ==========================

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        modalCarrito.classList.remove("activo");

    }

});


// ==========================
// IR AL FORMULARIO
// ==========================

btnRealizarPedido.addEventListener("click", () => {

    if(carrito.length === 0){

        alert("Debe agregar al menos un producto.");

        return;

    }

    modalCarrito.classList.remove("activo");

    const modalPedido =
    document.getElementById("modalPedido");

    modalPedido.classList.add("activo");

});


// ==========================
// VACIAR CARRITO
// ==========================

function vaciarCarrito(){

    carrito = [];

    actualizarContador();

    actualizarCarrito();

}


// ==========================
// DEVOLVER CARRITO
// (Lo utilizará pedido.js)
// ==========================

function obtenerCarrito(){

    return carrito;

}


// ==========================
// DEVOLVER SUBTOTAL
// ==========================

function obtenerSubtotal(){

    return calcularSubtotal();

}

