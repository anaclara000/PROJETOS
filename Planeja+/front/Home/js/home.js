var usuario = []
var servicos = []


var productors = document.querySelector('.productors')
var card_servicos = document.querySelector('.servicos')

function carregar() {
    const options = { method: 'GET' };
    fetch('http://localhost:3000/usuarios', options)
        .then(response => response.json())
        .then(resp => {
            usuario = resp;
            listarUsuario();
        });

        fetch('http://localhost:3000/servicos', options)
        .then(response => response.json())
        .then(resp => {
            servicos = resp;

        });
        

}

function listarUsuario() {

    var soma = 0;
    // var produtorinfo = JSON.parse(localStorage.getItem("info_produtor"));
    // var userinfo = JSON.parse(localStorage.getItem("info_usuario"));


    // if (produtorinfo != "") {

    //     usuario.forEach(u => {


    //         if (u.cnpj == produtorinfo.cnpj) {

    //             document.querySelector('.usuario').innerHTML = u.nomeFantasia
    //         }
    //     })

    // }


    usuario.forEach(info => {

        soma += 1

        if (soma != 6) {

            if (info.tipo == "Produtor") {
                var novoProdutor = productors.cloneNode(true);

                novoProdutor.style.display = "block";
                novoProdutor.querySelector('.img_icon_produtor').src = 'assets/icon/coca_cola_icon.png'
                novoProdutor.querySelector(".id").innerHTML = info.id_usuario;
                novoProdutor.querySelector(".nome_productor").innerHTML = info.nomeFantasia;

                document.querySelector('.cards_productors').appendChild(novoProdutor)
            }
        }

    })
}

function ModalProdutor(e) {

    document.querySelector('.modal_produtor').classList.toggle('model')

    var id = e.parentNode.querySelector('.id').innerHTML

    usuario.forEach(u => {

        if(id == u.id_usuario) {
            
            document.querySelector('.nome_produtor').innerHTML = u.nomeFantasia
            document.querySelector('.contato').innerHTML = u.telefone
            document.querySelector('.email').innerHTML = u.email
            document.querySelector('.cnpj').innerHTML = u.cnpj
            
            servicos.forEach((s ,i)=> {

                
                if(s.id_servicos == id) {
                    
                var novo_card_servicos = card_servicos.cloneNode(true)
                
                novo_card_servicos.classList.remove('model')

                novo_card_servicos.innerHTML = s.nome

                console.log(novo_card_servicos);
                document.querySelector('.cont_servicos').appendChild(novo_card_servicos)

            }
        })

        }
        
    })
}

function FecharProdutor( ) {

    document.querySelector('.modal_produtor').classList.toggle('model')

}