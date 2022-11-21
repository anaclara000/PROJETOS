var users = [
    {
      "usuario": "admin",
      "senha": "admin"
    },
]
var achou = false
function logar() {
  users.forEach(item => {
    
    var user = document.querySelector("#username").value
    var senha = document.querySelector("#password").value

    let valUser = item.usuario
    let valSenha = item.senha

    if(user == valUser && senha == valSenha) {
      window.location.href = "../../home/index.html"
      achou = true
       
    }
    
  }) 
  if(achou == false) {
    var text = document.querySelector("#resposta").innerHTML = "Senha ou usuário inválido";
  }
}