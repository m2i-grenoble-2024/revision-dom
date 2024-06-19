# TS + DOM



## Exercices
### Manipulation DOM + Liste primitive
#### I. Afficher une liste
1. Créer à la racine un nouveau fichier exo-list.html et dans le src un fichier exo-list.ts
2. Faire la structure du HTML et avant la fermeture du body, charger un script src="" avec le chemin du fichier ts (comme dans le index.html)
3. Dans ce fichier html, mettre une ul avec un id et mettre un button avec un id
4. Dans le ts, créer un variable promo typée en tableau de string et mettre quelques prénoms dedans
5. Créer une autre variable dans laquelle on va mettre la ul qu'on récupère via un querySelector
6. Déclarer une fonction draw() qui n'attendra pas d'argument et ne renverra rien. Dans cette fonction, on remet le innerHTML de notre ul à zéro
7. Puis on fait une boucle sur notre promos (la boucle qu'on veut, moi je ferai un for..of), et à chaque tour de boucle, on fait en sorte de rajouter un li dans l'ul, soit via un createElement, soit via une concaténation dans le innerHTML. Dans ce li, on met la valeur actuelle de la boucle
8. On appelle la fonction en dessous de nos variables, ça devrait afficher notre liste de prénom dans le navigateur
#### II. Ajouter un truc dans la liste
1. Faire une variable avec le button querySelector et rajouter lui un addEventListener pour que...
2. ...au click sur le button, on push une nouvelle valeur dans le tableau (par exemple "test")
3. Puis on relance la fonction draw() à la fin de l'event listener (on peut déjà voir le résultat à ce stade)
4. Rajouter un input dans le HTML et le querySelector dans le ts
5. Dans l'event du button faire qu'on récupère la value de l'input pour la push dans le tableau
**Bonus:** rajouter de la validation pour faire qu'on ne puisse pas push un truc vide et que quand on ajoute une valeur ça remette l'input à zéro
**Bonus 2, un peu plus compliqué**: Faire que quand les éléments de la liste s'affichent, il y ait une animation qui les fasse venir depuis l'exterieur de l'ecran (genre de la gauche vers la droite)

#### III- Transformer notre liste de string en liste de Person
1. Modifier le typage de la variable promo pour la passer en tableau de Person. Du coup modifier les valeurs qu'on a par défaut (je vous laisse imaginer des names et des ages)
2. Modifier le draw pour faire en sorte qu'au lieu d'afficher directement item, on affiche le name et le firstName de l'item concaténés
3. Rajouter 2 inputs dans le HTML, un pour le name et un pour l'age qu'on capture dans le ts
4. Modifier l'event click du button pour faire en sorte de push un objet Person dans la liste plutôt que juste une string