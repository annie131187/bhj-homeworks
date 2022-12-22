const blocks = document.querySelectorAll('.reveal');

const isVisible = function (elem) {
    const { top, bottom } = elem.getBoundingClientRect();
    if (bottom < 0) {
        return false;
    }
    if (top > window.innerHeight) {
        return false;
    }
    return true;  
}

const showVisible = function () {
    for (let block of blocks) {
        if (isVisible(block)) {
            block.classList.add('reveal_active');
        }
    }
};

showVisible();
window.onscroll = showVisible;