// CATÁLOGO

const catalogo = [

    {
        nombre: "Café Americano",
        categoria: "bebida",
        precio: 45,
        stock: 10,
        disponible: true
    },

    {
        nombre: "Espresso",
        categoria: "bebida",
        precio: 40,
        stock: 10,
        disponible: true
    },

    {
        nombre: "Cappuccino",
        categoria: "bebida",
        precio: 65,
        stock: 8,
        disponible: true
    },

    {
        nombre: "Latte",
        categoria: "bebida",
        precio: 70,
        stock: 6,
        disponible: true
    },

    {
        nombre: "Chocolate Caliente",
        categoria: "bebida",
        precio: 60,
        stock: 5,
        disponible: true
    },

    {
        nombre: "Té Chai",
        categoria: "bebida",
        precio: 55,
        stock: 0,
        disponible: false
    },

    {
        nombre: "Croissant",
        categoria: "postre",
        precio: 40,
        stock: 7,
        disponible: true
    },

    {
        nombre: "Pay de Queso",
        categoria: "postre",
        precio: 55,
        stock: 4,
        disponible: true
    },

    {
        nombre: "Muffin de Chocolate",
        categoria: "postre",
        precio: 50,
        stock: 3,
        disponible: true
    },

    {
        nombre: "Sandwich Panini",
        categoria: "snack",
        precio: 85,
        stock: 5,
        disponible: true
    }

];

// FILTER

const productosBaratos = catalogo.filter(

    producto => producto.precio < 60
);

const bebidas = catalogo.filter(

    producto => producto.categoria === "bebida"
);

const postres = catalogo.filter(

    producto => producto.categoria === "postre"
);

// FIND

function buscarProducto(nombre) {

    return catalogo.find(

        producto => producto.nombre === nombre
    );
}

// SORT

const productosOrdenados = [...catalogo].sort(

    (a, b) => a.precio - b.precio
);

// STOCK

function descontarStock(nombreProducto) {

    const producto = buscarProducto(
        nombreProducto
    );

    if (!producto) {

        return false;
    }

    if (producto.stock <= 0) {

        producto.disponible = false;

        return false;
    }

    producto.stock--;

    if (producto.stock === 0) {

        producto.disponible = false;
    }

    return true;
}

function regresarStock(nombreProducto) {

    const producto = buscarProducto(
        nombreProducto
    );

    if (!producto) {

        return;
    }

    producto.stock++;

    producto.disponible = true;
}

function agregarStock(
    nombreProducto,
    cantidad
) {

    const producto = buscarProducto(
        nombreProducto
    );

    if (!producto) {

        console.log(
            "Producto no encontrado"
        );

        return;
    }

    producto.stock += cantidad;

    if (producto.stock > 0) {

        producto.disponible = true;
    }

    console.log(
        "Nuevo stock:"
    );

    console.log(producto.stock);
}

// CREAR

function crearProducto(

    nombre,
    categoria,
    precio,
    stock

) {

    const nuevoProducto = {

        nombre: nombre,

        categoria: categoria,

        precio: precio,

        stock: stock,

        disponible: stock > 0
    };

    catalogo.push(nuevoProducto);

    console.log(nuevoProducto);
}

// BUSCAR

function buscarProductos(texto) {

    return catalogo.filter((producto) =>

        producto.nombre
            .toLowerCase()
            .includes(texto.toLowerCase())
    );
}

// FILTROS

function obtenerBebidas() {

    return catalogo.filter(

        producto =>
            producto.categoria === "bebida"
    );
}

function obtenerPostres() {

    return catalogo.filter(

        producto =>
            producto.categoria === "postre"
    );
}

function obtenerSnacks() {

    return catalogo.filter(

        producto =>
            producto.categoria === "snack"
    );
}

// ORDENAR

function ordenarBaratos() {

    return [...catalogo].sort(

        (a, b) => a.precio - b.precio
    );
}

function ordenarCaros() {

    return [...catalogo].sort(

        (a, b) => b.precio - a.precio
    );
}

// PROMESAS

function prepararPedido(producto) {

    return new Promise((resolve, reject) => {

        console.log(
            "Preparando " +
            producto.nombre + "..."
        );

        let errorCocina =
            Math.random() < 0.1;

        let faltaIngrediente =
            Math.random() < 0.1;

        if (producto.cancelado) {

            reject(
                "Pedido cancelado"
            );

            return;
        }

        if (errorCocina) {

            reject(

                "Error en cocina preparando " +
                producto.nombre
            );

            return;
        }

        if (faltaIngrediente) {

            reject(

                "Falta ingrediente para " +
                producto.nombre
            );

            return;
        }

        setTimeout(() => {

            if (producto.cancelado) {

                reject(
                    "Pedido cancelado"
                );

                return;
            }

            resolve(

                producto.nombre +
                " listo"
            );

        }, 2000);

    });

}