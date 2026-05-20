
// CLIENTE


function mostrarMenu() {

    const menu = document.getElementById("menu");

    menu.innerHTML = "";

    // map()
    const productosHTML = catalogo.map((producto, index) => {

        // promociones dinámicas
        let promo = "";

        if(producto.precio >= 50) {
            promo = `<p style="color:green;">🔥 Promoción</p>`;
        }

        // productos disponibles
        let disponible = "";

        if(producto.nombre === "Sandwich") {
            disponible = `<p style="color:red;">No disponible</p>`;
        } else {
            disponible = `<p style="color:blue;">Disponible</p>`;
        }

        return `
        <div class="producto">

            <h3>${producto.nombre}</h3>

            <p>Precio: $${producto.precio}</p>

            ${promo}

            ${disponible}

            <button onclick="agregarPedido(
                '${producto.nombre}',
                ${producto.precio}
            )"

            ${producto.nombre === "Sandwich" ? "disabled" : ""}

            >
                Agregar
            </button>

        </div>
        `;
    });

    menu.innerHTML = productosHTML.join("");
}

// MOSTRAR PEDIDOS

function actualizarPantalla() {

    const lista = document.getElementById("listaPedidos");

    lista.innerHTML = "";

    // forEach()
    pedidos.forEach((pedido, index) => {

        lista.innerHTML +=
        `
        <li>

            ${pedido.nombre} - $${pedido.precio}

            <button onclick="eliminarPedido(${index})">
                Eliminar
            </button>

        </li>
        `;
    });

    document.getElementById("total").innerHTML =
    "Total: $" + totalAcumulado;
}