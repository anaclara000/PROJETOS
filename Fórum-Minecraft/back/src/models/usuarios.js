const toCreate  = (model) =>{
    return `INSERT INTO usuarios VALUES (DEFAULT, '${model.nome_user}', '${model.nickname}', '${model.email}', '${model.senha}', '${model.status_user}')`;
}
const credenciais = (model) => {
    return `INSERT INTO usuarios VALUES ('${model.email}', '${model.senha}')`;
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
return `UPDATE usuarios SET nome_user = '${model.nome_user}', nickname = '${model.nickname}', email = '${model.email}', status_user = '${model.status_user}' WHERE id_user = '${model.id_user}'`;
}

const toLogin = (model) => {
    return `SELECT * FROM usuarios WHERE email = '${model.email}' OR nickname = '${model.nickname}' AND senha = '${model.senha}'`;
}
const toName = (model) => {
    return `SELECT * FROM usuarios WHERE nickname = '${model.nickname}'`;
}

module.exports = {
toReadAll,
toCreate,
toDel,
toUpdate,
toRead,
credenciais,
toLogin,
toName
}