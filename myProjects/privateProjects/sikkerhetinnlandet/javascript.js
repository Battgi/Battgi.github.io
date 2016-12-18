window.onload = function () {
    let contactForm = document.getElementById('contactForm');
    contactForm.setAttribute('action', 'https://www.formspree.io/' + 'joaoepe' + '@' + 'outlook' + '.' + 'com');
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
        scroll(0, 0);
        this.classList.toggle("is-active");
        sidenav.classList.toggle('sidenavOpen');
        brand.classList.toggle('removeBrand');
        noScroll.classList.toggle('overflow');
    });
};