
class Lib { 
  static  criarElemento(elemento, id, txt, função, endereçoId){
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
  }static soma(a, b){
    return a+b
  }static tabelaJogadores(jogadores){
    document.querySelector('table').remove()
    document.querySelector('#tabelas').appendChild(document.createElement('table'))
    var tabela3 = []
    var jog = jogadores.sort(function(a,b) {
    return a.ultimapontuação > b.ultimapontuação ? -1 : a.ultimapontuação < b.ultimapontuação ? 1 : 0
    })
    for (let i of jog){
        tabela3.push({
            nome: i.name,
            'ultima pontuação': i.ultimapontuação,
            preço: i.preço,
            valorização: i.valorização,
            media: i.media.toFixed(2),
        })
    }
    this.tabelas(tabela3)
}
static tabelaGeral(usu){
    document.querySelector('table').remove()
    document.querySelector('#tabelas').appendChild(document.createElement('table'))
    var tabela2 = []
    var usuarios = usu.sort(function(a,b) {
    return a.pontos > b.pontos ? -1 : a.pontos < b.pontos ? 1 : 0
    })
    var contador = 1
    for (let i of usuarios){
        tabela2.push({
            colocação: contador,
            'nome do time': i.nometime,
            pontuação: i.pontos,
            vivacoins: `${i.vivacoins}V$`
        })
        contador++
    }
    this.tabelas(tabela2)
}
static tabelaRodada(jogadores, escalados, usu){
    console.log(jogadores)
    document.querySelector('table').remove()
    document.querySelector('#tabelas').appendChild(document.createElement('table'))
    var tabela = []
    for (let i of escalados){
        for (let a of usu){
            if (i.user_id === a.id){
                var soma = a.ultimapontuação
                var nome = a.nometime
            }
        }
        tabela.push({
            'nome do time': nome,
            jogador1: jogadores[i.jogador1_id-1].name,
            jogador2: jogadores[i.jogador2_id-1].name,
            jogador3: jogadores[i.jogador3_id-1].name,
            jogador4: jogadores[i.jogador4_id-1].name,
            jogador5: jogadores[i.jogador5_id-1].name,
            pontuação: soma
        })
    }
    this.tabelas(tabela)
}
    
    static generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }
    static generateTable(table, data) {
        for (let element of data) {
            let row = table.insertRow();
            for ( let key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }
   static tabelas(tabela){
    let table = document.querySelector("table");
    let data = Object.keys(tabela[0]);
    this.generateTableHead(table, data);
    this.generateTable(table, tabela);
    var caption = document.querySelector('caption')
    }
}

export default Lib