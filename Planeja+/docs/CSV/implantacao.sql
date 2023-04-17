
LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Projetos/Planeja+/docs/CSV/usuario.csv"
INTO TABLE usuario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Projetos/Planeja+/docs/CSV/eventos.csv"
INTO TABLE eventos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Projetos/Planeja+/docs/CSV/listaConvidados.csv"
INTO TABLE listaConvidados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Projetos/Planeja+/docs/CSV/locacoes.csv"
INTO TABLE locacoes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Projetos/Planeja+/docs/CSV/servicos.csv"
INTO TABLE servicos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Projetos/Planeja+/docs/CSV/tiposEventos.csv"
INTO TABLE tiposEventos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
