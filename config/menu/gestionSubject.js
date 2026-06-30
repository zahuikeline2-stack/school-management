import { poserQuestion } from "../../utils/helpers.js";
import { addSubjects,affectSubject,getSubjects } from "../../services/subjectsService.js";
import { menuAdmin } from "./menuAdmin.js";

function gestionSubject(){
    console.log(`
=========================
 GESTION MATIÈRES
=========================

1. Ajouter matière
2. Lister matières
3. Affecter professeur
4. Retour menu admin
        `)
         const choix = poserQuestion("choix :");
    if(choix === '1'){
        const nom = poserQuestion(" nom :")
        const teacher_id = poserQuestion('teacher_id :');
        addSubjects(nom,teacher_id)
    }
      ///Lister les matieres

    else if(choix ==="2"){
     const liste =getSubjects()
     liste.forEach(element => {
    console.log(`
ID : ${element.id}
MATIÈRE : ${element.nom}
PROFESSEUR ID : ${element.teacher_id}
`);
});
}
    ///affecter un professeur à une matière

    else if (choix === "3") {
        const teacherId = poserQuestion("ID du professeur : ");
const subjectId = poserQuestion("ID de la matière : ");

  const resultat = affectSubject(teacherId, subjectId);
  console.log(resultat)
    }
else{
    menuAdmin()
}
}
export{
    gestionSubject
}