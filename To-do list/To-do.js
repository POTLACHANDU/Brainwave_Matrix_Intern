// Get the input field and button elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Add event listener to the add task button
addTaskButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  // Get the task text from the input field
  const taskText = taskInput.value.trim();

  // Check if the task text is not empty
  if (taskText !== '') {
    // Create a new task element
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
      <span class="task-text">${taskText}</span>
      <span class="createdAt">${new Date().toLocaleString()}</span>
      <button class="done-button">Done</button>
      <button class="delete-button">Delete</button>
    `;

    // Add the task element to the task list
    taskList.appendChild(taskElement);

    // Clear the input field
    taskInput.value = '';

    // Add event listeners to the task element
    taskElement.querySelector('.done-button').addEventListener('click', toggleTask);
    taskElement.querySelector('.delete-button').addEventListener('click', deleteTask);
  }
}

// Function to toggle the task completion
function toggleTask(event) {
  // Get the task element
  const taskElement = event.target.parentNode;

  // Toggle the completed class
  taskElement.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(event) {
  // Get the task element
  const taskElement = event.target.parentNode;

  // Remove the task element from the task list
  taskList.removeChild(taskElement);
}