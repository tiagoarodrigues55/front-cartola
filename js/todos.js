var usuario = JSON.parse(localStorage.getItem('usuario'))


var listElement = document.querySelector('#app ul')


var buttonElement = document.querySelector('#app button')


var Ottomanos = JSON.parse(localStorage.getItem('object_Ottomanos')) || {}
var jogador = JSON.parse(localStorage.getItem('object_Jogadores')) || {}

var NovoTime = JSON.parse(localStorage.getItem('object_NovoTime')) || {}
var todos = JSON.parse(localStorage.getItem('list_nomesjog')) || []
var pre = JSON.parse(localStorage.getItem('list_preço')) || []
var ids = JSON.parse(localStorage.getItem('list_id')) || []
var usuarios = JSON.parse(localStorage.getItem('list_usuarios')) || []
var emails = JSON.parse(localStorage.getItem('list_emails')) || []
var senhas = JSON.parse(localStorage.getItem('list_senhas')) || []
var dataConfronto = JSON.parse(localStorage.getItem('list_confrontos')) || []
var now = new Date

var rodada
for (let i of dataConfronto){
if (now.getDate() === i.getdate && now.getMonth() === i.getmonth){
  rodada = i.id
  }else{
    console.log(now.getDate, now.getMonth)
  }
}
//Confrontos
var time1 = [Ottomanos]
var time2 = [NovoTime]
for (var i=0; i < 10; i++){
  time1.push(Ottomanos)
  time2.push(NovoTime)
}
var a = [];
var img = [];
var jogadores = [];
var preço = [];
var id = [];
console.log(rodada)
escolherConfronto(rodada)



criarElemento('p', '', `Qual vai ser o elenco do ${usuario.nometime}? Você tem ${usuario.vivacoins}V$`, '', 'informações do usuário')



function renderTodos() {
    listElement.innerHTML =  ''
    for (let todo of todos) {
        var todoElement = document.createElement('li')
        todoElement.setAttribute('class', 'time')
        var todoText = document.createTextNode(todo)
        todoElement.appendChild(todoText)
        listElement.appendChild(todoElement)
    }
     var timeprov = 0
        for (var pos in pre) {
            timeprov += pre[pos]
        }
    res.innerHTML = `O preço do seu time é: ${timeprov.toFixed(2)}V$`
    
}
renderTodos()




                                                                                                                                                                                                                                                               


function escolherConfronto(rodada) {

  var nomeDoTime1 = time1[rodada-1]
  var nomeDoTime2 = time2[rodada-1]
  console.log(nomeDoTime1)
  console.log(nomeDoTime2)
  a = nomeDoTime1.img;
  a = nomeDoTime2.img.map(function (item) {
    return a.push(item);
  });
  img = nomeDoTime1.img;


  a = nomeDoTime1.jogadores;
  a = nomeDoTime2.jogadores.map(function (item) {
    return a.push(item);
  });

  jogadores = nomeDoTime1.jogadores;

  a = nomeDoTime1.preço;
  a = nomeDoTime2.preço.map(function (item) {
    return a.push(item);
  });

  preço = nomeDoTime1.preço;

  a = nomeDoTime1.nomes;
  a = nomeDoTime2.nomes.map(function (item) {
    return a.push(item);
  });

  id = nomeDoTime1.nomes;
  console.log(id)
  criarPg(id)

}



function addTodo(x) {
    var n = x-1
    var a = jogadores[n]
    var b = Number(preço[n].toFixed(2))
    var c = id[n].id
    var todoText = a
    var todoText2 = b
    pre.push(todoText2)
    todos.push(todoText)
    ids.push(c)
    mudarLayout(n+1)
    renderTodos()
    saveToStorage()
}



function deleteTodo(x) {
    var n = x-1
    var pos = todos.indexOf(`${jogadores[n]}`)
    todos.splice(pos, 1)
    pre.splice(pos, 1)
    ids.splice(pos, 1)
    mudarLayout2(n+1)
    renderTodos()
    saveToStorage()
}


function saveToStorage() {
    localStorage.setItem('list_nomesjog', JSON.stringify(todos))
    localStorage.setItem('list_id', JSON.stringify(ids))
    localStorage.setItem('list_preço', JSON.stringify(pre))
    localStorage.setItem('object_Ottomanos', JSON.stringify(Ottomanos))
   // localStorage.setItem('nome', JSON.stringify(nomes))
}

var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't']
function mudarLayout(n){
    document.querySelector(`#botão${n}`).remove()
    var newbutton = document.createElement('button')
    newbutton.setAttribute('id', `botão${n}`)
    newbutton.setAttribute('class', 'vender')
    newbutton.setAttribute('onclick', 'deleteTodo(' + n + ')')
    var textNewbutton = document.createTextNode('vender')
    newbutton.appendChild(textNewbutton)
    var div = document.querySelector(`#div${n}`)
    div.appendChild(newbutton)
    
    console.log(`o parametro de mudar layout 1 é ${n}`)
}
function mudarLayout2(n) {
    document.querySelector(`#botão${n}`).remove()
    var newbutton = document.createElement('button')
    newbutton.setAttribute('id', `botão${n}`)
    newbutton.setAttribute('class', 'comprar')
    newbutton.setAttribute('onclick', 'addTodo(' + n + ')')
    var textNewbutton = document.createTextNode(`${preço[n-1].toFixed(2)}V$`)
    newbutton.appendChild(textNewbutton)
    var div = document.querySelector(`#div${n}`)
    div.appendChild(newbutton)
    
}

function lerMais(n){
  console.log(jogador)
    document.querySelector(`#lerMais${n}`).remove()
    criarElemento('button', `lerMenos${n}`, 'Menos informações', `lerMenos(${n})`, `div${n}b`)
    document.getElementById(`lerMenos${n}`).setAttribute('class', 'ler')
    criarElemento('div', `div${n}c`, '', '', `div${n}b`)
    criarElemento('p', '', `Media: ${jogador[n-1].media.toFixed(2)}`, '', `div${n}c`)
    criarElemento('p', '', `Ultima pontuação: ${jogador[n-1].ultimapontuação.toFixed(2)}`, '', `div${n}c`)
   
    if(jogador[n-1].valorização > 0){
      criarElemento('p', '', `Valorização: ${jogador[n-1].valorização.toFixed(2)}`, 'color: green;', `div${n}c`)
    }
    else{
      if (jogador[n-1].valorização === 0){
        criarElemento('p', '', `Valorização: ${jogador[n-1].valorização.toFixed(2)}`, '', `div${n}c`)
        }else{
      criarElemento('p', '', `Valorização: ${jogador[n-1].valorização.toFixed(2)}`, 'color: red;', `div${n}c`)
        }
    }
}
function lerMenos(n){
document.querySelector(`#div${n}c`).remove()
document.querySelector(`#lerMenos${n}`).remove()
criarElemento('button', `lerMais${n}`, 'Mais informações', `lerMais(${n})`, `div${n}b`)
document.getElementById(`lerMais${n}`).setAttribute('class', 'ler')
}


//fechar time
function verificar(){
    var timeprov = 0
        for (var pos in pre) {
            timeprov += pre[pos]
        }
    var divfechar = document.querySelector('div#fechar')
    if (todos.length == 5){
        if (timeprov<usuario.vivacoins){
            var linkFechar = document.createElement('a')
            var linkText = document.createTextNode('Fechar time')
            linkFechar.setAttribute('href', 'fecharTime.html')
            linkFechar.appendChild(linkText)
            divfechar.appendChild(linkFechar)

        }else{
            alert('Seu time está muito caro')
        }
    }else{
        alert('Seu time precisa ter 5 jogadores!')
    }
}


var jog = []
/*axios.get('http://localhost:3000/jogadores')
.then(response => {
    jog = response.data
    criarPg(jog)
})
.catch(error => console.log(error))*/
function criarPg(jog){
for (i of jog){
    criarElemento('section', `section${i.id}`, '', '', 'jogadores')
    document.getElementById(`section${i.id}`).setAttribute('class', 'alinhado')
    criarElemento('div', `div${i.id}`, '', '', `section${i.id}`)
    criarElemento('div', `div${i.id}b`, '', '', `section${i.id}`)
    criarElemento('p', '', `${i.name}`, '', `div${i.id}`)
    criarElemento('img', '', `${i.img}`, 'width: 70px; height: 90px;', `div${i.id}`)
    if (ids.indexOf(i.id)!= -1){
        criarElemento('button', `botão${i.id}`, 'vender', `deleteTodo(${i.id})`, `div${i.id}`)
        document.getElementById(`botão${i.id}`).setAttribute('class', 'vender')
    }else{
        criarElemento('button', `botão${i.id}`, `${i.preço.toFixed(2)}V$`, `addTodo(${i.id})`, `div${i.id}`)
        document.getElementById(`botão${i.id}`).setAttribute('class', 'comprar')
    }
    criarElemento('br', '', '', '', `div${i.id}b`)
    criarElemento('button', `lerMais${i.id}`, 'Mais informações', `lerMais(${i.id})`, `div${i.id}b`)
    document.getElementById(`lerMais${i.id}`).setAttribute('class', 'ler')
    criarElemento('br', '', '', '', `jogadores`)
}
}




function criarElemento(elemento, id, txt, função, endereçoId){
    if (elemento === 'button'){
      let endereço = document.getElementById(endereçoId)
      let nome = document.createElement(elemento)
      nome.appendChild(document.createTextNode(txt))
      nome.setAttribute('id', id)
      nome.setAttribute('onclick', função)
      endereço.appendChild(nome)
    }else{
      if (elemento === 'input'){
        let endereço = document.getElementById(endereçoId)
        let nome = document.createElement(elemento)
        nome.setAttribute('placeholder', txt)
        nome.setAttribute('id', id)
        nome.setAttribute('type', função)
        endereço.appendChild(nome)
        
      }else{
        if (elemento === 'a'){
          let endereço = document.getElementById(endereçoId)
          let nome = document.createElement(elemento)
          nome.setAttribute('href', função)
          nome.setAttribute('id', id)
          nome.appendChild(document.createTextNode(txt))
          endereço.appendChild(nome)
        }else{
          if(elemento === 'img'){
            let endereço = document.getElementById(endereçoId)
            let nome = document.createElement(elemento)
            nome.setAttribute('src', `img/${txt}`)
            nome.setAttribute('style', função)
            nome.setAttribute('id', id)
            nome.appendChild(document.createTextNode(txt))
            endereço.appendChild(nome)
          }else{
            let endereço = document.getElementById(endereçoId)
            let nome = document.createElement(elemento)
            nome.appendChild(document.createTextNode(txt))
            nome.setAttribute('id', id)
            nome.setAttribute('style', função)
            endereço.appendChild(nome)
          }
        }
      }
    }
}