const inputBox = document.querySelector("#input-value");
const todoList = document.querySelector(".todo-lists");


function addTodo() {
    if(inputBox.value === ''){
        alert("Todo Is Empty...")
    }else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        todoList.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTodo()
}

todoList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveTodo()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTodo()
    }
}, false)

function saveTodo(){
    localStorage.setItem("todo", todoList.innerHTML);
}

function showTodo(){
    todoList.innerHTML = localStorage.getItem("todo")
}
showTodo()