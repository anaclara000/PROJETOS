
const toReadAll = () => {
    return "SELECT * FROM vw_feed";
    }
    
const toRead = (model) => {
    return `SELECT * FROM vw_feed WHERE id_pergunta = ${model.id_pergunta}`
}
    
    module.exports = {
    toReadAll,
    toRead
    }