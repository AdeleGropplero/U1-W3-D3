const taskInput = document.getElementById("task");
console.log(taskInput);

const aggiungi = document.getElementById("aggiungi");
console.log(aggiungi);

const ul = document.getElementById("lista");

aggiungi.onclick = function (event) {
  event.preventDefault();

  console.log("Hai aggiunto la task");

  const li = document.createElement("li");
  li.innerText = taskInput.value;
  ul.appendChild(li);
  taskInput.value = "";

  li.addEventListener("click", function () {
    li.classList.toggle("completato");
  });

  const span = document.createElement("span");
  span.style.margin = "1rem";
  li.appendChild(span);

  const deleteButton = document.createElement("button");
  li.appendChild(deleteButton);

  deleteButton.classList.add("delete");
  deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  /*   const deleteAll = document.createElement("button");
  ul.appendChild(deleteAll);

  deleteAll.classList.add("delete");
  deleteAll.innerHTML = 'Cancella tutto <i class="far fa-trash-alt"></i>';
  deleteAll.addEventListener("click", function () {
    ul.li.remove();
    
  }{once: true });*/
};
//taskInput.onsubmit = aggiungi.onclick;

/* 

const deleteButton = document.createElement("button");
li.appendChild(deleteButton);
deleteButton.classList.add("delete");
deleteButton.innerText = "X";
console.log(deleteButton);

deleteButton.addEventListener("click", function () {
  li.remove();
});
*/
