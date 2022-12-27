const rotator = document.querySelector('.rotator');
const rotators = Array.from(document.querySelectorAll('.rotator__case'));
let timeoutDelay = 0;

let timeoutId = setTimeout(function rotate() {
    item = rotators[rotators.findIndex(item => item.classList.contains('rotator__case_active'))];
    item.style.color = item.dataset.color;
    let delay = item.dataset.speed;
    timeoutDelay = delay;
    if (item.nextElementSibling !== null) {
        item.classList.remove('rotator__case_active');
        item.nextElementSibling.classList.add('rotator__case_active');
        item.nextElementSibling.style.color = item.nextElementSibling.dataset.color;
    } else {
        item.classList.remove('rotator__case_active');
        item = rotator.firstElementChild.classList.add('rotator__case_active');
    }
    timeoutId = setTimeout(rotate, timeoutDelay);
}, timeoutDelay);
