import { poserQuestion } from "../../utils/helpers.js";
import { addGrade,updateGrade,getGrade,DeleteGrade } from "../../services/gradeService.js";
import { menuAdmin } from "./menuAdmin.js";
let choix =""
function gestionGrade(){
    
do {
    console.log(`
=========================
      GESTION NOTES
=========================

1. Ajouter note
2. Modifier note
3. Supprimer note
4. Calculer la moyenne d'un étudiant
5. Retour menu admin
        `)
         choix = poserQuestion("Choix : ");
        //const choix = poserQuestion("choix :");
        ///ajouter une notes
    if(choix === '1'){
        const student_id = poserQuestion("ID de l' etudiant :");
        const subject_id = poserQuestion(" ID de la matiere :")
        const note = poserQuestion("note :");
        addGrade(student_id,subject_id,note)
    }
    ///modifier une notes
    else if (choix === "2") {
        const note = poserQuestion("Entrez le note à modifier :")
    const studentID = poserQuestion("ID de l'étudiant : ");
    const subjectsID = poserQuestion("ID de la matiere :")
   const modifier = updateGrade(note,studentID,subjectsID)
   console.log(modifier)
    
}
///supprmer une notes
else if(choix ==="3"){
     const id = poserQuestion("ID de la note : ");
    DeleteGrade(id)
     

}
////calculer la moyenne d un etudiant

else if(choix ==="4"){
    const id_Student = poserQuestion("ID de l' etudiant :")
     const resultat = getGrade(id_Student)
     console.log(resultat)
}
} while (choix!=="5");
menuAdmin()
}
export{
    gestionGrade
}
