let menuContent = document.getElementsByClassName('menuContent')[0];

window.onload = function () {
    menu();
    toggleBurgerButton();
    introductionSlider();
}

//functions

//toggle the menu
function menu() {
    'use strict';
    let showMenuButton = document.getElementById('showMenuButton');
    
    
    
    showMenuButton.addEventListener('click', function () {
        
        menuContent.classList.toggle('showMenu');
        
        for (let i = 0; i <= 195; i++) {
            setTimeout(function (x) {
                menuContent.style.height = x + 'px';
            }, i * 1, i);
        }
    });
    
}

//animation effect on burger menu
function toggleBurgerButton() {
    "use strict";
    let toggles = document.querySelectorAll(".menuButtonAnimation");
    for (let i = toggles.length - 1; i >= 0; i--) {
        let toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            menuContent.style.height = '0px';
            menuContent.style.transition = "all 1s"
            e.preventDefault();
            (this.classList.contains("is-active") === true) ?
            this.classList.remove("is-active"): this.classList.add("is-active");
        });
    }
};

//slides 

function introductionSlider() {
    let slides = document.querySelectorAll('#slides .slide'),
        currentSlide = 0,
        slideInterval = setInterval(nextSlide, 5000),
        currentPicNumber = document.getElementsByClassName('currentPicNumber')[0],
        prevButton = document.getElementsByClassName('prevButton')[0],
        nextButton = document.getElementsByClassName('nextButton')[0];



    function nextSlide() {
        slides[currentSlide].classList.remove('showing');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('showing');

    }

    function prevSlide() {
        if (currentSlide == 0) {
            currentSlide == 0;
        } else {
            slides[currentSlide].classList.remove('showing');
            currentSlide = (currentSlide - 1) % slides.length;
            slides[currentSlide].classList.add('showing');

        }
    }


    prevButton.addEventListener('click', function () {
        prevSlide();
    });
    nextButton.addEventListener('click', function () {
        nextSlide();
    });
}