//para requisitar o ajax devemos iniciar uma variável com new XMLHttpRequest()
//essa classe nos dará acesso a funcionalidade do AJAX para recuperamos informação de algum server
var xhr = new XMLHttpRequest();
//buscar/abrir a url dos dados
xhr.open('GET', 'https://api.github.com/users/dnsdigitaltech');
xhr.send(null);

//deixar o java scripta sempre on
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}