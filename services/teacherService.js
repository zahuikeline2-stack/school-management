import db from "../db/base";
import Teacherr from "../model/modelTeacher";

///Ajouter un prof//

function addTeacher(nom,matiere){
    const insertTeacher = db.prepare(`
        INSERT INTO teachers(nom,matiere)
        values(?,?)
        `)
    insertTeacher.run(nom,matiere)
    console.log(" professeur ajouter avec succès!")   
}
///modifier un pro//

function updateTeacher(id,nom,matiere){
    const uptTeacher=db.prepare(`
        UPDATE teachers 
        SET nom = ?,
        matiere = ?
        WHERE id = ?

        `)
    uptTeacher.run(nom,matiere,id)
    console.log("professeur modifier avec succès!")
}

// suprimer un prof

function DEleteTeacher(id){
    const DelTeacher = db.prepare(`
        DELETE FROM teachers
        WHERE id = ?
        `)
    DelTeacher.run(id)
    console.log("professeur supprimer avec succès!")
}

///REchercher un prof

function getTeacher(id) {
    const geTeacher = db.prepare(`
        SELECT * FROM teachers
        WHERE id = ?
        `).get(id)
        return geTeacher
 }

 export{
    addTeacher,
    updateTeacher,
    DEleteTeacher,
    getTeacher
 };