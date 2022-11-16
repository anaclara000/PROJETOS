const lancamentos = document.querySelector(".lista-vagas");
const lancamento = document.querySelector(".botoes2");

var vagas = []

var estacionamento = [];
fetch("http://localhost:3000/registro")
.then(resp => {return resp.json()})
.then(lancamento => {
        estacionamento = lancamento;
        listaVagas();
    });

function listaVagas() {
    estacionamento.forEach(info => {

        var lista = lancamento.cloneNode(true);
        lista.classList.remove("model")
        lista.querySelector(".teste").innerHTML = info.id_cli;
        
        lancamentos.appendChild(lista);
    })
}


function listaPagamentos() {
    pagamento.forEach(info => {
        valorHora = parseInt(info.hora[1] * minutoHora)
        v = parseInt(info.hora[3])
        x = parseInt(info.hora[4])
        precoTotal = (valorHora + v + x) * valorMinuto
        console.log(precoTotal)
    })
}





var modal = document.querySelector(".modal");

function abrirModal (){
      modal.classList.toggle("model");
}
function cadastrarVaga(){
      let nome = document.querySelector(".nome").value;
      let carro = document.querySelector(".carro").value;
      let vaga = document.querySelector(".vaga").value;
      let entrada = document.querySelector(".entrada").value;
      let saida = document.querySelector(".saida").value;
      let data = document.querySelector(".data").value;
  
      let options = JSON.stringify({
          "id_cli": nome,
            "id_carro": carro,
            "id_vaga": vaga,
            "hora_entrada": entrada,
            "hora_saida": saida,
            "data": data,
      });
  
      fetch("http://localhost:3000/registros", {
          "method": "POST",
          "headers": {
              "Content-Type": "application/json"
          },
          "body": options
      })
      .then(resp=> {return resp})
      .then(resp => { 
              alert("Cliente cadastrado com sucesso!");
              window.location.reload();
              abrirModal();
      })
  }
