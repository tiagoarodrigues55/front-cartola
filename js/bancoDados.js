var usuario = JSON.parse(localStorage.getItem('usuario'))
criarElemento('a', '', `${usuario.nometime}`, 'usuario.html', 'usu')


axios.get('https://cartola-back.herokuapp.com/jogadores')
.then(response => função(response.data))
.catch(error => console.log(error))

const função = ( Apoio ) => {
    console.log(Apoio)
    var Jogadores = Apoio.sort(function(a,b) {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
      })
console.log(Jogadores)
    var fotoOttomanos = []
var nomesOttomanos = []
var preçosOttomanos = []
var idOttomanos =  []
var fotoNovoTime = []
var nomesNovoTime = []
var preçosNovoTime = []
var idNovoTime =  []
    for (let i of Apoio){
        if (i.id <= 6){
            fotoOttomanos.push(i.img)
            nomesOttomanos.push(i.name)
            preçosOttomanos.push(i.preço)
            idOttomanos.push(i)
        }else{
            if (i.id<=12){
            fotoNovoTime.push(i.img)
            nomesNovoTime.push(i.name)
            preçosNovoTime.push(i.preço)
            idNovoTime.push(i)
        }
    }
    }
var Ottomanos = {
    nomesReais: nomesOttomanos,
    nomes: idOttomanos.sort(function(a,b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
        }),
    img: fotoOttomanos,
    jogadores: nomesOttomanos,
    preço: preçosOttomanos
}
var NovoTime = {
    nomesReais: nomesNovoTime,
    nomes: idNovoTime.sort(function(a,b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
        }),
        img: fotoNovoTime,
        jogadores: nomesNovoTime,
        preço: preçosNovoTime
}
var times = [Ottomanos, NovoTime]
var confrontos = []
axios.get('https://cartola-back.herokuapp.com/confronto')
.then(response => {
    confrontos = response.data
    localStorage.setItem('list_confrontos', JSON.stringify(confrontos))
    console.log(confrontos)
})
.catch(error => console.log(error))


console.log(Ottomanos)
localStorage.setItem('object_Jogadores', JSON.stringify(Jogadores))
localStorage.setItem('object_Ottomanos', JSON.stringify(Ottomanos))
localStorage.setItem('object_NovoTime', JSON.stringify(NovoTime))
localStorage.setItem('list_times', JSON.stringify(times))
}




//var Bl31 = JSON.parse(localStorage.getItem('propaganda_Bl31')) || []
//const propagandas = [{fotoEmpresa: 'bl3.webp', nome: 'Bl31', foto1: 'bl3.webp', foto2: 'bl32.webp', width1: 400, height1: 400, width2: 500, height2: 400, txt1: 'Aulas de windsurf', txt2: 'Aulas de kitesurf', dados: Bl31, porcentagem: porcentagem.Bl31}]

var porcentagem = JSON.parse(localStorage.getItem('propaganda_porcentagens')) || {}

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