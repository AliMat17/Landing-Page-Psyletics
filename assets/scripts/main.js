const names = document.getElementById("name");
const surname = document.getElementById("lastname");
const documento = document.getElementById("dni");
const numero = document.getElementById("telefono")
const email = document.getElementById("email");
const btn = document.querySelector(".submit-btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    if(
        names.value.trim() === "" ||
        surname.value.trim() === "" ||
        documento.value.trim() === "" ||
        numero.value.trim() === "" ||
        email.value.trim() === "") {

        alert ("Por favor rellena todos los campos del formulario");
        return;
        }


    
    let mensajeDeAlerta = `Te contactaremos lo antes posible. Gracias`;
    
    alert(mensajeDeAlerta);
    
    names.value = "";
    surname.value = "";
    documento.value = "";
    numero.value = "";
    email.value = "";
   
});