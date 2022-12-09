
const toReadAll = () => {
    return "SELECT * FROM vw_feed";
    }
    
const toRead = (model) => {
    return `SELECT * FROM vw_feed WHERE id_pergunta = ${model.id_pergunta}`
}
    
const toTema = (model) => {
    return `SELECT * FROM vw_feed WHERE tema = '${model.tema}'`
}
    module.exports = {
    toReadAll,
    toRead,
    toTema
    }