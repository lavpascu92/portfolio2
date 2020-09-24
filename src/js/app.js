window.addEventListener('load', () => {
    // ANIMATE ON SCROLL INITIALIZATON
    AOS.init();
    // VARIABLES
    const burgerMenu = document.querySelector('#navbar-burger');
    const burgerMenuIcon = document.querySelector('#menu');
    const navbarLinksDivEl = document.querySelector("#navbar-links");
    const themeIconImgEl = document.querySelector('#theme-icon');
    const mainDivEl = document.querySelector('#main');
    const logoImgEl = document.querySelector('#logo');
    const mainImgEl = document.querySelector('#main-img');
    let scrollUpBtn = document.querySelector('#scroll-up');
    const laptopImg = document.querySelector('#laptop-img');
    let isToggle = false;

    // Don't show  laptop-img on mobile/tablet
    laptopImg.style.display = "none";

    // EVENT LISTENERS

    // Display img only on laptop
    window.addEventListener("resize", () => {
        let width = window.innerWidth;
        if (width > 1200) {
            laptopImg.style.display = "block";
        } else {
            laptopImg.style.display = "none";
        }
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
            themeIconImgEl.setAttribute('src', './src/media/imgs/sun-icon.svg');
            mainImgEl.setAttribute('src', './src/media/imgs/hand-spark-black.gif');
            burgerMenuIcon.style.color = "#fff";
            scrollUpBtn.style.color = "#fff";
            laptopImg.setAttribute('src', './src/media/imgs/plug-in-dark.jpg');
        } else {
            themeIconImgEl.setAttribute('src', './src/media/imgs/moon-icon.svg');
            mainImgEl.setAttribute('src', './src/media/imgs/cropped-hand.gif');
            burgerMenuIcon.style.color = "#1f2022";
            scrollUpBtn.style.color = '#1f2022';
            laptopImg.setAttribute('src', './src/media/imgs/split-mind-phone.gif');
        }
        isToggle = !isToggle;
    });

    // SCROLL UP TO TOP ON CLICK
    // window.onscroll = () => {
    //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //         scrollUpBtn.style.display = "block";
    //     } else {
    //         scrollUpBtn.sytle.display = "none";
    //     }
    // }; // gives undefined error

    scrollUpBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });


});