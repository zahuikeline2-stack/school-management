
import { login } from "../services/userService.js";
import { poserQuestion } from "../utils/helpers.js";
import { menuAdmin } from "./menu/menuAdmin.js";
import { menuTeachers } from "./menu/menuTeacher.js";
import { menuStudent } from "./menu/menuStudent.js";

console.log(`
=================================
 SYSTÈME DE GESTION D'ÉCOLE
=================================

1. Se connecter
2. Quitter
`);

const choix = poserQuestion("Choix : ");

if (choix === "1") {

    const email = poserQuestion("Email : ");
    const password = poserQuestion("Mot de passe : ");

    const user = login(email, password);

    //  Vérification 
    if (!user) {
        console.log(" Email ou mot de passe incorrect");
    } 
    else {
        console.log(" BIENVENUE " + user.name);

        if (user.role === "professeur") {
            console.log(" Vous êtes un professeur");
            menuTeachers()
        } 
        else if (user.role === "étudiant") {
            console.log(" Vous êtes un étudiant");
            menuStudent()
        } 
        else {
            console.log("  Vous êtes un admin");
          menuAdmin()
        }
    }

} 
else {
    console.log(" Au revoir");
}
