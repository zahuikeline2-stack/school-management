import db from "../db/base.js";

// Identifier le meilleur étudiant (selon moyenne)

function identifiStudent(){
        const identifStudent = db.prepare(`
            SELECT student_id , AVG(note) AS moyenne FROM grade
            GROUP BY student_id
            ORDER BY moyenne DESC
            LIMIT 1

            `).get();
            return identifStudent
}

///Calculer la moyenne générale

function moyenneGenerale(){
     const moyenGenerale = db.prepare(`
        SELECT AVG(note) AS moyenne_generale FROM grade
        `).get()
        return moyenGenerale
}    

///Compter les absences
function CompterAbsences(){
    const CompteAbsences = db.prepare(`
        SELECT COUNT(*)  AS total_absences FROM absences
        `).get()
        return CompteAbsences
}
export{
    identifiStudent,
    moyenneGenerale,
    CompterAbsences
}