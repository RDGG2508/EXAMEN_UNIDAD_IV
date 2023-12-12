function diasDeLaSemana() {
    var  dia = (prompt("Escoge un día para viajar."))
    switch (dia) {
        case "Lunes":
            return "Buen inicio de semana viajando.";
        case "Martes":
            return "Los martes son buenos días para viajar.";
        case "Miércoles":
            return "Es un día alegre para viajar.";
        case "Jueves":
            return "Parece que tendrás un fin de semana largo.";
        case "Viernes":
                return "Que tengas un buen fin de semana.";
        case "Sábado":
                return "Sábado de relajo fuera de tu ciudad.";
        case "Domingo":
                return "Es bueno volver a casa.";
        default:
            return "Escribe bien el día.";
    }
}

function nombresServicios() {
    var servicio = ["Hoteles", "Transporte", 8, 1989, 4, 2023, 2, "Visitas guiadas"];
    var nombresDeServiciosSinNumeros = [];
        for (var i = 0; i < servicio.length; i++) {
            if (typeof servicio[i] === 'string') {
                nombresDeServiciosSinNumeros.push(servicio[i]);
            }
        }
    console.log("El Array sin los números queda así: " + nombresDeServiciosSinNumeros + ".")
}