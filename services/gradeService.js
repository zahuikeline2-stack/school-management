import db from "../db/base";
import Grades from "../model/modelGrades";

///ajouter une note(entre 0et 20)
function addGrade(student_id,subject_id,note){
    if (note < 0 || note > 20){
        return
      console.log("la note doit etre entre 0 et 20")  

    }
    const adGrade = db.prepare(`
        INSERT INTO grades(student_id,subject_id,note)
        VALUES(?,?,?)
        `)
    adGrade.run(student_id,subject_id,note)
    console.log("noté de l' etudiant ajoutée avec succès!")    
}

///Modifier une note

function updateGrade( note,student_id,subject_id){
    const updGrade = db.prepare(`
        UPDATE grades
        SET  note = ?
        WHERE student_id = ? AND subject_id = ? 
        `)
    updGrade.run( note,student_id,subject_id) 
    console.log("noté de l' etudiant modifier avec succès!") 

}

///Supprimer une note

function DeleteGrade(id){
    const DeletGrade = db.prepare(`
        DELETE FROM grades
        WHERE id = ?
        `)
    DeletGrade.run(id)
   console.log("noté de l' etudiant supprimer avec succès!")  

}

////Calculer la moyenne d’un étudiant

