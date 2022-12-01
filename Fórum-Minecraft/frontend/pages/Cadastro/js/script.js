
function cad() {
    let inptNome = document.querySelector("#nome").value;
    let inptNick = document.querySelector("#nick").value;
    let inptEmail = document.querySelector("#email").value;
    let inptSenha = document.querySelector("#senha").value;

    if(inptNome == "" || inptNick == "" || inptEmail == "" || inptSenha == ""){
        alert("errado")
    }else{
        let options = JSON.stringify({
            "nome_user": inptNome,
            "nickname": inptNick,
            "email": inptEmail,
            "senha": inptSenha,
            "status_user": "usuario"
        })

        fetch("http://localhost:3000/Usuarios", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": options
        })
            .then(res => {
                if(res.status == 201){
                    var modalCerto = document.querySelector('.modal-certo')
                    modalCerto.classList.remove('model')
                    console.log("aaaaaaaaaaaaaaaa")
                }
            })
    }
    
        // .then(resp => {
        //     if(resp.nome_user !== undefined && resp.nickname !== undefined 
        //         && resp.email !== undefined && resp.senha !== undefined && resp.status_user !== undefined){
        //             var modalCerto = document.querySelector('.modal-certo')
        //             modalCerto.classList.remove('model')
        //             console.log("entrou")
        //         }else{
        //             alert("aa")
        //         }
            
            

        // })
}

function esconderModalCheck() {
    var modalCerto = document.querySelector('.modal-certo')

    modalCerto.classList.add('model')
}

function esconderModalError() {
    var modalErro = document.querySelector('.modal-errado')

    modalErro.classList.add('model')

}