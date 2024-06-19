# TS + DOM



## Exercices
### Manipulation DOM + Liste primitive
1. Créer à la racine un nouveau fichier exo-list.html et dans le src un fichier exo-list.ts
2. Faire la structure du HTML et avant la fermeture du body, charger un script src="" avec le chemin du fichier ts (comme dans le index.html)
3. Dans ce fichier html, mettre une ul avec un id et mettre un button avec un id
4. Dans le ts, créer un variable promo typée en tableau de string et mettre quelques prénoms dedans
5. Créer une autre variable dans laquelle on va mettre la ul qu'on récupère via un querySelector
6. Déclarer une fonction draw() qui n'attendra pas d'argument et ne renverra rien. Dans cette fonction, on fait remet le innerHTML de notre ul à zéro
7. Puis on fait une boucle sur notre promos (la boucle qu'on veut, moi je ferai un for..of), et à chaque tour de boucle, on fait en sorte de rajouter un li dans l'ul, soit via un createElement, soit via une concaténation dans le innerHTML. Dans ce li, on met la valeur actuelle de la boucle
8. On appelle la fonction en dessous de nos variables, ça devrait afficher notre liste de prénom dans le navigateur