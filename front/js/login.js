


var emails1 = []
var senhas1 = []
var usu = []
var emails = []
var senhas = []
var usuarios = []
axios.get('http://localhost:3000/users').then(response => {
  usu = response.data
  console.log(usu)
  for (let i of usu){
    emails1.push(i.email)
    senhas1.push(i.password)
  }
    localStorage.setItem('list_emails', JSON.stringify(emails1))  
    localStorage.setItem('list_senhas', JSON.stringify(senhas1))
    localStorage.setItem('list_usuarios', JSON.stringify(usu))

  usuarios = JSON.parse(localStorage.getItem('list_usuarios')) || []
  emails = JSON.parse(localStorage.getItem('list_emails')) || []
  senhas = JSON.parse(localStorage.getItem('list_senhas')) || []
})

criarElemento('h1', '', 'Login', '', 'form')
criarElemento('br', '', '', '', 'form')
criarElemento('input', 'email', 'email', 'email', 'form')
criarElemento('br', '', '', '', 'form')
criarElemento('input', 'senha', 'senha', 'password', 'form')
criarElemento('br', '', '', '', 'form')
criarElemento('br', '', '', '', 'form')
criarElemento('button', 'button', 'Entrar', "login()", 'form')
criarElemento('br', '', '', '', 'form')
criarElemento('a', 'link', 'cadastre-se aqui', 'cadastrar.html', 'form')



  var vivacoins

function login(){
        
        var email = document.querySelector('input#email').value 
        
        var senha = document.querySelector('input#senha').value 
        
        if (emails.indexOf(email)!= -1){
          
            let i = emails.indexOf(email)
            if (senha == senhas[i]){
              
                entrar(i)
                function entrar(i){
                  
                    vivacoins = usuarios[i].vivacoins
                    //usuarios[i].ultimoAcesso = horario
                    console.log(vivacoins)
                    document.getElementById('email').remove()
                    document.getElementById('senha').remove()
                    document.getElementById('button').remove()
                    document.getElementById('link').remove()
                    criarElemento('h2','', `Bem vindo ${usuarios[i].name}`, '', 'form')
                    criarElemento('a', '', 'Clique aqui para ir a tela inicial!', 'index.html', 'form')
                    axios.get('http://localhost:3000/users').then(response =>{
                      var users = response.data
                      for (let a of users){
                        if (a.email === email){
                          
                          var user = a.id
                          localStorage.setItem('id_usuario', JSON.stringify(user))  
                          localStorage.setItem('usuario', JSON.stringify(a))  

                          console.log(user)                      
                        }
                      }
                    })

                }
                
                
            }else{
                alert('senha incorreta')
            }
        }else{
          console.log(emails, email)
            alert('Esse email não está cadastrado')
            
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