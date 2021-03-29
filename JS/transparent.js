const nav = document.querySelector(".nav-items");

const temp_nav = nav.style.backgroundColor;

function scrollEvent(x) {
    if (x.matches) {
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
    }
    else {}
}

let mediaQueryScroll = window.matchMedia("screen and (min-width: 1281px)");
mediaQueryScroll.addEventListener("change", scrollEvent(mediaQueryScroll));
