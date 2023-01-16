const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/poll';

xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {
    let pollItems = xhr.response.data;
    title.textContent = pollItems.title;
    let pollAnswers = pollItems.answers;
    pollAnswers.forEach(item => {
        answers.insertAdjacentHTML('beforeend', `
            <button class="poll__answer">
                ${item}
            </button>
        `);
    });
    
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', (evt) => {
            evt.preventDefault();
            alert('Спасибо, ваш голос засчитан!');
        });
    });
});

