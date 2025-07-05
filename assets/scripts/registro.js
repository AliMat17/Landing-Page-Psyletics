const nombreregistro = document.getElementById("name-registro");
const apellidoregistro = document.getElementById("lastname-registro");
const documentoregistro = document.getElementById("dni-registro");
const numeroregistro = document.getElementById("telefono-registro");
const emailregistro = document.getElementById("email-registro");
const nacimiento = document.getElementById("nacimiento");
const direccion = document.getElementById("direccion");
const contrasena = document.getElementById("contrasena");
const confirmaContrasena = document.getElementById("confirma");
const btnregistro = document.querySelector(".submit-btn");

btnregistro.addEventListener("click", (e) => {
    e.preventDefault();

   

    //Validar que las contraseñas coincidan
    if (contrasena.value !== confirmaContrasena.value) {
        alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        return;
    }

    
    if (nombreregistro.value.trim() === '' || apellidoregistro.value.trim() === '' || emailregistro.value.trim() === '' || contrasena.value.trim() === '') {
        alert("Por favor, rellena todos los campos obligatorios.");
        return;
    }

    
    let mensajeDeAlerta = `¡Te has registrado exitosamente!`;
    alert(mensajeDeAlerta);
    
    
    nombreregistro.value = "";
    apellidoregistro.value = "";
    documentoregistro.value = "";
    numeroregistro.value = "";
    emailregistro.value = "";
    nacimiento.value = "";
    direccion.value = "";
    contrasena.value = "";
    confirmaContrasena.value = "";
});