

function SectionInformacao() {

    document.querySelector('.informacao').style.display = "block"
    document.querySelector('.locacao').style.display = "none"
    document.querySelector('.convidados').style.display = "none"


}

function SectionLocacao() {

    document.querySelector('.informacao').style.display = "none"
    document.querySelector('.locacao').style.display = "block"
    document.querySelector('.convidados').style.display = "none"


}

function SectionConvidado() {

    document.querySelector('.informacao').style.display = "none"
    document.querySelector('.locacao').style.display = "none"
    document.querySelector('.convidados').style.display = "block"


}

function Conferir() {

    // VARIAVEIS DA SESSÃO INFORMAÇÃO // 

    var nomeEvento = document.querySelector('.nomeEvento').value
    var descEvento = document.querySelector('.descricaoEvento').value
    var enderecoEvento = document.querySelector('.enderecoEvento').value
    var dateTime_inicio = document.querySelector('.dateTime_inicio').value
    var dateTime_fim = document.querySelector('.dateTime_fim').value

    // VARIAVEIS DA SESSÃO FORNECEDOR // 

    var nomeFornecedor = document.querySelector('.nomeFornecedor').value
    var descricaoFornecedor = document.querySelector('.descricaoFornecedor').value
    var tipoFornecedor = document.querySelector('.tipoFornecedor').value
    var telefoneFornecedor = document.querySelector('.telefoneFornecedor').value
    var valorFornecedor = document.querySelector('.valorFornecedor').value

    // VARIAVEIS DA SESSÃO LOCAÇÃO // 

    var nomeFornecedor = document.querySelector('.nomeFornecedor').value
    var descriLocacao = document.querySelector('.descriLocacao').value

    // VARIAVEIS DA SESSÃO CONVIDADOS // 

    var nomeConvidado = document.querySelector('.nomeConvidado').value
    var telConvidado = document.querySelector('.telConvidado').value


    document.querySelector('.nome_evento').innerHTML = nomeEvento
    document.querySelector('.descricao_evento').innerHTML = descEvento
    document.querySelector('.endereco_evento').innerHTML = enderecoEvento


    var dataHora = new Date(dateTime_inicio);

    var dia = dataHora.getDate().toString().padStart(2, "0");
    var mes = (dataHora.getMonth() + 1).toString().padStart(2, "0");
    var ano = dataHora.getFullYear().toString();

    var hora = dataHora.getHours().toString().padStart(2, "0");
    var minutos = dataHora.getMinutes().toString().padStart(2, "0");
    var segundos = dataHora.getSeconds().toString().padStart(2, "0");

    var dataHoraFormatada_inicio = dia + "/" + mes + "/" + ano + " [" + hora + ":" + minutos + "]";
    // dataHoraFormatada_inicio = dataHoraFormatada_inicio.replace("[", " ").replace("]", " ");

    var dataHora = new Date(dateTime_fim);

    var dia = dataHora.getDate().toString().padStart(2, "0");
    var mes = (dataHora.getMonth() + 1).toString().padStart(2, "0");
    var ano = dataHora.getFullYear().toString();

    var hora = dataHora.getHours().toString().padStart(2, "0");
    var minutos = dataHora.getMinutes().toString().padStart(2, "0");
    var segundos = dataHora.getSeconds().toString().padStart(2, "0");

    var dataHoraFormatada_fim = dia + "/" + mes + "/" + ano + " [" + hora + ":" + minutos + "]";
    // dataHoraFormatada_fim = dataHoraFormatada_fim.replace("[", " ").replace("]", " ");

    document.querySelector('.data_inicio').innerHTML = dataHoraFormatada_inicio
    document.querySelector('.data_fim').innerHTML = dataHoraFormatada_fim
    document.querySelector('.tipo_locacao').innerHTML = tipoLocacao


}