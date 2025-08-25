 TP_selenium

Ce projet contient des scripts Selenium pour automatiser des actions sur le site SauceDemo.  

## Installation des dépendances

Pour installer les dépendances :  
- Ouvrez le terminal intégré  
- Clonez le dépôt :  
  ```bash
  git clone https://github.com/SB-y/TP_selenium.git

    Entrez dans le dossier et installez les dépendances :

    cd TP_selenium
    npm install
 - Cette commande installe toutes les dépendances listées dans package.json, y compris selenium-webdriver.

## Lancement des scripts

Pour lancer les scripts :

    Appuyez sur RUN dans le terminal
    
    OU

    Utilisez les commandes suivantes selon le script à lancer :

    node script1.js
    node script2.js
    node script3.js

## Description des scripts

-> Script 1

    Connexion avec l’utilisateur standard_user

    Listing des 6 articles dans le terminal

-> Script 2

    Connexion avec l’utilisateur standard_user

    Ajout de 2 articles au panier

    Passage en checkout et validation de la commande

    Remplissage des 3 champs (prénom, nom, code postal)

    Poursuite en appuyant sur Continue et Finish

    Vérification dans le terminal du bon message

-> Script 3

    Connexion avec l’utilisateur standard_user

    Application d'un tri du moins cher au plus cher

    Récupération des 3 produits les moins chers avec nom et prix

    Affichage de ces 3 produits dans le terminal

## Difficultés rencontrées

    Cibler correctement les boutons "Add to cart", car certains ont des ID avec des caractères spéciaux

    Trouver la bonne méthode pour filtrer par prix croissant

    Sélectionner la bonne option du filtre
