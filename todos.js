var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//pegar os valores no storege e atualizar com este valores

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
/*var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade'
];*/

//redenrizar os todos em tela
function renderTodos() {
    //colocar como vazio o que estiver dentro do html para criar novos
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //link para excluir todos
        var linkElement = document.createElement('a');

        //peguar a posição(indice) do array com index of
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    //pegar o valo do imput
    var todoText = inputElement.value;
    //adicionar o todoText no array
    todos.push(todoText);
    //apagar o texto atual do imput
    inputElement.value = '';
    //chamar a função rendeTodos() novamente para redenrizar a lista de todos
    renderTodos();
    saveToStorage()
}

//add pelo clique do botão
buttonElement.onclick = addTodo;

//delete todo pela posição do vetor pos
function deleteTodo(pos) {
    //método splice remove uma qtd de itens do array baseado na sua posição
    todos.splice(pos, 1);
    //chmar o método todos novamente para redenrizar a lista novamente
    renderTodos();
    saveToStorage()
}

//salvar o Todo no storage
function saveToStorage() {
    //converter em JSON para alvar o todo no storage    
    localStorage.setItem('list_todos', JSON.stringify(todos)); //seta um valor no storage
}