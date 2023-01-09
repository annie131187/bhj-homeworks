const tasksList = document.querySelector('.tasks__list');
const tasksForm = document.getElementById('tasks__form');
const input = tasksForm.querySelector('.tasks__input');

tasksForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (input.value.trim() == '') {
        input.value = '';
        return;
    } else {
        tasksList.insertAdjacentHTML("afterbegin", `
            <div class="task">
                <div class="task__title">
                ${input.value.trim()}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);
        input.value = '';
    }
    
    let current_tasks = document.querySelectorAll('.task__remove');
    for (let i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.remove(); 
        }
    }
});
