const links = [...document.querySelectorAll('.menu__link')];


links.forEach(link => {
    link.addEventListener('click', (event) => {
        if (link.nextElementSibling) {
            event.preventDefault();
            link.nextElementSibling.classList.toggle('menu_active');
        }
    });
});