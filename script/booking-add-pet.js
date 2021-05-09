// Define variables
const petInput1 = document.getElementById("pet2");
const petInput2 = document.getElementById("pet3");
const petInput3 = document.getElementById("pet4");
const button1 = document.getElementById("add-pet-button-1");
const button2 = document.getElementById("add-pet-button-2");
const button3 = document.getElementById("add-pet-button-3");

// When user click button, hide this button, show additional inputs, and show next button
button1.addEventListener("click", function (e) {
    e.preventDefault();
    button2.style.display = "initial";
    petInput1.style.display = "initial";
    button1.style.display = "none";
});

button2.addEventListener("click", function (e) {
    e.preventDefault();
    button3.style.display = "initial";
    petInput2.style.display = "initial";
    button2.style.display = "none";
});

button3.addEventListener("click", function (e) {
    e.preventDefault();
    petInput3.style.display = "initial";
    button3.style.display = "none";
});