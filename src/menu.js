function loadMenu(){
    console.log("loading menu test");

        // get the content div from the template.html
    const content = document.getElementById("content");

    // create the elements for the content
    const menu = document.createElement("h1");
    menu.textContent = "Our Current Menu";

    // creating menu items
    const menuItems = [
        {name: "Seafood pasta", description: "with a bit of spice", price: "£18.50"},
        {name: "All the meat you can eat", description: "and some vegetables", price: "£15"},
        {name: "Marimo special", description: "rice and fish, less sugar content", price: "£20"},
        {name: "Mikan parfait", description: "citrusy and light", price: "£10"},
        {name: "Garden sandwiches", description: "fresh and floral", price: "£17.50"}
    ]

    const menuList = document.createElement("ul");
    menuList.style.padding = "1rem";

    // appending items to menuItems (WITH BACKTICS)
    menuItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ${item.description} (${item.price})`;
        menuList.appendChild(listItem);
    });




    // adding created title and tagline to the content div
    content.appendChild(menu);
    content.appendChild(menuList);



}

export default loadMenu;