const rotators = document.querySelectorAll('.rotator__case');

function closeActive() {
    rotators.forEach(item => item.classList.remove('rotator__case_active'));
    console.log('delete class')
}

function activeCase(item) {
    item.classList.add('rotator__case_active');
    console.log('add class');
    item.style.color = item.dataset.color;
    console.log('change color');
}


function rotate() {
    rotators.forEach(item => {
        closeActive();
        setInterval(() => {
            activeCase(item);
        }, 2000);
    });
}

rotate();