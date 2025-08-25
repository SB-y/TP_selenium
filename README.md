# TP_selenium

Ce projet contient des scripts Selenium pour automatiser des actions sur le site SauceDemo. 

Pour installer les dépendances : 
-> ouvrez le terminal intégré
-> clonez le dépôt avec `git clone https://github.com/SB-y/TP_selenium.git`
-> entrez dans le dossier `cd TP_selenium` et tapez `npm install`

Pour lancer les scripts :
-> appuyez sur RUN dans le terminal
OU
-> utilisez `node script1.js` ou `node script2.js` ou `node script3.js` selon le script à lancer 

Les scripts effectuent les actions suivantes :
-> script 1
connexion avec l’utilisateur `standard_user`
listing des 6 articles dans le terminal

-> script 2
connexion avec l’utilisateur `standard_user`
ajout de 2 articles au panier
passage en checkout et validation de la commande
remplissage des 3 champs
poursuite en appuyant sur continue et finish
vérification dans le terminal du bon message

-> script 3
connexion avec l’utilisateur `standard_user`
application d'un tri du moins cher au plus cher
récupération des 3 produits les moins chers avec nom et prix dans le terminal


Les principales difficultés rencontrées ont été : 
• cibler correctement les boutons "Add to cart", car certains ont des ID avec des caractères spéciaux
• trouver la bonne méthode filtrer par prix croissant
• sélectionner la bonne option du filtre
