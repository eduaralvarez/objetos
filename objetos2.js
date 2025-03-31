let banco = {
    transacciones: []
};

function obtenerSaldo(bancoObj) {
    return bancoObj.transacciones.reduce((saldo, monto) => saldo + monto, 0);
}

function registrarTransaccion(bancoObj, monto) {
    bancoObj.transacciones = [...bancoObj.transacciones, monto].slice(-5);
}

function depositar(bancoObj, monto) {
    if (monto <= 0) return console.log("El monto debe ser mayor que 0.");
    registrarTransaccion(bancoObj, monto);
    console.log(`Depósito de $${monto} realizado. Saldo: $${obtenerSaldo(bancoObj)}`);
}

function retirar(bancoObj, monto) {
    if (monto <= 0 || monto > 500) return console.log("Monto inválido (máx. $500).");
    if (monto > obtenerSaldo(bancoObj)) return console.log("Fondos insuficientes.");
    registrarTransaccion(bancoObj, -monto);
    console.log(`Retiro de $${monto} realizado. Saldo: $${obtenerSaldo(bancoObj)}`);
}

function mostrarTransacciones(bancoObj) {
    console.log("Últimas transacciones:");
    bancoObj.transacciones.forEach((monto, i) => {
        console.log(`${i + 1}. ${monto > 0 ? "Depósito" : "Retiro"} de $${Math.abs(monto)}`);
    });
}

function mostrarMovimientos(bancoObj, tipo) {
    let movs = bancoObj.transacciones.filter(m => (tipo === "depósitos" ? m > 0 : m < 0));
    console.log(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} recientes:`, movs.length ? movs.join(", ") : "Ninguno");
}

// Ejecución de pruebas
depositar(banco, 200);
depositar(banco, 300);
retirar(banco, 100);
retirar(banco, 50);
retirar(banco, 600);

console.log(`Saldo actual: $${obtenerSaldo(banco)}`);
mostrarTransacciones(banco);
mostrarMovimientos(banco, "depósitos");
mostrarMovimientos(banco, "retiros");

