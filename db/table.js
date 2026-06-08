import db from "./base.js";
//table etudiant//
db.exec(`
    CREATE TABLE IF NOT EXISTS students( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    matricule TEXT NOT NULL,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    age INTEGER NOT NULL,
    classe TEXT NOT NULL
    )
    `)

//table prof//

db.exec(`
        CREATE TABLE IF NOT EXISTS teachers(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        matiere TEXT NOT NULL
        )
        
        `)

//table users

db.exec(`
            CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            role TEXT NOT NULL
            )
            `)

//subjects

db.exec(`
            CREATE TABLE IF NOT EXISTS subjects(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            teacher_id INTEGER NOT NULL
            )
            `)

// grades

db.exec(`
             CREATE TABLE IF NOT EXISTS grades (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             student_id INTEGER NOT NULL,
             subject_id INTEGER NOT NULL,
             note INTEGER NOT NULL
             )
            `)

//absences

db.exec(`
        CREATE TABLE IF NOT EXISTS absences(
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         student_id INTEGER NOT NULL,
         date INTEGER NOT NULL,
         status TEXT NOT NULL
        )
        `)

