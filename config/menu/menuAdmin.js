import { poserQuestion } from "../../utils/helpers.js";
import { gestionUsers } from "./gestionUser.js";
import { gesionStudents } from "./gestionStudent.js";
import { gestionTeacher } from "./gestionTeacher.js";
import { gestionSubject } from "./gestionSubject.js";
import { gestionGrade } from "./gestionGrade.js";
import { gestionAbsence } from "./gestionAbsence.js";
import { Statistiques } from "./Statistique.js";
import log from "../../utils/logger.js";
function menuAdmin(){
    console.log(`
=========================
      MENU ADMIN
=========================

1. Gestion utilisateurs
2. Gestion étudiants
3. Gestion professeurs
4. Gestion matières
5. Gestion notes
6. Gestion absences
7. Statistiques
8. Déconnexion

    `)
    const choix =poserQuestion("choix :")
    if(choix ==="1"){
        gestionUsers()
    }
    else if(choix ==="2"){
        gesionStudents()

    }
    else if(choix ==="3"){
        gestionTeacher()
    }
    else if(choix ==="4"){
        gestionSubject()
    }
    else if(choix==="5"){
        gestionGrade()
    }
    else if(choix==="6")
        gestionAbsence()
    else if(choix==='7'){
        Statistiques()

    }
    else{
        console.log(`
==================================
    DÉCONNEXION RÉUSSIE
==================================

Merci d'avoir utilisé
School Management System.

À bientôt !

==================================
`);
    }
}
export{
    menuAdmin
}