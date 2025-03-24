// mini banco de datos con usuarios y contraseñas
const database = [
    { usuario: "andres", password: "12345" },
    { usuario: "maria", password: "password1" },
    { usuario: "admin", password: "admin123" }
];

// Captura el formulario y agrega un evento para manejar el login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto de recargar la página

    // Obtiene los valores ingresados por el usuario
    const usuarioInput = document.getElementById("usuario").value;
    const passwordInput = document.getElementById("password").value;

    // Verifica si el usuario y contraseña existen en el "banco de datos"
    const usuarioEncontrado = database.find(
        (entry) => entry.usuario === usuarioInput && entry.password === passwordInput
    );

    if (usuarioEncontrado) {
        // Si existe, redirige a la página siguiente
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, intenta de nuevo.");
    }
});
