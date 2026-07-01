import { poserQuestion } from "../../utils/helpers.js";
import { identifiStudent,moyenneGenerale,CompterAbsences } from "../../services/statistiqueService.js";
import { menuAdmin } from "./menuAdmin.js";

function Statistiques(){
    let choix =""
    do {
        console.log(`
=========================
     STATISTIQUES
=========================

1. Meilleur étudiant
2. Moyenne générale
3. Nombre d'absences
4. Retour menu admin
        `)
        // Identifier le meilleur étudiant (selon moyenne)
         choix = poserQuestion("choix :")
        if(choix==='1'){
           const meilleur = identifiStudent();
        console.log(`
       Nom : ${meilleur.nom}
       Moyenne : ${meilleur.moyenne}
   `);

        }
        //Calculer la moyenne générale
        else if(choix==="2"){
            const generale = moyenneGenerale()
            console.log(generale)
        }

        ///Compter les absences
        else if(choix==="3"){
            const Compter = CompterAbsences()
            console.log(Compter)
    
   }
   
    } while (choix !=="4");
    menuAdmin()
}
export{
    Statistiques
}
   