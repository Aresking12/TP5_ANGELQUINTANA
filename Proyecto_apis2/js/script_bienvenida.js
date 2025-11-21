// Revisa si ya hay un nombre guardado
let nombre = localStorage.getItem("nombreUsuario");

if (!nombre) {
    // Solo pregunta la primera vez
    nombre = prompt("Ingrese su nombre (solo esta vez):");
    if (nombre) {
        localStorage.setItem("nombreUsuario", nombre);
    }
}

if (nombre) {
    document.getElementById("nombreUsuario").innerText = "Usuario: " + nombre;
    document.getElementById("mensajeBienvenida").innerText = "¡Bienvenido de nuevo, " + nombre + "!";
}
