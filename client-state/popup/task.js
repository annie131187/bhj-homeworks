const modal = document.getElementById('subscribe-modal');
const closeItem = document.querySelector('.modal__close');

modal.classList.add('modal_active');

if (document.cookie.indexOf('modalClose') == 0) {
    modal.classList.remove('modal_active');
} else {
    closeItem.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        document.cookie = 'modalClose=true';
    });
}
