function submitForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var service = document.getElementById("service").value;

    if (fullName && email && phone && service) {
        var submitMessage = document.getElementById("submitMessage");
        submitMessage.innerHTML = "Thank You For Submitting Your Information. We Will Contact You Shortly.";
        submitMessage.style.color = "green";
        clearForm();
    } else {
        alert("Please fill out all fields before submitting.");
    }

    return false;
}

function clearForm() {
    document.getElementById("contactForm").reset();
}
