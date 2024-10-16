const taskInput = document.getElementById("task");
console.log(taskInput);

const aggiungi = document.getElementById("aggiungi");
console.log(aggiungi);

const ul = document.getElementById("lista");

let itemCount = 0;
aggiungi.onclick = function (event) {
  event.preventDefault();
  console.log("Hai aggiunto la task");

  const li = document.createElement("li");
  li.innerText = taskInput.value;
  ul.appendChild(li);
  taskInput.value = " ";
};
taskInput.onsubmit = aggiungi.onclick;

li.onclick = function () {};
