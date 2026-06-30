import { poserQuestion } from "../../utils/helpers.js";
import { addAbsence,updateAbsence,getAbsence } from "../../services/absencesService.js";
import { menuAdmin } from "./menuAdmin.js";

function gestionAbsence(){
    console.log(`
=========================
     GESTION ABSENCES
=========================

1. Enregistrer absence
2. Justifier absence
3. Historique absences
4. Retour menu admin
        `)

        ///ajouter une absebce
       
    if(choix === '1'){
        const student_id = poserQuestion("ID de l' etudiant :");
        const date = poserQuestion(" La date :")
        const status = poserQuestion(" status :");
        addAbsence(student_id,date,status)
    }

    ////justifier l' absences
    else if(choix==="2"){
        const id = poserQuestion ("ID l' absence de :")
        const Satus = poserQuestion(" Absences justifier ou non justifier :")
        updateAbsence(Satus,id)
    }
    ///Consulter l’historique des absences
    else if(choix==="3"){
        const studentID = poserQuestion("ID de l' etudiant :")
        const historique = getAbsence(studentID)
historique.forEach(element => {
    console.log(`
ID : ${element.id}
ÉTUDIANT : ${element.student_id}
DATE : ${element.date}
STATUS : ${element.status}
`);
});
    }
    else{
       menuAdmin()
    }
}
export{
    gestionAbsence
}