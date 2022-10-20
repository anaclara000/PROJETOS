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
        
        if(info.tipo == "D"){
            var lista = lancamento.cloneNode(true);
    
            lista.classList.remove("model");
        
            lista.querySelector("#num").innerHTML = info.n_lancamento;
            lista.querySelector("#data").innerHTML = info.data_lan.slice(0,10);
            lista.querySelector("#descricao").innerHTML = info.descricao;
            var saldo = lista.querySelector("#valor").innerHTML = info.valor;
            lista.querySelector("#tipo").innerHTML = info.tipo;

            saldoD = saldoD + Number(saldo)
            
            lancamentos.appendChild(lista);
        }else {
            var lista2 = lancamentO.cloneNode(true);
    
            lista2.classList.remove("model");
        
            lista2.querySelector("#num").innerHTML = info.n_lancamento;
            lista2.querySelector("#data").innerHTML = info.data_lan.slice(0,10);
            lista2.querySelector("#descricao").innerHTML = info.descricao;
            var saldo = lista2.querySelector("#valor").innerHTML = info.valor;
            lista2.querySelector("#tipo").innerHTML = info.tipo;
        
            saldoC = saldoC + Number(saldo)

            lancamentoS.appendChild(lista2);
        }
    })
    
    var valorTotal = saldoC - saldoD
    document.querySelector('.saldo-tot').innerHTML = valorTotal
}


const inputBusca = document.getElementById('input-busca')
const tabelaDebito = document.querySelector('.lancamentos')
const tabelaCredito = document.querySelector('.lancamentoS')
var button = document.querySelector('.button')

button.addEventListener('click', () => {
    var valortot = 0
    var pegaValorTot = 0
    var pega = inputBusca.value
    var saldo = 0
    var pegaSaldo = 0

    cafezinho.forEach(preco => {
        if (pega != preco.valor) {
            document.querySelector('.saldo-title').innerHTML = 'Insira Uma Data Para Filtrar'
        }
        if (preco.datas == pega) {
            pegaSaldo = preco.valor
            saldo = saldo + Number(pegaSaldo)
        }
        if (pega == '') {
            pegaValorTot = preco.valor
            valortot = valortot + Number(pegaValorTot)
            document.querySelector('.saldo-title').innerHTML = 'Saldo Acumulado - R$' + valortot
        } else if (saldo != 0) {
            document.querySelector('.saldo-title').innerHTML = 'Saldo do Dia - R$' + saldo
        }

    })

    let expressao = inputBusca.value
    let linhas = tabelaDebito.getElementsByTagName('span')

    for (let posicao in linhas) {
        if (true === isNaN(posicao)) {
            continue
        } 
        
        let conteudoDaLinha = linhas[posicao].innerHTML

        if (true === conteudoDaLinha.includes(expressao)) {
            linhas[posicao].style.display = ''
        } else {
            linhas[posicao].style.display = 'none'
            console.log("PASSOU!")
        }
        
    }
})
button.addEventListener('click', () => {

    let expressao = inputBusca.value
    let linhas = tabelaCredito.getElementsByTagName('span')

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

function showModal() {
    modal.classList.toggle("model");
}

function cadastrar() {
    var hoje = new Date();
    var dia = String(hoje.getDate()).padStart(2, '0');
    var mes = String(hoje.getMonth() + 1).padStart(2, '0');
    var ano = hoje.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
    console.log(dataAtual);
    // let dataLan = document.querySelector("#descricaoLan").value;
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
    
    .then(resp=> {return resp.json()})
    .then(data => { 
        listaDeLancamentos(data); 
        showModal();
    })
}
