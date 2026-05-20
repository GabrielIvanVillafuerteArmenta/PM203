// MOSTRAR MENÚ

function mostrarMenu(){
    mostrarProductos(catalogo);
}

// MOSTRAR PRODUCTOS

function mostrarProductos(listaProductos){
    const menu=
    document.getElementById("menu");

    menu.innerHTML="";

    const productosHTML=
    listaProductos.map((producto)=>{

        let estado=`
            <p class="disponible">
                Disponible
            </p>
        `;

        let botonDeshabilitado="";

        if(!producto.disponible){

            estado=`
                <p class="agotado">
                    Agotado
                </p>
            `;

            botonDeshabilitado=
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

    menu.innerHTML=
    productosHTML.join("");
}

// BUSCAR PRODUCTOS

function buscarEnMenu(){
    const texto=
    document.getElementById("busqueda")
    .value;

    const resultados=
    buscarProductos(texto);

    mostrarProductos(resultados);
}

// FILTROS

function verBebidas(){
    mostrarProductos(
        obtenerBebidas()
    );
}

function verPostres(){
    mostrarProductos(
        obtenerPostres()
    );
}

function verSnacks(){
    mostrarProductos(
        obtenerSnacks()
    );
}

function ordenarMenorPrecio(){
    mostrarProductos(
        ordenarBaratos()
    );
}

function ordenarMayorPrecio(){
    mostrarProductos(
        ordenarCaros()
    );
}

// MOSTRAR PROMOCIONES

function abrirPromociones(){
    const modal=
    document.getElementById("modalPromociones");

    const lista=
    document.getElementById("listaPromociones");

    lista.innerHTML="";

    promociones.forEach((promo)=>{

        lista.innerHTML+=`
            <li>${promo}</li>
        `;
    });

    modal.style.display="flex";
}

// CERRAR PROMOCIONES

function cerrarPromociones(){
    document.getElementById("modalPromociones")
    .style.display="none";
}

// ACTUALIZAR PEDIDOS

function actualizarPedidos(){
    const listaPedidos=
    document.getElementById("listaPedidos");

    listaPedidos.innerHTML="";

    pedidos.forEach((pedido,index)=>{

        listaPedidos.innerHTML+=`

            <li>

                ${pedido.nombre}
                - $${pedido.precio}

                <button
                    onclick="eliminarPedido(${index})"
                >
                    X
                </button>

            </li>

        `;
    });

    const subtotal=
    calcularSubtotal();

    const ivaCalculado=
    calcularIVA(subtotal);

    const totalConIVA=
    calcularTotal(
        subtotal,
        ivaCalculado
    );

    document.getElementById("subtotal")
    .innerHTML=
    `Subtotal: $${subtotal.toFixed(2)}`;

    document.getElementById("iva")
    .innerHTML=
    `IVA (16%): $${ivaCalculado.toFixed(2)}`;

    document.getElementById("total")
    .innerHTML=
    `Total: $${totalConIVA.toFixed(2)}`;
}