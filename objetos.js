let hotel = {
    habitaciones: {
        1: { ocupada: true },
        2: { ocupada: false },
        3: { ocupada: true },
        4: { ocupada: false },
        5: { ocupada: true }
    }
};

function mostrarEstado(hotelObj) {
    console.clear();

    let disponibles = [];
    let ocupadas = [];

    let numerosHabitaciones = Object.keys(hotelObj.habitaciones);

    numerosHabitaciones.forEach(num => {
        if (hotelObj.habitaciones[num].ocupada) {
            ocupadas.push(`Habitación ${num}`);
        } else {
            disponibles.push(`Habitación ${num}`);
        }
    });

    console.log("** Estado de las habitaciones **");
    console.log("Disponibles:", disponibles.length > 0 ? disponibles.join(", ") : "Ninguna");
    console.log("Ocupadas:", ocupadas.length > 0 ? ocupadas.join(", ") : "Ninguna");
}

mostrarEstado(hotel);

