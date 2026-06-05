const db = require("../db/base")
//ajouter un etudiant
function addStudent( matricule, nom, prenom, age, classe){
    db.prepare(`
        INSERT INTO students( matricule,nom,prenom,age,classe)
        values(?,?,?,?,?)
    `)
    .run( matricule,nom,prenom,age,classe);
   
}
module.exports = { addStudent };
//modifier un etudiant

function moStudent(id,matricule,nom,prenom,age,classe){
    db.prepare(`
       UPDATE students
      Set matricule=?,nom=?,prenom=?,
      age=?,classe=?
      where id=?
        `).run(matricule,nom,prenom,age,classe ,id)
}
 module.exports = {moStudent};
 //supprimer un etudiant
 function deleteStudent(id){
    db.prepare(`
        DELETE FROM students
        where id=?

        `).run(id)
 }
 module.exports={deleteStudent}