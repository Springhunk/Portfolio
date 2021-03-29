const menuIcon = document.querySelector(".hamburger-menu").classList;
const nav_items = document.querySelector(".nav-items").classList;
const openDropdown = document.querySelector(".dropdown-content").classList;

function openNav() {
    nav_items.toggle("nav-items-show");
    menuIcon.toggle("line-change");
}

function removeDropdown(x) {
    if (x.matches) {
        window.onclick = function(event) {
            if (event.target.matches(".hamburger-menu") || (event.target.matches(".nav_items")) || (event.target.matches("button"))
            || (event.target.matches("input")) || (event.target.matches("form")) || (event.target.matches("label"))) {

            }
            else if (!event.target.matches(".nav-items")) {
                if (nav_items.contains("nav-items-show")) {
                    nav_items.remove("nav-items-show");
                    if (openDropdown.contains("show")) {
                        openDropdown.remove("show");
                    }
                    if (menuIcon.contains("line-change")) {
                        menuIcon.remove("line-change");
                    }
                }
            }
        }
    }
}

let mediaQueryDropdown = window.matchMedia("screen and (max-width: 1280px)");
mediaQueryDropdown.addEventListener("change", removeDropdown(mediaQueryDropdown));