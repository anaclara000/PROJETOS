const toCreate  = (model) =>{
    return `INSERT INTO usuarios VALUES (DEFAULT, '${model.nome_user}', '${model.nickname}', '${model.email}', '${model.senha}', '${model.status_user}')`;
}

const toReadAll = () => {
return "SELECT * FROM usuarios ORDER BY id_user asc";
}

const toRead = (model) => {
return `SELECT * FROM usuarios WHERE id_user = ${model.id_user}`;
}

const toDel = (model)=>{
return `DELETE FROM usuarios WHERE id_user = '${model.id_user}'`;
}

const toUpdate = (model)=>{
return `UPDATE usuarios SET id_user = '${model.id_user}', nome_user = '${model.nome_user}', nickname = '${model.nickname}', email = '${model.email}', senha = '${model.senha}', status_user = '${model.status_user}' `;
}

module.exports = {
toReadAll,
toCreate,
toDel,
toUpdate,
toRead
}