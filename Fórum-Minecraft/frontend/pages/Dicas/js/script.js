var uriQuestions = 'http://localhost:3000/Perguntas'
var uriUsuarios = 'http://localhost:3000/Usuarios'
var uriRespostas = 'http://localhost:3000/Respostas'


var questions = []
var questionsAnswer = []
var usuariosAnsert = []
var respostas = []

var usuarios = []


var cardResposta = document.querySelector('.answer')
var cardQuestion = document.querySelector('.questions')
var questRespostas = document.querySelector('.answer-card')

var secUserModal = document.querySelector('.usuarios-modal')
var secAdminModal = document.querySelector('.contribuidores')


function carregar() {

    const options = { method: 'GET' };

    fetch(uriQuestions, options)
        .then(res => res.json())
        .then(res => {
            questions = res;
            preencher();
        }
        )
        .catch(err => console.error(err));

    fetch(uriUsuarios, options)
        .then(res => res.json())
        .then(res => {
            usuarios = res;
            preencher();
        }
        )
        .catch(err => console.error(err));



    ativarFetchesPerguntas()
}

function preencher() {

    document.querySelector('.qtdPerguntas').innerHTML = questions.length
    document.querySelector('.qtdUsuarios').innerHTML = usuarios.length


    usuarios.forEach(u => {

        if (u.status_user == 'usuario') {
            var novoUser = secUserModal.cloneNode(true)
            novoUser.classList.remove('model')
            novoUser.style.display = 'flex'

            novoUser.querySelector('.nome-user-modal').innerHTML = u.nickname
            document.querySelector('.agradecimentos').appendChild(novoUser)
        }

        if (u.status_user == 'admin') {

            var novoadmin = secAdminModal.cloneNode(true)
            novoadmin.classList.remove('model')
            novoadmin.style.display = 'flex'

            novoadmin.querySelector('.nome-admin-modal').innerHTML = u.nickname
            document.querySelector('.cont-contribuidores').appendChild(novoadmin)
        }
    })

}


function ativarFetchesPerguntas() {

    const options = { method: 'GET' };

    fetch(uriQuestions, options)
        .then(res => res.json())
        .then(res => {
            questions = res;
            cardsPerguntas();
        }
        )
        .catch(err => console.error(err));

    fetch(uriUsuarios, options)
        .then(res => res.json())
        .then(res => {
            usuarios = res;
            cardsPerguntas();
        }
        )
        .catch(err => console.error(err));

    fetch(uriRespostas, options)
        .then(res => res.json())
        .then(res => {
            respostas = res;
            cardsPerguntas();
        }
        )
        .catch(err => console.error(err));

}
var qtdRep = 0
function cardsPerguntas() {

    console.log('entrando')

    qtdRep += 1

    questions.reverse()


    if (qtdRep == 1) {
        questions.forEach((q, i) => {

            // if (i < 3) {
            if (q.tema == 'DICAS') {

                var novoCardQuestion = cardQuestion.cloneNode(true)

                novoCardQuestion.classList.toggle('model')

                var idUsuario = q.id_User

                usuarios.forEach(u => {

                    if (idUsuario == u.id_user) {
                        novoCardQuestion.querySelector('.nome-user-card').innerHTML = u.nome_user

                    }

                })

                var data = q.data

                const [ano, mes, juncao] = data.split('-')

                var dia = juncao[0] + juncao[1]

                var dataCompleta = dia + ' ' + mes + ' ' + ano

                novoCardQuestion.querySelector('.id_usuario').innerHTML = q.id_User
                novoCardQuestion.querySelector('.id_pergunta').innerHTML = q.id_pergunta
                novoCardQuestion.querySelector('.data-question').innerHTML = '- ' + dataCompleta
                novoCardQuestion.querySelector('.question-p').innerHTML = q.pergunta
                novoCardQuestion.querySelector('.tema-card-question').innerHTML = q.tema

                document.querySelector('.container-cards').appendChild(novoCardQuestion)

                var id_pergunta = q.id_pergunta

                respostas.forEach(r => {


                    if (r.id_perg == id_pergunta) {

                        var novoUserResposta = questRespostas.cloneNode(true)

                        novoUserResposta.classList.remove('model')

                        novoUserResposta.querySelector('.answer-r').innerHTML = r.resposta
                        novoUserResposta.querySelector('.data-resp').innerHTML = dataCompleta
                    }
                })



            }
            // }

        })
    }


}

function ativarModalResposta(e) {


    var id_quest = e.parentNode.parentNode.querySelector('.id_pergunta').innerHTML
    var id_user = e.parentNode.parentNode.querySelector('.id_pergunta').innerHTML

    console.log(id_user)

    var uriTest = 'http://localhost:3000/Perguntas/quest/' + id_quest
    var uriTest2 = 'http://localhost:3000/Usuarios/' + id_user
    var uriRespostas = 'http://localhost:3000/Respostas/'


    const options = { method: 'GET' };

    fetch(uriTest2, options)
        .then(res => res.json(e))
        .then(res => {
            usuariosAnsert = res;
            modalRespostas(e);
        }
        )
        .catch(err => console.error(err));

    fetch(uriRespostas, options)
        .then(res => res.json(e))
        .then(res => {
            respostas = res;
            modalRespostas(e);
        }
        )
        .catch(err => console.error(err));


}


var qtdRep2 = 0

var abrir = false

var fechar = false

function modalRespostas(e) {


    var id_perg = e.parentNode.parentNode.querySelector('.id_pergunta').innerHTML
    var mResposta = e.parentNode.parentNode.querySelector('.user-answer')
    var secResp = document.querySelector('.answer-card')
    var novaResposta = secResp.cloneNode(true)

    
    respostas.forEach(r => {

        if (id_perg == r.id_perg) {
        
            mResposta.classList.toggle('model')

            // document.querySelector('.id_pergunta').innerHTML

            novaResposta.classList.toggle('model')

            novaResposta.querySelector('.answer-r').innerHTML = r.resposta
              
            mResposta.appendChild(novaResposta)
        }

    })

}

function fechandoModal(e) {

    console.log('asadad')

    // var id_perg = e.parentNode.parentNode.querySelector('.id_pergunta').innerHTML
    var mResposta = e.parentNode.parentNode.querySelector('.user-answer')
    var secResp = document.querySelector('.answer-card')
    // var novaResposta = secResp.cloneNode(true)

    // mResposta.e.parentNode.removeChild('.answer-card')
    mResposta.removeChild(secResp)
}


function modalPergunta() {
    var modalQuestion = document.querySelector('.modal-pergunta')
    var texto = document.querySelector('#txtPerguntar')

    texto.value = ''

    modalQuestion.classList.remove('model')

    document.querySelector('#container').style.opacity = '0.8'

    // var hoje = new Date()
    var hoje = new Date()
    var dia = String(hoje.getDate()).padStart(2, '0')
    var mes = String(hoje.getMonth() + 1).padStart(2, '0')
    var ano = hoje.getFullYear()

    dataAtual = dia + '/' + mes + '/' + ano;

    document.querySelector('.data-modal-quest').innerHTML = dataAtual
}

function fecharModalPergunta() {
    var modalQuestion = document.querySelector('.modal-pergunta')

    modalQuestion.classList.toggle('model')
    document.querySelector('#container').style.opacity = ''

}
function cadastrarPergunta() {
    var txtPergunta = document.querySelector('#txtPerguntar').value

    if (txtPergunta.length > 0) {
        var select_status = document.querySelector(".select_status")
        let seleStatus = select_status.options[select_status.selectedIndex].value;
        if (seleStatus == 'crafts') { var tema = 'CRAFT' }
        if (seleStatus == 'bugs') { var tema = 'BUGS' }
        if (seleStatus == 'dicas') { var tema = 'DICAS' }
        if (seleStatus == 'mods') { var tema = 'MODS' }



        let data = {
            "id_user": 2,
            "tema": tema,
            "pergunta": txtPergunta,
            "data": dataAtual

        }
        console.log(data)

        fetch(uriQuestions, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        })

            .then(res => { return res.json() })
            .then(resp => {
                if (resp.id_user !== undefined && resp.tema !== undefined && resp.pergunta !== undefined && resp.data !== undefined) {
                    alert('Deu Certo!')
                }
            })
    }
    else {
        alert('Insira a Sua Pergunta antes de enviar!')
    }





}


// FAZENDO O MENU DROPDOWN 
function menuDow() {

    var down = document.querySelector('.dropDown')

    down.classList.toggle('model')

}

function curtir(e) {
    var curtirVazio = document.querySelector('.curtir-vazio')
    var curtirCheio = document.querySelector('.curtir-cheio')

    curtirVazio.classList.toggle('model')
    curtirCheio.classList.toggle('model')
}

function favoritar() {
    var favoritarVazio = document.querySelector('.favoritar-vazio')
    var favoritarCheio = document.querySelector('.favoritar-cheio')

    favoritarVazio.classList.toggle('model')
    favoritarCheio.classList.toggle('model')
}
