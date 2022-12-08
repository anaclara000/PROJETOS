// var uriUsuarios = 'http://localhost:3000/login'

// var users = []

// function ativar() {

//     const options = { method: 'POST' };

//     fetch(uriUsuarios, options)
//         .then(res => res.json())
//         .then(res => {
//             users = res;
//             logar();
            
//         }
//         )
       
//         .catch(err => console.error(err));
    
// }
const inpUser = document.querySelector('#user')
const inpSenha = document.querySelector('#senha')
var id 

function logar() {
   let data = {
    "nickname": inpUser.value,
    "email": inpUser.value,
    "senha": inpSenha.value
   }
   console.log(data)
   fetch("http://localhost:3000/login", {
    "method":"POST",
    "headers": {
        "Content-Type":"application/json"
    },
    "body": JSON.stringify(data)
})
.then(res => {return res.json()})
.then(data => {
    if(data.erro === undefined) {
        console.log(data)
        localStorage.setItem("info", JSON.stringify({"email":data.email, "nick": data.nickname, "id":data.id_user,}));

         window.location.href = '../pages/Home/index.html'
    }
})
}

//     if(encontrado == true) {
//         localStorage.setItem("info", JSON.stringify({"email":inpUser, "senha":inpSenha, "id_user":id}));
//         window.location.href = '../pages/Home/index.html'

//     }if(usuarioEncontrado == true){
//         localStorage.setItem("info", JSON.stringify({"nickname":inpUser, "senha":inpSenha, "id_user":id}));
//         window.location.href = '../pages/Home/index.html'
//     }
//     else {
//         var erro = document.querySelector('.erros')

//         erro.classList.remove('modal')
        
//     }
// }

