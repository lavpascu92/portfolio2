window.addEventListener('load', () => {
    // VARIABLES
    const themeIconImgEl = document.querySelector('#theme-icon');
    const mainDivEl = document.querySelector('#main');
    const socialsDivEl = document.querySelector('#copyright-socials');
    let isToggle = false;


    // Change color scheme on moon/sun icon click
    themeIconImgEl.addEventListener('click', () => {
        mainDivEl.classList.toggle('dark-theme');
        document.body.classList.toggle('border-light');
        socialsDivEl.classList.toggle('dark-theme');
        if (!isToggle) {
            themeIconImgEl.setAttribute('src', '../media/imgs/sun-icon.svg');
        } else {
            themeIconImgEl.setAttribute('src', '../media/imgs/moon-icon.svg');
        }
        isToggle = !isToggle;
    });


});