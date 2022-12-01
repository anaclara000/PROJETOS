var uriUsuarios = 'http://localhost:3000/Usuarios'

var users = []

function ativar() {

    const options = { method: 'GET' };

    fetch(uriUsuarios, options)
        .then(res => res.json())
        .then(res => {
            users = res;
            logar();
        }
        )
        .catch(err => console.error(err));
    
}

function logar() {
    var inpUser = document.querySelector('#user').value
    var inpSenha = document.querySelector('#senha').value 

    var encontrado = false
    var usuarioEncontrado = false

    console.log(users)

    users.forEach(e => {

        if(inpUser == e.email && inpSenha == e.senha ) {
            encontrado = true
        }
        else if(inpUser == e.nickname && inpSenha == e.senha) {
            usuarioEncontrado = true
            


        }
        
    })

    if(encontrado == true) {
        localStorage.setItem("info", JSON.stringify({"email":inpUser, "senha":inpSenha}));
        window.location.href = '../pages/Home/index.html'

    }if(usuarioEncontrado == true){
        localStorage.setItem("info", JSON.stringify({"nickname":inpUser, "senha":inpSenha}));
        window.location.href = '../pages/Home/index.html'
    }
    else {
        var erro = document.querySelector('.erros')

        erro.classList.remove('modal')
        
    }
}

