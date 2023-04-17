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
            lista.querySelector(".titulo").innerHTML = info.raz;
            lista.querySelector(".telefone").innerHTML += info.telefone;
            lista.querySelector(".email").innerHTML += info.email;
            container.appendChild(lista)
        }

    })
}