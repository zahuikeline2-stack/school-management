#  School Management System

## Présentation

Ce projet est une application de gestion d'école réalisée en **JavaScript (Node.js)** avec une base de données **SQLite**. L'application fonctionne uniquement dans le terminal (CLI).

Son objectif est de permettre la gestion des utilisateurs, des étudiants, des professeurs, des matières, des notes et des absences de manière simple.

## Fonctionnalités

* Ajouter, supprimer et afficher des utilisateurs.
* Gérer les étudiants.
* Gérer les professeurs.
* Gérer les matières.
* Ajouter, modifier et consulter les notes.
* Enregistrer et justifier les absences.
* Afficher quelques statistiques (meilleur étudiant, moyenne générale, nombre d'absences).
* Enregistrer les actions dans un fichier de logs.

## Technologies utilisées

* JavaScript (Node.js)
* SQLite
* better-sqlite3
* fs
* path

## Structure du projet

```text
school-management/
│── db/
│── models/
│── services/
│── utils/
│── logs/
│── config/
│── main.js
```

## Installation

Installer les dépendances :

```bash
npm install
```

Lancer le projet :

```bash
node main.js
```

## Ce que j'ai appris

Grâce à ce projet, j'ai appris à :

* organiser un projet en plusieurs dossiers ;
* utiliser SQLite pour enregistrer des données ;
* réaliser les opérations CRUD (Créer, Lire, Modifier, Supprimer) ;
* utiliser des modules en JavaScript ;
* créer une application en ligne de commande ;
* enregistrer les actions dans un fichier de logs.

## Auteur

**Keline Zahui**

