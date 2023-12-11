function updateServiceImage() {
    var selectElement = document.getElementById("service-select");
    var selectedValue = selectElement.value;
    var selectedServiceDiv = document.getElementById("selected-service");

    selectedServiceDiv.innerHTML = "";

    var imageElement = document.createElement("img");
    imageElement.src = "images/" + selectedValue + ".png";
    imageElement.alt = selectedValue;
    selectedServiceDiv.appendChild(imageElement);
}