var listElement = document.querySelector("div.app ul")
var inputElement = document.querySelector("div.app input")
var btnElement = document.querySelector("div.app button")

console.log(listElement)



var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos ()
{
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElemento = document.createElement('li')
        var textTodo = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        var textlink = document.createTextNode("Excluir")

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')')

        linkElement.setAttribute('href', "#")

        linkElement.appendChild(textlink)
        todoElemento.appendChild(textTodo)
        todoElemento.appendChild(linkElement)
        listElement.appendChild(todoElemento)

    }
}

renderTodos()


function addTodo() {
    var novoTodo = inputElement.value;
    todos.push(novoTodo);
    inputElement.value = '';
    renderTodos()  
    salveStorage();
}

btnElement.onclick = function () {
    addTodo()
}


function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    salveStorage();
    
}

function salveStorage() {

    localStorage.setItem('list_todos', JSON.stringify(todos))
    
}



