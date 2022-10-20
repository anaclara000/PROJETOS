drop database if exists cafezinho;
create database cafezinho charset=UTF8 collate utf8_general_ci;
use cafezinho;

create table credito(
    n_lancamento integer not null primary key auto_increment,
    data_lan date not null,
    descricao varchar(250) not null,
    valor float(5,2),
    tipo varchar(1) not null
);

create table debito(
    n_lancamento integer not null primary key auto_increment,
    data_lan date not null,
    descricao varchar(250) not null,
    valor float(5,2),
    tipo varchar(1) not null
);

describe credito;
describe debito;
show tables;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/2des/Projeto Welli/docs/lancamentos.csv'
INTO TABLE credito
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/2des/Projeto Welli/docs/lancamentos.csv'
INTO TABLE debito
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from credito;
select * from debito;

