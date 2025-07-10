const names = document.getElementById("name");
const surname = document.getElementById("lastname");
const documentId = document.getElementById("dni");
const phone = document.getElementById("telefono");
const email = document.getElementById("email");
const btn = document.querySelector(".submit-btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (
        names.value.trim() === "" ||
        surname.value.trim() === "" ||
        documentId.value.trim() === "" ||
        phone.value.trim() === "" ||
        email.value.trim() === ""
    ) {
        alert("Please fill in all the fields in the form.");
        return;
    }

    let alertMessage = `We will contact you as soon as possible. Thank you!`;
    
    alert(alertMessage);

    names.value = "";
    surname.value = "";
    documentId.value = "";
    phone.value = "";
    email.value = "";
});
