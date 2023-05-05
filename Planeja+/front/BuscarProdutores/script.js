function carregar() {
    const options = { method: 'GET' };
    fetch('http://localhost:3000/usuarios', options)
        .then(response => response.json())
        .then(resp => {
            produtor = resp;
            listarProdutor();
        });

}

const container = document.querySelector(".read_produtores");
const corpo = document.querySelector(".produtor");

var produtor = []

var model = document.querySelector('.cont_contato')

function listarProdutor() {

    produtor.forEach(info => {

        if (info.tipo == "Produtor") {

            var lista = corpo.cloneNode(true);

            lista.style.display = "block"
            lista.querySelector(".title_produtor").innerHTML = info.nomeFantasia;
            lista.querySelector(".id_produtor").innerHTML = info.id_usuario;

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

function ConferirProdutor(e) {

    var div = e.parentNode.parentNode.querySelector('.detais_produtor')

    var id = e.parentNode.parentNode.querySelector('.id_produtor').innerHTML

    document.querySelector('.paginaProdutor').classList.remove('model')

    console.log(id);
    produtor.forEach(p => {
        if (id == p.id_usuario) {

            document.querySelector('.nome_produtor').innerHTML = p.nomeFantasia

            var telefone = p.telefone

            document.querySelector('#contact').innerHTML = telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3')
            document.querySelector('#email').innerHTML = p.email
            document.querySelector('#cnpj').innerHTML = p.cnpj

        }

    })

}

function mostrarModalUser() {

    document.querySelector('.modal_user').classList.toggle('model')

}

function mostrarTelaProdutor() {

}

var search_btn = document.querySelector('.btn-filter')
const INPUT_BUSCA = document.querySelector('.input')
const TABELA_CLIENTES = document.querySelector('.read_produtores')

search_btn.addEventListener('click', () => {

    let expressao = INPUT_BUSCA.value


    let linhas = TABELA_CLIENTES.getElementsByClassName('produtor')


    for (let posicao in linhas) {
        if (true === isNaN(posicao)) {
            continue
        }

        let conteudoDaLinha = linhas[posicao].innerHTML



        if (true === conteudoDaLinha.includes(expressao)) {
            linhas[posicao].style.display = ''
        } else {
            linhas[posicao].style.display = 'none'

        }

    }

})


