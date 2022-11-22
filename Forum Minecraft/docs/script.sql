drop database if exists forum;
create database forum charset=UTF8 collate UTF8_general_ci;
use forum;

-- CRIANDO TABELA DE USUARIOS
create table usuarios(
    id_user integer not null primary key auto_increment,
    nome_user varchar(30) not null,
    nickname varchar(30) not null,
    email varchar(100) not null,
    senha varchar(30) not null,
    status_user varchar(30) not null
);

-- CRIANDO TABELA DE MODERADORES
-- create table moderador(
--     id_moderador integer not null primary key auto_increment,
--     nome_mode varchar(30) not null,
--     nickname varchar(30) not null,
--     email varchar(100) not null,
--     senha varchar(30) not null,
--     status_moderador varchar(30) not null
-- );

-- CIANDO TABELA DE PERGUNTAS
create table perguntas(
    id_user integer null,
    id_pergunta integer not null primary key auto_increment,
    pergunta varchar(300) not null,
    tema varchar(30) not null,
    data DATETIME not null,
    foreign key (id_user) references usuarios(id_user) on delete cascade
);

--CRIANDO TABELA DE COMENTARIOS/RESPOSTAS
create table respostas(
    id_usuario integer null,
    id_perg integer not null,
    resposta varchar(300) not null,
    dataResp DATETIME not null,
    foreign key (id_perg) references perguntas(id_pergunta) on delete cascade,
    foreign key (id_usuario) references usuarios(id_user) on delete cascade
);


insert into usuarios values(default,'Ana', 'Aninha', 'ana@gmail.com','anagatinha','usuario');
insert into usuarios values(default,'Gleidson', 'gle', 'gle@gmail.com','gledsongatao','usuario');
insert into usuarios values(default,'Luiz', 'Luizinho', 'luiz@gmail.com','luizgatao','admin');

UPDATE usuarios SET status_user=('admin') where id_user = 2;

drop view if exists vw_status;
create VIEW vw_status as 
select u.id_user, u.email, u.nickname, u.nome_user, u.senha from usuarios u
where u.status_user = "admin";



select * from vw_status;

insert into perguntas values(1,default,'teste?','picareta','22/02/22');
insert into respostas values(2,1,'sim','26/02/22');

drop view if exists vw_feed;
create VIEW vw_feed as
select p.id_user, p.id_pergunta, p.pergunta, p.tema, p.data, r.id_usuario, r.id_perg, r.resposta, r.dataResp from perguntas p 
inner join respostas r on p.id_pergunta = r.id_perg;
