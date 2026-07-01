import { poserQuestion } from "../../utils/helpers.js";
import { getStudentById } from "../../services/studentService.js";
import { getGradesStudent, getGrade } from "../../services/gradeService.js";
import { getAbsence } from "../../services/absencesService.js";
import { getStudents } from "../../services/studentService.js";
import log from "../../utils/logger.js";

let choix = "";

function menuStudent() {

    do {

        console.log(`
==================================
         MENU ÉTUDIANT
==================================

1.  Voir mon profil
2.  Consulter mes notes
3. Voir ma moyenne
4.  Consulter mes absences
5.  Voir mes matières
6.  Déconnexion

==================================
`);

        choix = poserQuestion("Choix : ");

        // Voir mon profil
        if (choix === "1") {

            const id = poserQuestion("ID de l'étudiant : ");
            const listers = getStudentById(id);

            console.log(`
==================================
      PROFIL DE L'ÉTUDIANT
==================================

ID         : ${listers.id}
MATRICULE  : ${listers.matricule}
NOM        : ${listers.nom}
PRÉNOM     : ${listers.prenom}
ÂGE        : ${listers.age} ans
CLASSE     : ${listers.classe}
USER ID    : ${listers.user_id}

==================================
`);

        }

        // Consulter les notes
        else if (choix === "2") {

            const studentID = poserQuestion("ID de l'étudiant : ");
            const notes = getGradesStudent(studentID);

            console.log(`
==================================
           MES NOTES
==================================
`);

            notes.forEach(element => {

                console.log(`
MATIÈRE : ${element.matiere}
NOTE    : ${element.note}/20

----------------------------------
`);

            });

        }

        // Voir ma moyenne
        else if (choix === "3") {

            const studentid = poserQuestion("Votre ID : ");
            const resultat = getGrade(studentid);

            console.log(`
==================================
        MOYENNE GÉNÉRALE
==================================

Votre moyenne est : ${resultat.moyenne}/20

==================================
`);

        }

        // Consulter mes absences
        else if (choix === "4") {

            const student = poserQuestion("ID de l'étudiant : ");
            const historique = getAbsence(student);

            console.log(`
==================================
     HISTORIQUE DES ABSENCES
==================================
`);

            historique.forEach(element => {

                console.log(`
ID       : ${element.id}
ÉTUDIANT : ${element.student_id}
DATE     : ${element.date}
STATUT   : ${element.status}

----------------------------------
`);

            });

        }

        // Voir les matières
        else if (choix === "5") {

            const matieres = getStudents();

            console.log(`
==================================
          MES MATIÈRES
==================================
`);

            matieres.forEach(eleme => {

                console.log(`
ID       : ${eleme.id}
MATIÈRE  : ${eleme.nom}

----------------------------------
`);

            });

        }

    } while (choix !== "6");

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

export {
    menuStudent
}