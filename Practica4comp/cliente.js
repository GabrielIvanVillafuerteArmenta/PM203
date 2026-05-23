// MENÚ

function mostrarMenu() {

    mostrarProductos(catalogo);
}

// PRODUCTOS

function mostrarProductos(
    listaProductos
) {

    const menu =
    document.getElementById("menu");

    menu.innerHTML = "";

    const productosHTML =
    listaProductos.map((producto) => {

        let estado = `
            <p class="disponible">
                Disponible
            </p>
        `;

        let botonDeshabilitado = "";

        if (!producto.disponible) {

            estado = `
                <p class="agotado">
                    Agotado
                </p>
            `;

            botonDeshabilitado =
            "disabled";
        }

        return `

        <div class="card-producto">

            <h3>${producto.nombre}</h3>

            <p class="precio">
                $${producto.precio}
            </p>

            <p>
                Categoría:
                ${producto.categoria}
            </p>

            <p>
                Stock:
                ${producto.stock}
            </p>

            ${estado}

            <button

                onclick="agregarPedido(
                    '${producto.nombre}',
                    ${producto.precio}
                )"

                ${botonDeshabilitado}

            >
                Agregar al pedido
            </button>

        </div>
        `;
    });

    menu.innerHTML =
    productosHTML.join("");
}

// BUSCAR

function buscarEnMenu() {

    const texto =
    document.getElementById("busqueda")
    .value;

    const resultados =
    buscarProductos(texto);

    mostrarProductos(resultados);
}

// FILTROS

function verBebidas() {

    mostrarProductos(
        obtenerBebidas()
    );
}

function verPostres() {

    mostrarProductos(
        obtenerPostres()
    );
}

function verSnacks() {

    mostrarProductos(
        obtenerSnacks()
    );
}

function ordenarMenorPrecio() {

    mostrarProductos(
        ordenarBaratos()
    );
}

function ordenarMayorPrecio() {

    mostrarProductos(
        ordenarCaros()
    );
}

// PROMOCIONES

function abrirPromociones() {

    const modal =
    document.getElementById(
        "modalPromociones"
    );

    const lista =
    document.getElementById(
        "listaPromociones"
    );

    lista.innerHTML = "";

    promociones.forEach((promo) => {

        lista.innerHTML += `
            <li>${promo}</li>
        `;
    });

    modal.style.display = "flex";
}

function cerrarPromociones() {

    document.getElementById(
        "modalPromociones"
    )
    .style.display = "none";
}

// PEDIDOS

function actualizarPedidos() {

    const listaPedidos =
    document.getElementById(
        "listaPedidos"
    );

    listaPedidos.innerHTML = "";

    pedidos.forEach((pedido, index) => {

        listaPedidos.innerHTML += `

            <li>

                <strong>
                    ${pedido.nombre}
                </strong>

                <br>

                Estado:
                ${pedido.estado}

                <br>

                Tiempo restante:
                ${pedido.tiempoRestante}s

                <br>

                <button
                    onclick="eliminarPedido(${index})"
                >
                    Cancelar
                </button>

            </li>

            <hr>
        `;
    });

    const subtotal =
    calcularSubtotal();

    const ivaCalculado =
    calcularIVA(subtotal);

    const totalConIVA =
    calcularTotal(
        subtotal,
        ivaCalculado
    );

    document.getElementById("subtotal")
    .innerHTML =
    `Subtotal: $${subtotal.toFixed(2)}`;

    document.getElementById("iva")
    .innerHTML =
    `IVA (16%): $${ivaCalculado.toFixed(2)}`;

    document.getElementById("total")
    .innerHTML =
    `Total: $${totalConIVA.toFixed(2)}`;
}

// ASINCRONÍA

function iniciarProcesoPedido(
    pedido
) {

    actualizarPedidos();

    // PREPARANDO

    setTimeout(() => {

        if (pedido.cancelado) {
            return;
        }

        pedido.estado =
        "Preparando";

        actualizarPedidos();

    }, 2000);

    // EMPACANDO

    setTimeout(() => {

        if (pedido.cancelado) {
            return;
        }

        pedido.estado =
        "Empacando";

        actualizarPedidos();

    }, 5000);

    // CONTADOR

    const intervalo =
    setInterval(() => {

        if (pedido.cancelado) {

            clearInterval(intervalo);

            return;
        }

        pedido.tiempoRestante--;

        actualizarPedidos();

        // TERMINAR PEDIDO

        if (
            pedido.tiempoRestante <= 0
        ) {

            clearInterval(intervalo);

            prepararPedido(pedido)

            .then((mensaje) => {

                pedido.estado =
                "Pedido entregado";

                actualizarPedidos();

                notificarPedido(
                    mensaje,
                    mostrarNotificacion
                );
            })

            .catch((error) => {

                pedido.estado =
                "Cancelado";

                actualizarPedidos();

                notificarPedido(
                    error,
                    mostrarNotificacion
                );
            });
        }

    }, 1000);
}

// NOTIFICACIÓN

function mostrarNotificacion(
    mensaje
) {

    alert(mensaje);
}