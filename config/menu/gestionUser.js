import { poserQuestion } from "../../utils/helpers.js";
import { addUser, DeleteUser, getUser } from "../../services/userService.js";
import { menuAdmin } from "./menuAdmin.js";

function gestionUsers() {

  let choix = "";

  do {

    console.log(`
=========================
 GESTION UTILISATEURS
=========================

1. Ajouter utilisateur
2. Lister utilisateurs 
3. Supprimer utilisateur
4. Retour menu admin
`);

    choix = poserQuestion("Choix : ");

    // AJOUTER
    if (choix === "1") {

      const name = poserQuestion("Nom : ");
      const role = poserQuestion("Role : ");
      const password = poserQuestion("Mot de passe : ");
      const email = poserQuestion("Email : ");
      if(name.trim().length>0 && role.trim().length>0 && password.trim().length>0 && email.trim().length>0){
        addUser(name, role, password, email);
      }
      else {
        console.log("Aucun champs vide n est tolerer ")
      }
    }

    // LISTER
    else if (choix === "2") {
      
      const liste = getUser();

      liste.forEach(element => {
        console.log(`
ID : ${element.id}
NOM : ${element.name}
ROLE : ${element.role}
PASSWORD : ${element.password}
EMAIL : ${element.email}
        `);
      });
    }

    // SUPPRIMER
    else if (choix === "3") {

      const id = poserQuestion("ID à supprimer : ");
      DeleteUser(id);
    }

  } while (choix !== "4");

  menuAdmin();
}

export {
  gestionUsers
};