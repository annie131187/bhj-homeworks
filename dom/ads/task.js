const rotator = document.querySelector('.rotator');
const rotators = Array.from(document.querySelectorAll('.rotator__case'));
    
function rotate(item) {
    
    if (item.nextElementSibling !== null) {
        item.classList.remove('rotator__case_active');
        item.nextElementSibling.classList.add('rotator__case_active');
        item.nextElementSibling.style.color = item.nextElementSibling.dataset.color;
    } else {
        item.classList.remove('rotator__case_active');
        item = rotator.firstElementChild.classList.add('rotator__case_active');
    }
}

for (let i = 0; i < rotators.length; i++) {
    rotators[i].style.color = rotators[i].dataset.color;
    setInterval(rotate(rotators[i]), 2000);
}