import { poserQuestion } from "../../utils/helpers.js";
import { getSubjects } from "../../services/subjectsService.js";
import { getStudents ,getStudentById} from "../../services/studentService.js";
import { addGrade,updateGrade } from "../../services/gradeService.js";
import { addAbsence,updateAbsence,getAbsence } from "../../services/absencesService.js";
function menuTeachers(){
    console.log(`
=========================
     MENU PROFESSEUR
=========================

1. Voir mes matières
2. Lister les étudiants
3. Ajouter une note
4. Modifier une note
5. Enregistrer une absence
6. Justifier une absence
7. Historique des absences
8. Rechercher un etudiant
9.Déconnexion


        `)
    const choix =poserQuestion('choix :')

    ///voir les matiere
    if(choix==="1"){
    const matiere =getSubjects()
    matiere.forEach(element => {
    console.log(`
    ID : ${element.id}
    MATIÈRE : ${element.nom}
    PROFESSEUR ID : ${element.teacher_id}
`);
});
///lister les etudiants
    }
else if(choix==="2"){
    const lister = getStudents()
    lister.forEach(element => {
        console.log(`
         ID : ${element.id}
MATRICULE : ${element.matricule}
 NOM: ${element.nom}
PRENOM: ${element.prenom}
AGE: ${element.age} ans 
CLASSE: ${element.classe} 
user_id: ${element.user_id}
            `)
        
      });

}
///ajouter une notes
else if(choix==="3"){
    
        const student_id = poserQuestion("ID de l' etudiant :");
        const subject_id = poserQuestion(" ID de la matiere :")
        const note = poserQuestion("note :");
       const ajouter= addGrade(student_id,subject_id,note) 
       console.log(ajouter)
}

//4. Modifier une note

else if(choix==="4"){
     const note = poserQuestion("Entrez le note à modifier :")
    const studentID = poserQuestion("ID de l'étudiant : ");
    const subjectsID = poserQuestion("ID de la matiere :")
   const modifier = updateGrade(note,studentID,subjectsID)
   console.log(modifier)
  
}
// Enregistrer une absence
else if(choix==="5"){
const student_id = poserQuestion("ID de l' etudiant :");
        const date = poserQuestion(" La date :")
        const status = poserQuestion(" status :");
     const Enregistrer=   addAbsence(student_id,date,status)
     console.log(Enregistrer)
}
///Justifier une absence
else if(choix==="6"){
    const id = poserQuestion ("ID l' absence de :")
        const Satus = poserQuestion(" Absences justifier ou non justifier :")
       const justifier= updateAbsence(Satus,id)
       console.log(justifier)

}

///Historique des absences
else if(choix==="7"){
    const studentID = poserQuestion("ID de l' etudiant :")
        const historique = getAbsence(studentID)
        console.log(historique)
}
///Rechercher un etudiant
else if(choix==="8"){
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
else{
    console.log("vous etes déconnecter ")
}
}
export{
    menuTeachers
}