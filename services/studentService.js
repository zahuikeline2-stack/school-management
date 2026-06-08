import db from "../db/base.js";
import Student from "../model/modelStudent.js";
///ajouter un Etudiants

function addStudent(matricule,nom,prenom,age,classe) {
   const insertStudent = db.prepare(`
    INSERT INTO students(matricule,nom,prenom,age,classe)
    VALUES(?,?,?,?,?)
    `)
    insertStudent.run(matricule,nom,prenom,age,classe);
    console.log("Etudiant ajouter avec succès!")

    ///modifier un etudiant//
}
function updateStudent(id,matricule,nom,prenom,age,classe) {
    const uptStudent=db.prepare(`
        UPDATE students
        SET matricule =?,
        nom =?,
        prenom =?,
        age = ?,
        classe = ?
        WHERE id = ?
        `)
        uptStudent.run(matricule,nom,prenom,age,classe,id)
        console.log("Etudiant modifier avec succès!")
}
///supprimer un etudiant

function deleteStudent(id) {
    const DeleStudents = db.prepare(`
        DELETE FROM students
        WHERE id = ?
        `)
        DeleStudents.run(id)
        console.log("Etudiant supprimer avec succès!")
}

////Rechercher un etudiant

function getStudents(id) {
    const geStudents = db.prepare(`
        SELLECT * FROM students
        WHERE id = ?
        `).get(id)
        console.log("Etudiant re avec succès!")
        return geStudents

}
addStudent("143674Y","rethu","keline",25,"td3")
export {
    addStudent,
    getStudents,
    updateStudent,
    deleteStudent
};