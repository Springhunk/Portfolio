const themesForm = document.getElementById("theme-form");

const nordButton = document.getElementById('nord')
const ayuButton = document.getElementById('ayu')
const palenightButton = document.getElementById('palenight')
const polarButton = document.getElementById('polar')

let nordStorage = localStorage.getItem("nord-theme")
let ayuStorage = localStorage.getItem("ayu-theme")
let palenightStorage = localStorage.getItem("palenight-theme")
let polarStorage = localStorage.getItem("polar-theme");
let currentTheme = localStorage.getItem("Theme");

let container = document.getElementById('container').classList;

class Themes {
    constructor(name) {
        this.name = name;
    }
    
    enable() {
        container.add(this.name);
        localStorage.setItem(this.name, "enabled");
    }

    disable() {
        container.remove(this.name);
        localStorage.setItem(this.name, null);
    }
}

const Nord = new Themes("nord-theme");
const Ayu = new Themes("ayu-theme");
const Palenight = new Themes("palenight-theme");
const Polar = new Themes("polar-theme");

nordButton.addEventListener("click", () => {
    nordStorage = localStorage.getItem("nord-theme")
    if (nordStorage !== "enabled") {
        Nord.enable();
        Ayu.disable();
        Palenight.disable();
        Polar.disable();
        localStorage.setItem("Theme", "nord-theme");
    } else {
        Nord.disable();
    }
});

ayuButton.addEventListener("click", () => {
    ayuStorage = localStorage.getItem("ayu-theme")
    if (ayuStorage !== "enabled") {
        Ayu.enable();
        Nord.disable();
        Palenight.disable();
        Polar.disable();
        localStorage.setItem("Theme", "ayu-theme");
    } else {
        Ayu.disable();
    }
});

palenightButton.addEventListener("click", () => {
    palenightStorage = localStorage.getItem("palenight-theme")
    if (ayuStorage !== "enabled") {
        Palenight.enable();
        Nord.disable();
        Ayu.disable();
        Polar.disable();
        localStorage.setItem("Theme", "palenight-theme");
    } else {
        Palenight.disable();
    }
});

polarButton.addEventListener("click", () => {
    polarStorage = localStorage.getItem("polar-theme");
    if (polarStorage !== "enabled") {
        Polar.enable();
        Nord.disable();
        Ayu.disable();
        Palenight.disable();
        localStorage.setItem("Theme", "polar-theme");
    } else {
        Polar.disable();
    }
});

container.add(localStorage.getItem("Theme"));