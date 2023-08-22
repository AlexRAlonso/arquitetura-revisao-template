-- Active: 1691620255433@@127.0.0.1@3306
CREATE TABLE news (
    id TEXT NOT NULL PRIMARY KEY UNIQUE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    published_at TEXT DEFAULT(DATETIME('now', 'localtime')),
    author TEXT NOT NULL,
    FOREIGN KEY (author) REFERENCES authors (id)
);

CREATE TABLE authors (
    id TEXT NOT NULL PRIMARY KEY UNIQUE,
    name TEXT NOT NULL,
    cpf TEXT NOT NULL
);

INSERT INTO authors (id, name, cpf) VALUES
('a001', 'Rodrigo', '12345666'),
('a002', 'Elza', '65432111'),
('a003', 'Eliane', '23156455');
INSERT INTO news (id, title, description, author)
VALUES 
('n001', 'Alta no preço dos jogos eletrônicos no Brasil.', 'Notícia sobre os motivos que levam os jogos a serem tão caros no Brasil.', 'a001'),
('n002', 'Frio mais intenso durante o inverno.', 'Notícia atualizando os seus leitores sobre o aquecimento global.', 'a003'),
('n003', 'Pq sufixo gamer encarece tanto os produtos?', 'Comparativo entre produtos "gamers" e não "gamers"', 'a002');