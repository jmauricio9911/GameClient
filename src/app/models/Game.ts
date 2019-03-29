export interface Game {
    id?: number;
    title?: string;
    descripcion?: string;
    imagen?: string;
    created_at?: Date;
}


/*


CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE game(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    descripcion VARCHAR(255),
    imagen VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


RENAME TABLE game to games;

DESCRIBE games;



*/