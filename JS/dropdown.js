function drop_theme() {
    document.getElementById("dropdown-theme").classList.toggle("show");
}

window.onclick = function(event) {
    if (event.target.matches('input') || event.target.matches("form") || event.target.matches("label")) {

    }
    else if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
