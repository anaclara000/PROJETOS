function carregar() {
    const options = { method: 'GET' };
    fetch('http://localhost:3000/usuarios', options)
        .then(response => response.json())
        .then(resp => {
            usuario = resp;
            listarUsuario();
        });

}

const container = document.querySelector(".main");
const corpo = document.querySelector(".contato");
var usuario = []

var model = document.querySelector('.cont_contato')

function listarUsuario() {
    usuario.forEach(info => {

        if (info.tipo == "Produtor") {
            var lista = corpo.cloneNode(true);

            lista.style.display = "flex";
            lista.querySelector('.imgProdutor').src = 'assets/temp.jpg'
            lista.querySelector(".id").innerHTML = info.id_usuario;
            lista.querySelector(".titulo").innerHTML = info.raz;
            lista.querySelector(".telefone").innerHTML += info.telefone;
            lista.querySelector(".email").innerHTML += info.email;
            container.appendChild(lista)
        }

    })
}

function verProdutor() {
    alert('a')
}

var modelVerProduto = document.querySelector('.paginaProdutor')

function ModalVerProdutor(e) {
    modelVerProduto.classList.remove('model')

    var id = e.querySelector('.id').innerHTML
    var nome = e.querySelector('.titulo').innerHTML

    document.querySelector('.nome_produtor').innerHTML = nome
    document.querySelector('#id').innerHTML = id
    console.log(nome);
}

function ModalFecharProdutor() {
    modelVerProduto.classList.add('model')

}

var modelInfos = document.querySelector('.informacoes_contato')

function modelInfo(e) {
    modelInfos.classList.remove('model')
    var id = e.parentNode.parentNode.parentNode.querySelector('#id').innerHTML
    console.log(id)
}

var modelInfosServicos = document.querySelector('.servicos_prestados')
var informacoesContato = document.querySelector('.informacoes_contato')
var horario = document.querySelector('.horario')

function fecharModalServico() {
    informacoesContato.classList.add('model')
    modelInfosServicos.classList.remove('model')
    horario.classList.add('model')
}
function fecharModalContato() {
    informacoesContato.classList.remove('model')
    modelInfosServicos.classList.add('model')
    horario.classList.add('model')
}
function fecharModalHorario() {
    informacoesContato.classList.add('model')
    modelInfosServicos.classList.add('model')
    horario.classList.remove('model')
}

function fecharmodais() {
    informacoesContato.classList.add('model')
    modelInfosServicos.classList.add('model')
    horario.classList.add('model')
}