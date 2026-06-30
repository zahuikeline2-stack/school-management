import { poserQuestion } from "../../utils/helpers.js";
import { addTeacher, updateTeacher, DEleteTeacher, getTeacher } from "../../services/teacherService.js";
import { menuAdmin } from "./menuAdmin.js";

function gestionTeacher() {
    let choix = ""
    do {
            console.log(`
     =========================
        GESTION PROFESSEURS
     =========================
       1. Ajouter professeur
       2. Modifier professeur
       3. Supprimer professeur
       4. Rechercher professeur
       5. Retour menu admin


        `)
        choix = poserQuestion("choix :");
        if(choix === '1'){
        const nom = poserQuestion(" votre nom :")
        const matiere = poserQuestion('votre matiere')
        const user_id = poserQuestion("user_id :");
        addTeacher(nom,matiere,user_id)
    }
    ///modifier un prof
    else if (choix === "2") {

    const id = poserQuestion("ID du professeur à modifier : ");

    const student = getStudentById(id);

    if (!student) {
        console.log("professeur introuvable !");
    }

    else {

        const id = poserQuestion("Nouveau id : ");
        const nom = poserQuestion("Nouveau nom : ");
        const matiere = poserQuestion("Nouvelle matiere : ");

        updateTeacher(id, nom, matiere);

        console.log("Professeur modifié avec succès !");
    }
}
else if(choix ==="3"){
     const id = poserQuestion("ID du professeur à modifier : ");
     DEleteTeacher(id)
     

}
///recherche un professeur
else if( choix === "4"){
      const id = poserQuestion("ID du professeur :")
      const listers = getTeacher(id)
      console.log(`
ID : ${listers.id}
NOM : ${listers.nom}
matiere : ${listers.matiere}
USER_ID : ${listers.user_id}
`);
}
    } while (choix!=="5");
    menuAdmin()

}
export{
    gestionTeacher
}
