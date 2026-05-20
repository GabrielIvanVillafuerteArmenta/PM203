// ====================
// PEDIDOS
// ====================

let pedidos=[];
let totalAcumulado=0;

// ====================
// IVA
// ====================

const IVA=0.16;

// ====================
// PROMOCIONES
// ====================

const promociones=[
    "Café Americano + Croissant por $75",
    "2 Cappuccinos por $110",
    "10% de descuento en bebidas calientes",
    "Pay de Queso gratis en compras mayores a $250"
];

// ====================
// AGREGAR PEDIDO
// ====================

function agregarPedido(nombre,precio){
    const disponible=
    descontarStock(nombre);

    if(!disponible){
        alert("Producto agotado");
        return;
    }

    const pedido={
        nombre:nombre,
        precio:precio
    };

    pedidos.push(pedido);

    totalAcumulado+=precio;

    mostrarMenu();
    actualizarPedidos();
}

// ====================
// ELIMINAR PEDIDO
// ====================

function eliminarPedido(index){
    const pedidoEliminado=
    pedidos[index];

    regresarStock(
        pedidoEliminado.nombre
    );

    totalAcumulado-=
    pedidoEliminado.precio;

    pedidos.splice(index,1);

    mostrarMenu();
    actualizarPedidos();
}

// ====================
// CALCULAR SUBTOTAL
// ====================

function calcularSubtotal(){
    return totalAcumulado;
}

// ====================
// CALCULAR IVA
// ====================

function calcularIVA(subtotal){
    return subtotal*IVA;
}

// ====================
// CALCULAR TOTAL
// ====================

function calcularTotal(subtotal,iva){
    return subtotal+iva;
}