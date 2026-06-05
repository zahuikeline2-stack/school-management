import Database from "better-sqlite3";
const db =new Database ('school.db');

const Eleve=`
    CREATE TABLE IF NOT EXISTS Students(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        matricule TEXT NOT NULL,
        nom TEXT NOT NULL,
        prenom TEXT NOT NULL,
        age INTEGER NOT NULL,
        class TEXT NOT NULL
    )
`;
db.exec(Eleve);
const Etudiant = db.prepare(`
       INSERT INTO Students ( matricule, nom, prenom,age,class)
       VALUES(?, ?, ?, ?, ?)
    `)
    ;

Etudiant.run('16025297h', 'zahui','keline,',25,'TD3');


///table techeur
const prof=`
CREATE TABLE IF NOT EXISTS teachers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        matière TEXT NOT NULL
)
`;
db.exec(prof)

const professeur=db.prepare(`
    INSERT INTO teachers( nom, matière)
    VALUES(?, ?)

    `)
   professeur.run( 'zahui','svt');



