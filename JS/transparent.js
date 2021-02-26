const nav = document.querySelector("nav");

const temp_nav = nav.style.backgroundColor;

window.addEventListener("scroll", function() {
    if (nav.getBoundingClientRect().top + document.documentElement.scrollTop > 1220) {
        nav.style.backgroundColor = temp_nav;
        nav.style.transition = "all 0.4s ease";
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.border = 0;
    }
    // console.log(nav.getBoundingClientRect().top + document.documentElement.scrollTop);
})

