function toggleMenu() {
    var menu = document.getElementById("topNav");
    var icon = document.getElementById("menu-icon");
    var body = document.body;
    
    if (menu.style.display === "block") {
        // menu.style.display = "none";
        icon.classList.remove("fa-xmark"); // Change icon back to menu (☰)
        icon.classList.add("fa-bars");
        body.classList.remove("menu-open"); // Allow body scroll
    } else {
        menu.style.display = "block";
        icon.classList.remove("fa-bars"); // Change icon to X (✖)
        icon.classList.add("fa-xmark");
        body.classList.add("menu-open"); // Prevent body scroll when menu is open
    }
}
