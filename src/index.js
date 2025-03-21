document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description").value;

    if (newTaskDescription) {
      const taskItem = document.createElement("li");
      taskItem.textContent = newTaskDescription;
      taskList.appendChild(taskItem);

      // Clear the input field after adding the task
      document.getElementById("new-task-description").value = "";
    }
  });
});


  