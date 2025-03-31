let filaEspera = {
    clientes: [],
    capacidad: 7
};

function agregar(fila, nombre, edad) {
    if (fila.clientes.length < fila.capacidad) {
        let cliente = { nombre, edad };  // Cada cliente es un objeto
        fila.clientes.push(cliente);
        console.log(`${nombre} ha sido agregado a la cola.`);
    } else {
        console.log("La cola está llena.");
    }
}

function atender(fila) {
    if (fila.clientes.length > 0) {
        let atendido = fila.clientes.shift();
        console.log(`${atendido.nombre} ha sido atendido.`);
    } else {
        console.log("No hay clientes en la cola.");
    }
}

function mostrarClientes(fila) {
    if (fila.clientes.length > 0) {
        console.log("Clientes en la cola:");
        fila.clientes.forEach((c, i) => console.log(`${i + 1}. ${c.nombre} (Edad: ${c.edad})`));
    } else {
        console.log("La cola está vacía.");
    }
}

// Pruebas
agregar(filaEspera, "Juan", 25);
agregar(filaEspera, "Maria", 30);
agregar(filaEspera, "Carlos", 28);
agregar(filaEspera, "Jose", 22);
agregar(filaEspera, "Marina", 35);
agregar(filaEspera, "Eduar", 27);
agregar(filaEspera, "El Gey", 40);
atender(filaEspera);
mostrarClientes(filaEspera);
