// Sample initial tasks for demonstration
let tasks = [];

document.addEventListener('DOMContentLoaded', displayTasks);

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" id="task${task.id}" ${task.completed ? 'checked' : ''}>
            <label for="task${task.id}" ${task.completed ? 'style="text-decoration: line-through;"' : ''}>${task.text}</label>
            <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = {
        id: tasks.length + 1,
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';
    displayTasks();
}

function editTask(taskId) {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    const newText = prompt('Edit task:', taskToUpdate.text);

    if (newText !== null) {
        taskToUpdate.text = newText.trim();
        displayTasks();
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks();
}
