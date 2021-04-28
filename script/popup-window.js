// ////////////////////////////////////////////////
// /*    Part 1: Setting Exit Button Position    */
// ////////////////////////////////////////////////
// // Define variables
// const promotionCard = document.getElementById("promotion__card");
// const properties = window.getComputedStyle(promotionCard, null);
// var distance = parseInt(properties.width) / 2 - 50;
const exitButton = document.getElementById("exit");

// Set the position of exit button to be always on the right side of the promotion card.
// function setPosition() {
//     exitButton.style.left = `calc(50% + ${distance}px )`;
// }

// Execute setPosition after 1sec
// setTimeout(setPosition, 100);
// console.group(exitButton.style);

////////////////////////////////////////////////
/*    Part 2: Setting Exit Button Function    */
////////////////////////////////////////////////
// Define variables
const promotion = document.getElementsByClassName("promotion");

// Define a function to set visibility to "hidden"
function setVisibility() {
    promotion[0].style.visibility = "hidden";
}

// Add event listener to the "exit" button to hide the carousel after 1sec
exitButton.addEventListener("click", setVisibility);
