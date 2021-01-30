const firstH1 = document.querySelector("h1");
const myList = document.querySelector("ul");
const myButton = myList.querySelector("button");
// const myButton = document.querySelector("button");
// const myButton = document.querySelector("ul button");

// firstH1.querySelector("span")
firstH1.innerText = "Howdy world";

// click on button  ☑️
// i want to calculate exact moment at which button was clicked ☑️
// i want to display that information on the page (and not just on the console)
// i need to add an li to be inside the ul
// create dynamically an li ☑️
// add that li to the ul ☑️

myButton.addEventListener("click", function () {
  const d = new Date();
  const today = d.toLocaleString();

  const newLi = document.createElement("li");
  newLi.innerText = today;
  myList.appendChild(newLi);
});

// list of all my tasks

// input ☑️
// we write text on input ☑  ️
// we click a button
// the input gets cleared, and the task gets added to the html

const todoInput = document.getElementById("todo-input");
// const todoInput = document.querySelector("#todo-input")
const todoBtn = document.getElementById("todo-btn");
const todoList = document.querySelector("#todo");

todoBtn.addEventListener("click", function () {
  const newLi = document.createElement("li");
  newLi.innerText = todoInput.value;
  todoList.appendChild(newLi);
  todoInput.value = "";
});
