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
-- CIANDO TABELA DE PERGUNTAS
create table perguntas(
    id_User integer null,
    id_pergunta integer not null primary key auto_increment,
    pergunta varchar(300) not null,
    tema varchar(30) not null,
    data date not null,
    foreign key (id_User) references usuarios(id_user) on delete cascade
);

--CRIANDO TABELA DE COMENTARIOS/RESPOSTAS
create table respostas(
    id_usuario integer null,
    id_perg integer not null,
    resposta varchar(300) not null,
    dataResp date not null,
    foreign key (id_perg) references perguntas(id_pergunta) on delete cascade,
    foreign key (id_usuario) references usuarios(id_user) on delete cascade
);


drop view if exists vw_status;
create VIEW vw_status as 
select u.id_user, u.email, u.nickname, u.nome_user, u.senha from usuarios u
where u.status_user = "admin";
select * from vw_status;


drop view if exists vw_feed;
create VIEW vw_feed as
select p.id_User,u.nickname, p.id_pergunta, p.pergunta, p.tema, p.data, r.id_usuario, r.resposta, r.dataResp from perguntas p 
inner join respostas r on p.id_pergunta = r.id_perg
inner join usuarios u on  u.id_user = p.id_User;
select * from vw_feed;


insert into usuarios values(default,'Ana Paiva', 'juinhololzeiro', 'ana891@gmail.com','anagatinha','usuario');
insert into usuarios values(default,'Pedro Henrique', 'predinhoPVP64', 'pedrohenri@gmail.com','predopvp','usuario');
insert into usuarios values(default,'Janna Gestrudes', 'CancelaCPF', 'janinha341@gmail.com','senha123','usuario');
insert into usuarios values(default,'Jé Roberto', 'jé_Badura', 'jézinho@gmail.com','senhaforte','usuario');
insert into usuarios values(default,'Enzo Fernandez', 'enz0Gamer', 'enzinho@gmail.com','predopvp','usuario');
insert into usuarios values(default,'Juca Martins', 'filh0doCR7', 'cristianoronald@gmail.com','senha','usuario');
insert into usuarios values(default,'Elaine Rodrigues', 'caetanoVenenoso', 'elaineroro29@gmail.com','elaine123','usuario');
insert into usuarios values(default,'Fernanda Costa', 'gatinhafofa123', 'ferferCosta@gmail.com','fer123','usuario');
insert into usuarios values(default,'Caio Pena', 'filhodoN3y', 'caiozinho@gmail.com','caio123','usuario');
insert into usuarios values(default,'Juan Dias', 'paulin_pinho', 'jézinho@gmail.com','senhaforte','usuario');
insert into usuarios values(default,'Suzane Canoa', '19940028922', 'suzaneCosta12@gmail.com','susu123','usuario');
insert into usuarios values(default,'Marcos PVP', 'jotóba_MOkano', 'marquinhos65@gmail.com','marcos123','usuario');
insert into usuarios values(default,'Gleidson', 'gleisonPVP', 'gle@gmail.com','senha@123','admin');
insert into usuarios values(default,'Luiz', 'Luizinho', 'luiz@gmail.com','luizgatao','admin');
insert into usuarios values(default,'Jessica', 'jessicaTriSapeca', 'jessica23@gmail.com','senha1234','admin');
insert into usuarios values(default,'Vitoria', 'vivi', 'vivi34@gmail.com','vivi123','admin');
insert into usuarios values(default,'Luiza', 'LolaPVP', 'lolinha123@gmail.com','senha@senha','admin');

select * from usuarios;


-- TEMA CRAFTS: PARA USUARIOS COM DUVIDAS EM CRIAÇÃO DE COISAS
-- TEMA BUGS: PARA USUARIOS COM ERROS NO JOGO
-- TEMA DICAS: PARA USUARIOS QUE QUEREM DICAS SOBRE TUDO
-- TEMA MODS: PARA USUARIOS QUE QUEREM SABER SOBRE MODS(COMO BAIXAR, USAR, JOGAR E ETC)

insert into perguntas values(1,default,'É possível criar um iron golen?','CRAFTS','22/02/22');
insert into respostas values(17,1,'Sim, Itens necessários: 4 blocos de ferro e uma abobora cortada com TESOURA.
Posicione os ferros em formato de T e então coloque a abobora no topo, assim o irom golen será criado.','26/02/22');

insert into perguntas values(11,default,'É possível baixar MODS no minecraft?','MODS', '2022-11-02');
insert into respostas values(8,2,'Sim meu mano, da para baixar',curDate());

insert into perguntas values(6,default,'Como achar o portal do End?','DICAS', '2022-11-20');
insert into respostas values(14,3,'Você precisa pegar o olho do enderman e ele vai te guiando ate o portal',curDate());

insert into perguntas values(7,default,'Como entrar na colmeia do minecraft?','DICAS', '2022-10-20');
insert into respostas values(11,4,'Não tem como entrar sem usar mod, o mod que eu uso é o Bumblezone','2022-10-21');

insert into perguntas values(9,default,'Como chocar o ovo do ender dragon?','DICAS', '2022-11-05');
insert into respostas values(2,5,'Olá filhodoN3y, infelizmente não é possível chocar o ovo do ender dragon sem utilizar MODS. 
O ovo fica apenas como um troféu após concluir o jogo.','2022-11-07');

insert into perguntas values(12,default,'Como fazer uma armadura de tartaruga?','DICAS', '2022-11-01');
insert into respostas values(5,6,'Olá jotóba_MOkano, utilizando as escamas que dropam de filhotes de tartaruga, com elas se formam apenas um CAPACETE.','2022-11-03');

insert into perguntas values(1,default,'Não consigo abrir meu minecraft','BUGS', '2022-09-21');
insert into respostas values(11,7,'Vose tem o java imstalado no seu computador? Se vc tiver, atualiza os drivis do pc','2022-10-21');



