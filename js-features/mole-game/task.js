const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = Array.from(document.querySelectorAll('.hole'));

holes.forEach(function(hole) {
    hole.addEventListener('click', () => {
        hole.classList.contains('hole_has-mole') ? 
        dead.textContent++ : lost.textContent++;
        if (dead.textContent == '10') {
            alert('Победа!');
            dead.textContent = '0';
            lost.textContent = '0';
        } else if (lost.textContent == '5') {
            alert('Вы проиграли!');
            dead.textContent = '0';
            lost.textContent = '0';
        }
    });
});
