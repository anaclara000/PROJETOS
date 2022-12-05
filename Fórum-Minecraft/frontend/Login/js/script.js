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
 
function logar(e) {
    var inpUser = document.querySelector('#user').value
    var inpSenha = document.querySelector('#senha').value 
    var id 
    var encontrado = false
    var usuarioEncontrado = false

    users.forEach(e => {

        if(inpUser == e.email && inpSenha == e.senha ) {
            encontrado = true
            id  = e.id_user;
            console.log(id)
        }
        else if(inpUser == e.nickname && inpSenha == e.senha) {
            usuarioEncontrado = true
            id  = e.id_user;
            console.log(id)


        }
        
    })

    if(encontrado == true) {
        localStorage.setItem("info", JSON.stringify({"email":inpUser, "senha":inpSenha, "id_user":id}));
        window.location.href = '../pages/Home/index.html'

    }if(usuarioEncontrado == true){
        localStorage.setItem("info", JSON.stringify({"nickname":inpUser, "senha":inpSenha, "id_user":id}));
        window.location.href = '../pages/Home/index.html'
    }
    else {
        var erro = document.querySelector('.erros')

        erro.classList.remove('modal')
        
    }
}

