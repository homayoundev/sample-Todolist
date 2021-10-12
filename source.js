// Selectors
const todoBtn = document.querySelector(".add-todo-btn");
const inputBtn = document.querySelector(".input-todo");
const listOFtodos = document.querySelector(".todos");
// Listeners
todoBtn.addEventListener("click", addTodo);

//Logic

let todos = [];

function addTodo(e) {
  e.preventDefault();
  // Is input empty?
  let isEmpty = inputBtn.value.split("")[0] == " ";

  if (inputBtn.value !== "" && inputBtn.value.length >= 3 && !isEmpty) {
    // Create main dev
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create todo element
    let todoText = document.createElement("h3");
    todoText.innerText = inputBtn.value;
    todoText.classList.add("todoText");
    todoDiv.appendChild(todoText);
    listOFtodos.appendChild(todoDiv);

    // Create todo delete button
    let todoDeleteBtn = document.createElement("button");
    todoDeleteBtn.classList.add("delete-btn");
    todoDeleteBtn.innerHTML = '<i class="fa fa-trash fa-1x"></i>';
    todoDeleteBtn.addEventListener("click", deleteTodo);
    todoDiv.appendChild(todoDeleteBtn);

    // Create todo completed button
    let todoCompletedBtn = document.createElement("button");
    todoCompletedBtn.classList.add("completed-btn");
    todoCompletedBtn.innerHTML = '<i class="fa fa-check fa-1x"></i>';
    todoCompletedBtn.addEventListener("click", completedTodo);
    todoDiv.appendChild(todoCompletedBtn);
  }

  inputBtn.value = "";
}

const deleteTodo = (e) => {
  let todo = e.target;
  todo.parentElement.remove();
};

const completedTodo = (e) => {
  let btn = e.target;
  btn.parentElement.classList.toggle("completed");
};
