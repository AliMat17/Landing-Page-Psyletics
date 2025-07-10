const firstName = document.getElementById("name-registro");
const lastName = document.getElementById("lastname-registro");
const idNumber = document.getElementById("dni-registro");
const phoneNumber = document.getElementById("telefono-registro");
const email = document.getElementById("email-registro");
const birthDate = document.getElementById("nacimiento");
const address = document.getElementById("direccion");
const password = document.getElementById("contrasena");
const confirmPassword = document.getElementById("confirma");
const btnRegister = document.querySelector(".submit-btn");

btnRegister.addEventListener("click", (e) => {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    if (
        firstName.value.trim() === '' ||
        lastName.value.trim() === '' ||
        email.value.trim() === '' ||
        password.value.trim() === ''
    ) {
        alert("Please fill in all required fields.");
        return;
    }

    let successMessage = `You have successfully registered!`;
    alert(successMessage);

    firstName.value = "";
    lastName.value = "";
    idNumber.value = "";
    phoneNumber.value = "";
    email.value = "";
    birthDate.value = "";
    address.value = "";
    password.value = "";
    confirmPassword.value = "";
});
