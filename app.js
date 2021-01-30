/* const firstH1 = document.querySelector("h1");
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
  newLi.classList.add("look-here");
  newLi.addEventListener("click", function (event) {
    event.target.classList.toggle("line");
  });
  newLi.innerText = todoInput.value;
  todoList.appendChild(newLi);

  todoInput.value = "";
});

// want to get element by id -> document.getElementById
// EVERYTHING ELSE -> querySelector || querySelectorAll (when i want a list)

const allLookHere = document.querySelectorAll(".look-here");
console.log("allLookHere:", allLookHere);

allLookHere.forEach(function (listItem) {
  // solution 1:
  //   listItem.addEventListener("click", function () {
  //     listItem.style.textDecoration = "line-through";
  //   });

  listItem.addEventListener("click", function (event) {
    //  console.log("event:", event.target.classList);
    event.target.classList.toggle("line");
  });
});
 */
