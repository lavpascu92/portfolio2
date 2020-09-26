window.addEventListener('load', () => {
    // ANIMATE ON SCROLL INITIALIZATON
    AOS.init();
    // VARIABLES
    const burgerMenu = document.querySelector('#navbar-burger');
    const burgerMenuIcon = document.querySelector('#menu');
    const navbarLinksDivEl = document.querySelector("#navbar-links");
    const themeIconImgEl = document.querySelector('#theme-icon');
    const mainDivEl = document.querySelector('#main');
    let scrollUpBtn = document.querySelector('#scroll-up');
    const cards = document.querySelectorAll('.card');
    let isToggle = false;


    // FLIP ON CLICK ANIMATION ON EACH CARD
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flip-animation');
        });
    });
    // Show mobile/tablet menu on burger click
    burgerMenu.addEventListener('click', () => {
        // Show/hide menu on click
        navbarLinksDivEl.classList.toggle("d-flex");
        // Change menu icon from burger to close on click
        if (burgerMenuIcon.textContent === "menu") {
            burgerMenuIcon.textContent = "close";
        } else {
            burgerMenuIcon.textContent = "menu";
        }
    });

    // Change color scheme on moon/sun icon click
    themeIconImgEl.addEventListener('click', () => {
        mainDivEl.classList.toggle('dark-theme');
        document.body.classList.toggle('border-light');
        navbarLinksDivEl.classList.toggle('dark-theme');
        if (!isToggle) {
            themeIconImgEl.setAttribute('src', '../media/imgs/sun-icon.svg');
            burgerMenuIcon.style.color = "#fff";
            scrollUpBtn.style.color = "#fff";
        } else {
            themeIconImgEl.setAttribute('src', '../media/imgs/moon-icon.svg');
            burgerMenuIcon.style.color = "#1f2022";
            scrollUpBtn.style.color = '#1f2022';
        }
        isToggle = !isToggle;
    });

    // Display the scroll-up btn only after scrolling 100px
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollUpBtn.style.display = "inline";
        } else {
            scrollUpBtn.style.display = "none";
        }
    };
    //Scroll up to top on click
    scrollUpBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

});