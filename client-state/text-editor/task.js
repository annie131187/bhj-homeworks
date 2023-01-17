const editor = document.getElementById('editor');

if(localStorage.getItem('text')) {
    editor.value = localStorage.getItem('text');
} else {
    editor.addEventListener('input', () => {
        localStorage.setItem('text', editor.value);
    });
};

let resetButton = document.createElement('button');
resetButton.textContent = "Очистить содержимое";
document.querySelector('.card').append(resetButton);
resetButton.addEventListener('click', evt => {
    evt.preventDefault();
    editor.value = '';
    delete localStorage.text;
})

