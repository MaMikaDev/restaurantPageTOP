function loadMenu(){
    console.log("loading menu test");

        // get the content div from the template.html
    const content = document.getElementById("content");

    // create the elements for the content
    const menu = document.createElement("h2");
    menu.textContent = "Our Current Menu";

    // create extra div just for testing
    const menuOne = document.createElement("p");
    menuOne.textContent = "All the meat you can eat (and some vegetables)";
    menuOne.style.padding = "20px";

     const menuTwo = document.createElement("p");
    menuTwo.textContent = "Marimo special (rice with fish basically)";
    menuTwo.style.padding = "20px";


    // adding created title and tagline to the content div
    content.appendChild(menu);
    content.appendChild(menuOne);
    content.appendChild(menuTwo);


}

export default loadMenu;