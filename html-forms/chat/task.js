const widget = document.querySelector('.chat-widget');
const input = widget.querySelector('.chat-widget__input');
const messages = document.getElementById('chat-widget__messages');
const container = widget.querySelector('.chat-widget__messages-container');
const messagesList = ['Добрый день!', 'Чем могу вам помочь?', 'Остались ли у вас вопросы?', 'Как я к вам могу обращаться?', 'Все операторы в данный момент заняты. Спасибо за понимание!', 'Я перешлю ваш вопрос специалисту. Он вам ответит, когда освободится!', 'Спасибо за обращение!'];

widget.addEventListener('click', () => {
    widget.classList.add('chat-widget_active');
});

document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
        widget.classList.remove('chat-widget_active');
    }
});

function addMsg() {
    document.addEventListener('keyup', (evt) => {
        if (evt.code === 'Enter' && input.value !== '') {
                messages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">
                        ${new Date().toLocaleTimeString()}
                    </div>
                    <div class="message__text">
                    ${input.value}
                    </div>
                </div>
            `;

            input.value = '';

            messages.innerHTML += `
                <div class="message">
                    <div class="message__time">
                        ${new Date().toLocaleTimeString()}
                    </div>
                    <div class="message__text">
                        ${messagesList[Math.floor(Math.random() * messagesList.length)]}
                    </div>
                </div>
            `;
            container.scrollTo(0, container.scrollHeight);
        }
    });
}

addMsg();

let timer = setTimeout(() => {
    if (widget.classList.contains('chat-widget_active') && !addMsg()) {
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">
                ${new Date().toLocaleTimeString()}
            </div>
            <div class="message__text">
                ${messagesList[Math.floor(Math.random() * messagesList.length)]}
            </div>
        </div>
    `;
    } else {
        clearTimeout(timer);
    }
}, 10000);