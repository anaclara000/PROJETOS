const toCreate  = (model) =>{
    return `INSERT INTO perguntas VALUES ('${model.id_user}', '${model.id_pergunta}', '${model.pergunta}', '${model.tema}', '${model.data}')`;
}

const toReadAll = () => {
return "SELECT * FROM perguntas ORDER BY id_pergunta asc";
}

const toReadUser = (model) => {
return `SELECT * FROM perguntas WHERE id_user = ${model.id_user}`;
}

const toReadPerg = (model) => {
    return `SELECT * FROM perguntas WHERE id_pergunta = ${model.id_pergunta}`;
}

const toDel = (model)=>{
return `DELETE FROM perguntas WHERE id_pergunta = '${model.id_pergunta}'`;
}

const toUpdate = (model)=>{
return `UPDATE perguntas SET id_user = ${model.id_user} id_pergunta = ${model.id_pergunta}, pergunta = '${model.pergunta}', tema = '${model.tema}', data = '${model.data}' `;
}

module.exports = {
toReadAll,
toCreate,
toDel,
toUpdate,
toReadUser,
toReadPerg
}