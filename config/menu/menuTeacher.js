import { poserQuestion } from "../../utils/helpers.js";
import { getSubjects } from "../../services/subjectsService.js";
import { getStudents, getStudentById } from "../../services/studentService.js";
import { addGrade, updateGrade } from "../../services/gradeService.js";
import { addAbsence, updateAbsence, getAbsence } from "../../services/absencesService.js";
import log from "../../utils/logger.js";

function menuTeachers() {

    let choix = "";

    do {

        console.log(`
==================================
        MENU PROFESSEUR
==================================

1.  Voir mes matières
2.  Lister les étudiants
3.  Ajouter une note
4.  Modifier une note
5.  Enregistrer une absence
6.  Justifier une absence
7.  Historique des absences
8.  Rechercher un étudiant
9.  Déconnexion

==================================
`);

        choix = poserQuestion("Choix : ");

        /// Voir les matières
        if (choix === "1") {

            const matiere = getSubjects();

            console.log(`
==================================
         MES MATIÈRES
==================================
`);

            matiere.forEach(element => {

                console.log(`
ID             : ${element.id}
MATIÈRE        : ${element.nom}
PROFESSEUR ID  : ${element.teacher_id}

----------------------------------
`);

            });

        }

        /// Lister les étudiants
        else if (choix === "2") {

            const lister = getStudents();

            console.log(`
==================================
      LISTE DES ÉTUDIANTS
==================================
`);

            lister.forEach(element => {

                console.log(`
ID          : ${element.id}
MATRICULE   : ${element.matricule}
NOM         : ${element.nom}
PRÉNOM      : ${element.prenom}
ÂGE         : ${element.age} ans
CLASSE      : ${element.classe}

----------------------------------
`);

            });

        }

        /// Ajouter une note
        else if (choix === "3") {

            const student_id = poserQuestion("ID de l'étudiant : ");
            const subject_id = poserQuestion("ID de la matière : ");
            const note = poserQuestion("Note : ");

            const ajouter = addGrade(student_id, subject_id, note);

            console.log(`
==================================
      AJOUTE D'UNE NOTE
==================================

${ajouter}

==================================
`);

        }

        /// Modifier une note
        else if (choix === "4") {

            const note = poserQuestion("Nouvelle note : ");
            const studentID = poserQuestion("ID de l'étudiant : ");
            const subjectsID = poserQuestion("ID de la matière : ");

            const modifier = updateGrade(note, studentID, subjectsID);

            console.log(`
==================================
    MODIFICATION DE LA NOTE
==================================

${modifier}

==================================
`);

        }

        /// Enregistrer une absence
        else if (choix === "5") {

            const student_id = poserQuestion("ID de l'étudiant : ");
            const date = poserQuestion("Date : ");
            const status = poserQuestion("Statut : ");

            const enregistrer = addAbsence(student_id, date, status);

            console.log(`
==================================
   ABSENCE ENREGISTRÉE
==================================

${enregistrer}

==================================
`);

        }

        /// Justifier une absence
        else if (choix === "6") {

            const id = poserQuestion("ID de l'absence : ");
            const status = poserQuestion("Justifiée ou non justifiée : ");

            const justifier = updateAbsence(status, id);

            console.log(`
==================================
    ABSENCE MISE À JOUR
==================================

${justifier}

==================================
`);

        }

        /// Historique des absences
        else if (choix === "7") {

            const studentID = poserQuestion("ID de l'étudiant : ");
            const historique = getAbsence(studentID);

            if (historique.length === 0) {

                console.log(`
==================================
      AUCUNE ABSENCE
==================================

Aucune absence trouvée.

==================================
`);

            } else {

                console.log(`
==================================
   HISTORIQUE DES ABSENCES
==================================
`);

                historique.forEach(element => {

                    console.log(`
ID        : ${element.id}
ÉTUDIANT  : ${element.student_id}
DATE      : ${element.date}
STATUT    : ${element.status}

----------------------------------
`);

                });

            }

        }

        /// Rechercher un étudiant
        else if (choix === "8") {

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

    } while (choix !== "9");

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
    menuTeachers
}