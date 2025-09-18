function pageLoad(){

    // get the content div from the template.html
    const content = document.getElementById("content");

    // create the elements for the content
    const title = document.createElement("h1");
    title.textContent = "Welcome to All Blue";

    // create extra div just for testing
    const tagline = document.createElement("p");
    tagline.textContent = '"Where the only thing worse than food is the service"';
    tagline.style.padding = "20px";

    // adding created title and tagline to the content div
    content.appendChild(title);
    content.appendChild(tagline);

}


export default pageLoad;