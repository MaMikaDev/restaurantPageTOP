import pageLoad from "./pageLoad.js";
import "./styles.css";

pageLoad();

// getting the home button
const homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", () => {
    // ensure the div is cleaned
    const content = document.getElementById("content");
    content.textContent = "";

    pageLoad();
});


console.log("Check that the basic set up works")

