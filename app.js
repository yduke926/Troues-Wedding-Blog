
const navSlide = () => {
    const burger = document.querySelector('.burger');
    // const burgerClose = document.querySelector('.burger-close')
    const nav = document.querySelector('.nav-links-left');
    const navLinks = document.querySelectorAll('.nav-links-left li')

    
    burger.addEventListener('click', () => {
        //TOGGLE NAV
        nav.classList.toggle('nav-active');

        //ANIMATE LINKS 
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.6 }s`;    
            }   
        });

        burger.classList.toggle('close');
    });
    
}


navSlide();