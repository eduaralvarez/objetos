let maquinaExpendedora = {
    productos: [
        { nombre: "Chocolate", cantidad: 2 },
        { nombre: "Galletas", cantidad: 3 },
        { nombre: "Refresco", cantidad: 1 },
        { nombre: "Caramelos", cantidad: 0 },
        { nombre: "Papas Fritas", cantidad: 4 }
    ]
};

function mostrarInventario(maquina) {
    console.log("Inventario de la máquina:");
    maquina.productos.forEach((producto, i) => {
        console.log(`${i}. ${producto.nombre} - Cantidad: ${producto.cantidad}`);
    });
}

function comprarProducto(maquina, codigo) {
    if (codigo < 0 || codigo >= maquina.productos.length) {
        console.log("Código inválido. Intente de nuevo.");
        return;
    }

    let producto = maquina.productos[codigo];

    if (producto.cantidad > 0) {
        console.log(`Producto entregado: ${producto.nombre}`);
        producto.cantidad--;
    } else {
        console.log(`El producto "${producto.nombre}" está agotado.`);
        sugerirProducto(maquina);
    }
}

function sugerirProducto(maquina) {
    let sugerencia = maquina.productos.find(p => p.cantidad > 0);
    if (sugerencia) {
        console.log(`Sugerencia: Puede comprar ${sugerencia.nombre}`);
    } else {
        console.log("Lo sentimos, no hay productos disponibles.");
    }
}

// Pruebas
mostrarInventario(maquinaExpendedora);
comprarProducto(maquinaExpendedora, 2);
comprarProducto(maquinaExpendedora, 2);
comprarProducto(maquinaExpendedora, 3);
comprarProducto(maquinaExpendedora, 1);
mostrarInventario(maquinaExpendedora);

