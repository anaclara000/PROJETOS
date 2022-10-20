const lancamentos = document.querySelector(".lancamentos");
const lancamento = document.querySelector(".lancamento");
const lancamentoS = document.querySelector(".lancamentoS");
const lancamentO = document.querySelector(".lancamentO");
const modal = document.querySelector(".modal");
var cafezinho = [];
fetch("http://localhost:3000/cafezinho")
.then(resp => {return resp.json()})
.then(lancamento => {
        cafezinho = lancamento;
        listaDeLancamentos();
    });


function listaDeLancamentos(e) {

    var saldoD = 0
    var saldoC = 0
    cafezinho.forEach(info => {
        
        if(info.tipo == "C"){
            var lista = lancamento.cloneNode(true);
    
            lista.classList.remove("model");
        
            lista.querySelector("#num").innerHTML = info.n_lancamento;
            lista.querySelector("#data").innerHTML = info.data_lan;
            lista.querySelector("#descricao").innerHTML = info.descricao;
            var saldo = lista.querySelector("#valor").innerHTML = info.valor;
            lista.querySelector("#tipo").innerHTML = "Entrada";

            saldoD = saldoD + Number(saldo)
            
            lancamentos.appendChild(lista);
        }else {
            var lista2 = lancamentO.cloneNode(true);
    
            lista2.classList.remove("model");
        
            lista2.querySelector("#num").innerHTML = info.n_lancamento;
            lista2.querySelector("#data").innerHTML = info.data_lan;
            lista2.querySelector("#descricao").innerHTML = info.descricao;
            var saldo = lista2.querySelector("#valor").innerHTML = info.valor;
            lista2.querySelector("#tipo").innerHTML = "Saida";
        
            saldoC = saldoC + Number(saldo)

            lancamentoS.appendChild(lista2);
        }
    })

    
    var valorTotal = saldoD - saldoC
    document.querySelector('.saldo-tot').innerHTML = valorTotal
}
// FUNÇÃO FILTRAR

const inputBusca = document.getElementById('input-busca')
const tabelaDebito = document.querySelector('.lancamentos')
const tabelaCredito = document.querySelector('.lancamentoS')
var button = document.querySelector('.button')


button.addEventListener('click', ()=> {

    var valortot = 0
    var pegaValorTot = 0

    var pegaSaldoC = 0
    var pegaSaldoD = 0

    var saldoC = 0 
    var saldoD = 0

    var pega = inputBusca.value

    cafezinho.forEach(preco => {
        if (pega != preco.data_lan) {
            document.querySelector('.saldo-title').innerHTML = 'Insira uma data para filtrar o saldo do dia'
            
        }
    if(pega == preco.data_lan) {
        if(preco.tipo == 'C') {
            pegaSaldoC = preco.valor
            saldoC = saldoC + Number(pegaSaldoC)
        }else if(preco.tipo == 'D') {
            pegaSaldoD = preco.valor
            saldoD = saldoD + Number(pegaSaldoD)
        }
    }
})

    var saldoTotal = saldoC - saldoD
    
    if (pega == '') {
        pegaValorTot = preco.valor
        valortot = valortot + Number(pegaValorTot)
        document.querySelector('.saldo-title').innerHTML = 'Saldo Acumulado - R$' + valortot + ',00'
    }
    if (saldoTotal != 0) {
        document.querySelector('.saldo-title').innerHTML = 'Saldo do Dia - R$' + saldoTotal + ',00'
    }

    
    let expressao = inputBusca.value
    let linhas = tabelaDebito.getElementsByTagName('tr')


    for (let posicao in linhas) {
        if (true == isNaN(posicao)) {
            continue
        } 
        let conteudoDaLinha = linhas[posicao].innerHTML
            if (true == conteudoDaLinha.includes(expressao)) {
            linhas[posicao].style.display = ''
            } else {
            linhas[posicao].style.display = 'none'
        }
    }
        let expressao2 = inputBusca.value
        let linhas2 = tabelaCredito.getElementsByTagName('tr')

        for (let posicao in linhas2) {
            if (true == isNaN(posicao)) {
            continue
            }
        let conteudoDaLinha = linhas2[posicao].innerHTML
            if (true == conteudoDaLinha.includes(expressao2)) {
                linhas2[posicao].style.display = ''
            } else {
                linhas2[posicao].style.display = 'none'
        }
    }
})
// CADASTRO, ABRIR E FECHAR MODAL

function showModal() {
    modal.classList.toggle("model");
    var hoje = new Date();
    var dia = String(hoje.getDate()).padStart(2, '0');
    var mes = String(hoje.getMonth() + 1).padStart(2, '0');
    var ano = hoje.getFullYear();
    dataAtual = ano + '-' + mes + '-' + dia;
    console.log(dataAtual);
    document.querySelector("#dataLan").value = dataAtual;

    let inpData = document.querySelector("#dataLan");
    inpData.disabled = true;
}

function cadastrar() {
    let descricao = document.querySelector("#descricaoLan").value;
    let valor = document.querySelector("#valorLan").value;
    let tipo = document.querySelector("#tipoLan").value;

    let data = JSON.stringify({
        "data_lan": dataAtual,
        "descricao": descricao,
        "valor": valor,
        "tipo": tipo
    });
    
    console.log(data);

    fetch("http://localhost:3000/cafezinho", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": data
    })

    .then(res => {return res.json()})
    .then(resp => {
        if(resp.tipo && resp.descricao && resp.valor !== undefined){
            alert("Lançamento efetuado!");
            window.location.reload();
        }else {
            alert("Falha ao efetuar lançamento.Por favor, verificar novamente os campos");
            window.location.reload();
        }
     })
}


