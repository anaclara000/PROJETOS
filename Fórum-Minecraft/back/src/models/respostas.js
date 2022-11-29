const toCreate  = (model) =>{
    return `INSERT INTO respostas VALUES (${model.id_usuario}, ${model.id_perg}, '${model.respostas}', '${model.dataResp}'`;
}

const toReadAll = () => {
return "SELECT * FROM respostas ORDER BY id_usuario asc";
}

// const toRead = (model) => {
// return `SELECT * FROM respostas WHERE id_user = ${model.id_user}`;
// }


const toDel = (model)=>{
return `DELETE FROM respostas WHERE id_perg = '${model.id_perg}'`;
}

const toUpdate = (model)=>{
return `UPDATE respostas SET id_usuario = ${model.id_usuario} id_perg = ${model.id_perg}, resposta = '${model.resposta}', tema = '${model.dataResp}' `;
}

module.exports = {
toReadAll,
toCreate,
toDel,
toUpdate,
}