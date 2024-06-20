import axios from 'axios';
import './style.css'


let maVariable:string = 'amfdlkqjds';

let monTableau:string[] = ['test','toust','tast'];
monTableau.push('bidule');

//Trois manière de boucler, je préfère le for..of perso
for (const item of monTableau) {
  console.log(item);
}
//Mais si j'ai besoin de l'index, je ferais un for classique
for (let index = 0; index < monTableau.length; index++) {
  const item = monTableau[index];
  console.log(item); 
}
//ça j'utilise pas trop, mais c'est valide
monTableau.forEach(item => console.log(item));

/**
 * On doit typer les paramètres des fonctions et il est possible
 * de typer le retour de la fonction (si on ne le type pas, ts va
 * le deviner vis à vis de ce qu'on return ou pas)
 */
function addition(a:number,b:number):number {
  return a+b
}


const maDiv = document.querySelector<HTMLDivElement>('#app');
maDiv.innerHTML = 'truc';

getDogs();
async function getDogs() {
  const response = await axios.get('http://localhost:3000/dog');
  console.log(response.data);
}