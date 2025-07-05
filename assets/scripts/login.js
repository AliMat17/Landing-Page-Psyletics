const emaillogin = document.getElementById("email-login");
const contrasenalogin = document.getElementById("contrasena-login");
const btnlogin = document.querySelector(".submit-btn");

btnlogin.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (emaillogin.value.trim() === '' || contrasenalogin.value.trim() === '') {
        alert("Introduce tu email y contraseña correctamente por favor");
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
   
    if (!emailRegex.test(emaillogin.value)) {
        alert("Por favor, introduce un formato de email válido (ej: correo@dominio.com).");
        return; 
    }


    
    let mensajeDeAlerta = `¡Has iniciado sesión de forma exitosa!`;
    alert(mensajeDeAlerta);
    
    
    emaillogin.value = "";
    contrasenalogin.value = "";
});