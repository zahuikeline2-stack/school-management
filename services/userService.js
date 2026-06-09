import db from "../db/base";
import User from "../model/modelUsers";

///ajouter un utilisateur//

function addUser(name,role){
    const insertUser = db.prepare(`
        INSERT INTO  users(name,role)
        VALUES(?,?)
        `)
        insertUser.run(name,role)
    console.log("utilisateur enregistré avec succes !")
}
///supprimer un utilisateur

function DeleteUser(id){
    const DeleUser = db.prepare(`
        DELETE  FROM users
        WHERE id = ?
        `)
        DeleUser.run(id)
          console.log("utilisateur supprimer avec succes !")
}

///listers les utilisateurs

function getUser(){
    const geUser = db.prepare(`
        SELECT * FROM users
    
        `).all()
        return geUser
}

export{
    addUser,
    DeleteUser,
    getUser,
}