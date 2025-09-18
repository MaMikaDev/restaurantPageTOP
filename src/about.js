function loadAbout(){
    console.log("loading about test");

    // get the content div from the template.html
    const content = document.getElementById("content");

    const about = document.createElement("p");
    about.textContent = "This is a very long about section, so instead of me writing lots and lots here, lets have some Lorem Ipsum instead: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu lobortis ex, quis cursus augue. Curabitur dapibus ac quam ac convallis. Aenean vehicula, tortor at ultrices euismod, lacus neque consectetur leo, sed auctor nisl libero ac enim. Fusce est augue, blandit eget tincidunt eu, consequat non elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed condimentum venenatis est, vitae volutpat justo molestie nec. In fermentum convallis nisl nec placerat. Maecenas porta augue vitae sodales dictum. Nullam bibendum magna elit, at vestibulum nulla varius nec. Pellentesque eleifend elementum mauris dignissim auctor. In quis sem sed ex pretium lobortis vitae nec massa. Aenean suscipit vitae lectus sed elementum. Sed viverra lectus vulputate nisi vulputate vulputate.";

    about.style.padding = "20px";

    content.appendChild(about);

}

export default loadAbout;