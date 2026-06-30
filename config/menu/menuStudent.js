import { poserQuestion } from "../../utils/helpers.js";
import { getStudentById } from "../../services/studentService.js";
import { getGradesStudent,getGrade} from "../../services/gradeService.js";
import { getAbsence } from "../../services/absencesService.js";
import { getStudents } from "../../services/studentService.js";

function menuStudent(){
    console.log(`
 =========================
      MENU ÉTUDIANT
=========================

1. Voir mon profil
2. Consulter mes notes
3. Voir ma moyenne
4. Consulter mes absences
5. Voir mes matières
6. Déconnexion
        `)
        const choix = poserQuestion("choix: ")

        do {
            // Voir mon profil
        if(choix==="1"){
            const id = poserQuestion("ID de l'étudiant :")
      const listers = getStudentById(id)
      console.log(`
ID : ${listers.id}
MATRICULE : ${listers.matricule}
NOM : ${listers.nom}
PRENOM : ${listers.prenom}
AGE : ${listers.age} ans
CLASSE : ${listers.classe}
USER_ID : ${listers.user_id}
`);

 }
 ///consulter les notes
        else if(choix==="2"){
         const studentID = poserQuestion("ID de l'étudiant : ");
         const notes = getGradesStudent(studentID);

notes.forEach(element => {

    console.log(`
MATIÈRE : ${element.matiere}
NOTE : ${element.note}
`);
 });
}
///Voir ma moyenne
else if(choix==="3"){
     const studentid = poserQuestion("Votre ID : ");
    const resultat = getGrade(studentid);
   console.log(`
Votre moyenne est : ${resultat.moyenne}/20
`);

}

//Consulter mes absences
else if(choix==="4"){
     const student = poserQuestion("ID de l' etudiant :")
        const historique = getAbsence(student)
historique.forEach(element => {
    console.log(`
ID : ${element.id}
ÉTUDIANT : ${element.student_id}
DATE : ${element.date}
STATUS : ${element.status}
`);
});

}
///voir les matieres
else if (choix === "5") {

    const matieres = getStudents();

    matieres.forEach(eleme => {

        console.log(`
ID : ${eleme.id}
MATIÈRE : ${eleme.nom}
`);
    });

}
        } while (choix=!"6");
        console.log("Vous êtes déconnecté");

}
export{
    menuStudent
    
}