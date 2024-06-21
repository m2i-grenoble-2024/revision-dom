# TS + DOM

## How To use
1. Cloner le projet
2. Installer les dépendances avec `npm install` ou `npm i`
3. Lancer le projet avec `npm run dev`
4. Accéder au résultat sur http://localhost:5173

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

### Requêtes HTTP depuis JS/TS
Mise en place : 
* avoir un db.json avec des datas à l'intérieur (par défaut, 5 dogs)
* Lancer le json-server avec la commande `npm run mock-api` dans un terminal
* Dans un autre terminal (il faut garder le premier avec le json-server), lancer le projet TS avec `npm run dev` (s'il tourne déjà pas la peine de le relancer)
* Pour constater que ça marche, on va sur http://localhost:5173 et là dans la console on devrait avoir un Array de 5 objets chien qui s'affiche et pas d'erreur

#### I. Installation et mise en place structure avec bootstrap
1. Installer bootstrap avec npm
2. Créer un nouveau fichier exo-dog.html et un src/exo-dog.ts, faire une structure HTML et charger le script en module comme on a déjà fait dans les 2 autres fichiers
3. Dans le fichier ts, commencer par mettre un `import 'bootstrap/dist/css/bootstrap.min.css'` (Pour voir si ça marche, on peut mettre un ptit <button class="btn btn-primary">test</button> dans notre html voir s'il s'affiche stylisé)
4. Dans le HTML, mettre une div.container-fluid, un h1 et une div.row avec un id list-dog
5. Capturer le list-dog dans le TS avec un querySelector puis créer une fonction createCard() qui va createElement une div puis qui va assigner au innerHTML avec des backtick le HTML d'une card bootstrap classique (à récupérer sur la doc) et append la div au list-dog
6. Essayer de lancer cette fonction plusieurs fois et de mettre les classes col qui vont bien sur la div et la row pour qu'on ait 4 card par ligne en lg, 3 en sm et 1 seule en mobile

#### II. Les chiens !
1. Dans le src/entities.ts créer une nouvelle interface Dog avec un id en number, un name, une breed et une birthdate les 3 en string
2. Modifier la fonction createCard pour lui rajouter un argument de type Dog et concaténer les informations du chien dans la card avec le ${} (le name dans le titre, la breed et la birthdate dans le text). Faire un appel de cette fonction en lui donnant un objet chien en dur en paramètre (celui ci par exemple : `{id:1,name:'Fido',breed:'Corgi', birthdate:'2023-01-04'}`)
3. Créer une fonction async displayDogs et dedans utiliser axios pour await un get sur http://localhost:3000/dog (on peut typer le contenu du get en faisant `axios.get<Dog[]>(...)`), récupérer les data de la response (comme dans l'exemple) et faire une boucle dessus et à chaque tour de boucle lancer la fonction createCard en lui donnant l'itérateur
4. Aller profiter de la liste de chiens qui s'affiche

#### III. Formulaire d'ajout de chien
1. Dans le html, créer un form avec un button et 3 label/input, 2 en type text, un en type date (pour chacune des propriétés du chien), avec les class bootstrap qui vont bien. 
2. Côté TS, capturer le form avec un querySelector et lui rajouter un event listener sur son 'submit'. Dans les paramètres de la fonction du listener, rajouter un argument (event) et en premier dans la fonction faire un `event.preventDefault()`
3. Dans l'event, capturer les 3 inputs puis créer une variable newDog de type Dog à laquelle on va assigner un objet avec la value des 3 inputs. On peut faire un petit console log pour voir si ça fonctionne bien. (dans l'entities, on peut mettre id?:number pour rendre l'id optionnel dans l'objet chien)
4. Si c'est le cas, alors on utilise axios pour faire cette fois ci un post vers http://localhost:3000/dog en donnant notre variable dog en deuxième argument du post (il va falloir du coup passer la fonction de l'event en async pour pouvoir await le post). Ça devrait techniquement rajouter un chien dans la base de données et si on recharge la page, on le voit apparaître.
5. Pour faire qu'on ait pas à recharger la page pour voir notre nouveau chien, on fait en sorte de relancer le displayDogs() une fois le post fait.

#### IV. Suppression d'un chien
1. Modifier le innerHTML du create card pour rajouter un bouton delete en bas de la card
2. Toujours dans le createCard, utiliser la variable qui contient la div pour faire un querySelector dessus pour récupérer le bouton en question, le mettre dans une variable et rajouter un eventListener au click dessus (on peut faire un console.log du chien dedans pour voir si ça fonctionne)
3. Dans cet eventListener, utiliser axios pour faire un delete vers l'url http://localhost:3000/dog/ et à la fin de l'url concaténer l'id du chien (on oublie pas d'async-await)
4. Relancer le displayDogs pour mettre à jour la liste des chiens

**Bonus Multisuppression :** Faire en sorte qu'on puisse sélectionner plusieurs chiens (genre au click sur les card, ça ajoute le chien cliqué à un tableau de sélection), et quand on a des chiens sélectionné on a un bouton Delete All qu'on peut cliquer qui va boucler sur la sélection pour supprimer tous les chiens