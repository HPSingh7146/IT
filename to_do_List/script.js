document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add');
    const newTaskInput = document.getElementById('newtask');
    const tasksList = document.getElementById('tasks-list');

    //Function to add a new task
    function createTaskElement (tasktext) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = tasktext;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        li.appendChild(span);
        li.appendChild(deleteButton);
        tasksList.appendChild(li);
    }

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value;
        if (taskText) {
            createTaskElement(taskText);
            newTaskInput.value = '';
        }
    })

    tasksList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete')) {
            event.target.parentNode.remove();
        }
    })

    
})