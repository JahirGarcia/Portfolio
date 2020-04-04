(function() {
    var navbarWrapper = document.getElementById("NavbarWrapper");

    var buttonShow = document.getElementById("NavbarButtonShow");
    buttonShow.addEventListener("click", function (e) {
        if(navbarWrapper.classList.contains("navbar--hide")) {
            navbarWrapper.classList.remove("navbar--hide");
            navbarWrapper.classList.add("navbar--show");
        }
    }, false);

    var buttonHide = document.getElementById("NavbarButtonHide");
    buttonHide.addEventListener("click", function (e) {
        if(navbarWrapper.classList.contains("navbar--show")) {
            navbarWrapper.classList.remove("navbar--show");
            navbarWrapper.classList.add("navbar--hide");
        }
    }, false);

    var mediaQueries = window.matchMedia("(min-width: 768px)");
    mediaQueries.addListener(function(e) {
        var heroImg = document.getElementById("HeroIMG");
        if(e.matches) {
            heroImg.setAttribute("src", "./img/hero_md.svg");
        } else {
            heroImg.setAttribute("src", "./img/hero_sm.svg");
        }
    });
})();
