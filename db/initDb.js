const db = require("./base");

db.prepare (`
    CREATE TABLE IF NOT EXISTS students(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    matricule TEXT UNIQUE,
    nom TEXT,
    prenom TEXT,
    age INTEGER,
    classe TEXT
    )
    `).run()
    db.prepare (`
        CREATE TABLE IF NOT EXISTS teachers(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT,
         matiere TEXT 
        )
        `).run()