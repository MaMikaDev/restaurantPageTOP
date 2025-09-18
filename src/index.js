// adding all the necessary imports
import pageLoad from "./pageLoad.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

// import the stylesheet
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

const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.textContent = "";

    loadMenu();
});

const aboutButton = document.getElementById("aboutButton");

aboutButton.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.textContent ="";

    loadAbout();
})

