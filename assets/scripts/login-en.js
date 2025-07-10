const emaillogin = document.getElementById("email-login");
const passwordlogin = document.getElementById("contrasena-login");
const btnlogin = document.querySelector(".submit-btn");

btnlogin.addEventListener("click", (e) => {
    e.preventDefault();

    if (emaillogin.value.trim() === '' || passwordlogin.value.trim() === '') {
        alert("Please enter your email and password correctly.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emaillogin.value)) {
        alert("Please enter a valid email format (e.g., user@example.com).");
        return;
    }

    let successMessage = "You have successfully logged in!";
    alert(successMessage);

    emaillogin.value = "";
    passwordlogin.value = "";
});
