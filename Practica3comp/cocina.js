// ====================
// ALMACÉN / CATÁLOGO
// ====================

const catalogo=[
    {
        nombre:"Café Americano",
        categoria:"bebida",
        precio:45,
        stock:10,
        disponible:true
    },
    {
        nombre:"Cappuccino",
        categoria:"bebida",
        precio:65,
        stock:8,
        disponible:true
    },
    {
        nombre:"Latte",
        categoria:"bebida",
        precio:70,
        stock:6,
        disponible:true
    },
    {
        nombre:"Chocolate Caliente",
        categoria:"bebida",
        precio:60,
        stock:5,
        disponible:true
    },
    {
        nombre:"Té Chai",
        categoria:"bebida",
        precio:55,
        stock:0,
        disponible:false
    },
    {
        nombre:"Croissant",
        categoria:"postre",
        precio:40,
        stock:7,
        disponible:true
    },
    {
        nombre:"Pay de Queso",
        categoria:"postre",
        precio:55,
        stock:4,
        disponible:true
    },
    {
        nombre:"Muffin de Chocolate",
        categoria:"postre",
        precio:50,
        stock:3,
        disponible:true
    },
    {
        nombre:"Sandwich Panini",
        categoria:"snack",
        precio:85,
        stock:5,
        disponible:true
    }
];

// ====================
// FILTER()
// PRODUCTOS BARATOS
// ====================

const productosBaratos=catalogo.filter(
    producto=>producto.precio<60
);

console.log("Productos baratos:");
console.log(productosBaratos);

// ====================
// FILTER()
// BEBIDAS
// ====================

const bebidas=catalogo.filter(
    producto=>producto.categoria==="bebida"
);

console.log("Bebidas:");
console.log(bebidas);

// ====================
// FILTER()
// POSTRES
// ====================

const postres=catalogo.filter(
    producto=>producto.categoria==="postre"
);

console.log("Postres:");
console.log(postres);

// ====================
// FIND()
// BUSCAR PRODUCTO
// ====================

function buscarProducto(nombre){
    return catalogo.find(
        producto=>producto.nombre===nombre
    );
}

// ====================
// SORT()
// BARATOS A CAROS
// ====================

const productosOrdenados=[...catalogo].sort(
    (a,b)=>a.precio-b.precio
);

console.log("Productos ordenados:");
console.log(productosOrdenados);

// ====================
// DESCONTAR STOCK
// ====================

function descontarStock(nombreProducto){
    const producto=buscarProducto(nombreProducto);

    if(!producto){
        return false;
    }

    if(producto.stock<=0){
        producto.disponible=false;
        return false;
    }

    producto.stock--;

    if(producto.stock===0){
        producto.disponible=false;
    }

    return true;
}

// ====================
// REGRESAR STOCK
// ====================

function regresarStock(nombreProducto){
    const producto=buscarProducto(nombreProducto);

    if(!producto){
        return;
    }

    producto.stock++;
    producto.disponible=true;
}

// ====================
// AGREGAR STOCK
// ====================

function agregarStock(nombreProducto,cantidad){
    const producto=buscarProducto(nombreProducto);

    if(!producto){
        console.log("Producto no encontrado");
        return;
    }

    producto.stock+=cantidad;

    if(producto.stock>0){
        producto.disponible=true;
    }

    console.log("Nuevo stock:");
    console.log(producto.stock);
}

// ====================
// CREAR PRODUCTO
// ====================

function crearProducto(nombre,categoria,precio,stock){
    const nuevoProducto={
        nombre:nombre,
        categoria:categoria,
        precio:precio,
        stock:stock,
        disponible:stock>0
    };

    catalogo.push(nuevoProducto);
    console.log(nuevoProducto);
}

// ====================
// BUSCAR PRODUCTOS
// ====================

function buscarProductos(texto){
    return catalogo.filter((producto)=>
        producto.nombre
        .toLowerCase()
        .includes(texto.toLowerCase())
    );
}

// ====================
// FILTRAR BEBIDAS
// ====================

function obtenerBebidas(){
    return catalogo.filter(
        producto=>producto.categoria==="bebida"
    );
}

// ====================
// FILTRAR POSTRES
// ====================

function obtenerPostres(){
    return catalogo.filter(
        producto=>producto.categoria==="postre"
    );
}

// ====================
// FILTRAR SNACKS
// ====================

function obtenerSnacks(){
    return catalogo.filter(
        producto=>producto.categoria==="snack"
    );
}

// ====================
// ORDENAR BARATOS
// ====================

function ordenarBaratos(){
    return [...catalogo].sort(
        (a,b)=>a.precio-b.precio
    );
}

// ====================
// ORDENAR CAROS
// ====================

function ordenarCaros(){
    return [...catalogo].sort(
        (a,b)=>b.precio-a.precio
    );
}