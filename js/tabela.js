 

import Lib from './lib.mjs'

  console.log()
       
        var jogadores = []
        var rodada = 1  //MUDAR ISSO!!!!!!
        var usu = []
        window.banco = function banco(){
        axios.get('https://cartola-back.herokuapp.com/users').then(response => {
        usu = response.data
        axios.get(`https://cartola-back.herokuapp.com/users/${rodada}/escalacaoR`).then(response => {
        var escalados = response.data
        axios.get('https://cartola-back.herokuapp.com/jogadores').then(response => {
        jogadores = response.data
        Lib.tabelaRodada(jogadores, escalados, usu)
        })
        })
        })
    }
    window.bancoGeral = function bancoGeral(){
            axios.get('https://cartola-back.herokuapp.com/users').then(response => {
            usu = response.data
            Lib.tabelaGeral(usu)
            })
    }
    window.bancoJogadores = function bancoJogadores() {
        axios.get('https://cartola-back.herokuapp.com/jogadores').then(response => {
            jogadores = response.data
            Lib.tabelaJogadores(jogadores)
            })
    }
    banco()
      window.tabelaRodada = function tabelaRodada(jogadores, escalados, usu){
          Lib.tabelaRodada(jogadores, escalados, usu)
      }
      window.tabelaGeral = function tabelaGeral(usu){
        Lib.tabelaGeral(usu)
    }
    window.tabelaJogadores = function tabelaJogadores(jogadores){
        Lib.tabelaJogadores(jogadores)
    }
       window.criarElemento = function criarElemento(elemento, id, txt, função, endereçoId){
            Lib.criarElemento(elemento, id, txt, função, endereçoId)
       }
  
    
        var timesEscalados = [jogadores]
        var trs = []
        var tds = []
        var soma = []
        function generateTableHead(table, data) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            for (let key of data) {
                let th = document.createElement("th");
                let text = document.createTextNode(key);
                th.appendChild(text);
                row.appendChild(th);
            }
        }
        function generateTable(table, data) {
            for (let element of data) {
                let row = table.insertRow();
                for ( let key in element) {
                    let cell = row.insertCell();
                    let text = document.createTextNode(element[key]);
                    cell.appendChild(text);
                }
            }
        }
        function tabelas(tabela){
        let table = document.querySelector("table");
        let data = Object.keys(tabela[0]);
        generateTableHead(table, data);
        generateTable(table, tabela);
        var caption = document.querySelector('caption')
        }
    