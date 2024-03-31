const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addBtn = document.querySelector('.add-btn')

addBtn.addEventListener("click", addTodo);

function addTodo(event){
  event.preventDefault();
  if(inputBox.value === ''){
          alert("You must write something");
  }
  else{
          const todoDiv = document.createElement('div');
          todoDiv.classList.add('todo');
          // create li
          const newTodo = document.createElement("li");
          newTodo.innerText = inputBox.value;
          newTodo.classList.add('todo-item');
          todoDiv.appendChild(newTodo);
           //trash mark button
           const trashButton = document.createElement("button");
           trashButton.innerHTML = '<i class="ri-close-fill"></i>';
           trashButton.classList.add("trash-btn");
           todoDiv.appendChild(trashButton)
           //append to list
           listContainer.appendChild(todoDiv);
           //clear todo input value\
           trashButton.addEventListener('click', function(){
                newTodo.parentElement.remove();
           })
          
          newTodo.addEventListener("click", function(){
                    newTodo.classList.toggle("completed");
                    newTodo.classList.toggle('checked');
          })
          
  }

}