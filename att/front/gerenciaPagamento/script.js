const lancamentos = document.querySelector(".lista-vagas");
const lancamento = document.querySelector(".botoes2");

function carregarVagas() {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/vagas', options)
        .then(response => response.json())
        .then(resp => {
            resp.forEach(v => {
                var vaga = document.querySelector(".vaga").cloneNode(true);
                vaga.querySelector(".id").innerHTML = v.id_vaga;
                

                const options2 = { method: 'GET' };
                fetch('http://localhost:3000/registros', options2)
                    .then(response => response.json())
                    .then(resp => {

                        resp.forEach(r => {
                            if (r.id_vaga == v.id_vaga) {
                                if (r.hora_saida == "00:00:00") {
                                    

                                    const options3 = { method: 'GET' };

                                    fetch('http://localhost:3000/clientes/' + r.id_cliente, options3)
                                        .then(response => response.json())
                                        .then(response => {
                                            response.forEach(c => {
                                                vaga.querySelector(".nome").innerHTML = c.nome_cli;
                                            })
                                        })
                                        
                                }
                            }
                        })
                    })

                document.querySelector(".cards").appendChild(vaga);




            })



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

function abrirModal() {
    modal.classList.toggle("model");
}

function cadastrar(){
    let idVaga = document.querySelector(".idVaga").value;
    let ocupada = document.querySelector(".ocupada").value;

    let options = JSON.stringify({
        "id_vaga":idVaga,
        "ocupada":ocupada
    });

    fetch("http://localhost:3000/vagas", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": options
    })
    .then(resp=> {return resp})
    .then(resp => { 
            alert("Vaga cadastrada com sucesso!");
            window.location.reload();
            abrirModal();
        
    })
}


var modal = document.querySelector(".tela");

function abrirModal2() {
    modal.classList.toggle("tela2");
}

function cadRegistro(){
    let idCliente = document.querySelector(".idCliente").value;
    let idCarro = document.querySelector(".idCarro").value;
    let idVaga = document.querySelector(".idVaga").value;
    let horaEntrada = document.querySelector(".horaEn").value;
    let horaSaida = document.querySelector(".horaSai").value;
    let data = document.querySelector(".data").value;

    let options = JSON.stringify({
        "id_cliente":idCliente,
        "id_carro":idCarro,
        "id_vaga": idVaga,
        "hora_entrada": horaEntrada,
        "hora_saida": horaSaida,
        "data": data
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
            alert("Registro cadastrado com sucesso!");
            window.location.reload();
            abrirModal2();
        
    })
}

