function SelecionarOpcao(e) {

    var tipo = e.querySelector('.title').innerHTML


    if (tipo == "Produtor") {
        var produtor = document.querySelector('.produtor')
        var select = document.querySelector('.select')
        var cont_cnpj = document.querySelector('.cont_cnpj')

        select.classList.add('model')
        cont_cnpj.classList.remove('model')
    }

    if (tipo == "Usuario") {

    }
}

function AdicionarServicos() {

    var card_servicos = document.querySelector('.servicos')
    var servicos = document.querySelector('#input_servicos').value

    var novo_card_servicos = card_servicos.cloneNode(card_servicos)

    novo_card_servicos.classList.remove('model')
    novo_card_servicos.querySelector('.title_service').innerHTML = servicos

    document.querySelector('.servicoes_prestados').appendChild(novo_card_servicos)

    document.querySelector('#input_servicos').value = ""

}

function CadastrarProdutor() {
    var erroRaz = document.querySelector(".erro_raz")

    var erro_email_vazio = document.querySelector(".erro_email_vazio")
    var erro_email_invalido = document.querySelector(".erro_email_invalido")
    var erro_email_existente = document.querySelector(".erro_email_existente")

    var erro_senha_vazia = document.querySelector(".erro_senha_vazia")

    var erro_confirmar_senha_vazia = document.querySelector(".erro_confirmar_senha_vazia")
    var erro_senhas_nao_conferem = document.querySelector(".erro_senhas_nao_conferem")

    var erro_nome_fantasia = document.querySelector(".erro_nome_fantasia")

    var erro_cnpj_vazio = document.querySelector(".erro_cnpj_vazio")
    var erro_cnpj_existente = document.querySelector(".erro_cnpj_existente")
    var erro_cnpj_invalido = document.querySelector(".erro_cnpj_invalido")

    var erro_tipos_eventos_vazio = document.querySelector(".erro_tipos_eventos_vazio")

    var raz = document.querySelector('#razao').value
    var email = document.querySelector('#email').value
    var senha = document.querySelector("#senha").value
    var confirmar_senha = document.querySelector('#confirmar_senha').value
    var nome_fantasia = document.querySelector("#nome_fantasia").value
    var cnpj = document.querySelector("#cnpj").value
    var tipos_eventos = document.querySelector('#tipos_eventos').value

    if (raz.trim() == "") { erroRaz.classList.remove('err') }


}

function VerificarCNPJ(cnpj) {

    var cnpj = document.querySelector('#cnpj').value

    let data = {
        "cnpj": cnpj,
    }
    fetch("http://localhost:3000/usuarios/verificarCNPJ ", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })
        .then(res => { return res.json() })
        .then(data => {

            
            if (data.erro === undefined) {

            }
            
            if(data.erro != undefined) {
                
                console.log(data)
            }
        })

}