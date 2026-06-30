import { poserQuestion } from "../../utils/helpers.js";
import { addStudent,getStudentById,getStudents,updateStudent,deleteStudent } from "../../services/studentService.js";
import { menuAdmin } from "./menuAdmin.js";

function gesionStudents(){
console.log(`

    ==========================
         GESTION ÉTUDIANTS
    ==========================

1. Ajouter étudiant
2. Modifier étudiant
3. Supprimer étudiant
4. Rechercher un étudiant
5. Lister des étudiants
6. Retour menu admin
    `)
    const choix = poserQuestion("choix :");
    if(choix === '1'){
        const matricule = poserQuestion("votre matricule :");
        const nom = poserQuestion(" votre nom :")
        const prenom = poserQuestion(" votre prenom :");
        const age = poserQuestion("votre age :")
        const classe = poserQuestion("votre classe :");
        const user_id = poserQuestion("user_id :");
        addStudent(matricule,nom,prenom,age,classe,user_id)
    }
    else if (choix === "2") {

    const id = poserQuestion("ID de l'étudiant à modifier : ");

    const student = getStudentById(id);

    if (!student) {
        console.log("Étudiant introuvable !");
    }

    else {

        const matricule = poserQuestion("Nouveau matricule : ");
        const nom = poserQuestion("Nouveau nom : ");
        const prenom = poserQuestion("Nouveau prénom : ");
        const age = poserQuestion("Nouvel âge : ");
        const classe = poserQuestion("Nouvelle classe : ");

        updateStudent(id, matricule, nom, prenom, age, classe);

        console.log("Étudiant modifié avec succès !");
    }
}
else if(choix ==="3"){
     const id = poserQuestion("ID de l'étudiant à modifier : ");
     deleteStudent(id)
     

}
///recherche un etudiant
else if( choix === "4"){
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
////lister des etudiant
else if(choix === "5"){
    const Lister = getStudents()
      Lister.forEach(element => {
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
else{
   menuAdmin()
}
}

export{
    gesionStudents
}