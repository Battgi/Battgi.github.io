window.onload = function () {
    toggleMenuButton();
}

function toggleMenuButton() {
    "use strict";
    let toggle = document.querySelector(".menuButtonAnimation"),
        sidenav = document.getElementById('mySidenav'),
        brand = document.getElementsByClassName('brand')[0],
        noScroll = document.getElementsByClassName('noScroll')[0],
        introduction = document.getElementById('introduction');

    toggle.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("is-active");
        sidenav.classList.toggle('sidenavOpen');
        brand.classList.toggle('removeBrand');
        noScroll.classList.toggle('overflow');
        scroll(0, 0);
    });
};