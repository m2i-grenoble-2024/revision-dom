import 'bootstrap/dist/css/bootstrap.min.css';
import { Dog } from './entities';
import axios from 'axios';

const rowDogs = document.querySelector<HTMLElement>('#list-dog');
const form = document.querySelector<HTMLFormElement>('form');

displayDogs();

/**
 * La fonction displayDogs va faire un appel vers une API Rest qui normalement serait un vrai serveur mais
 * est ici un utilitaire qui fait une API de test.
 * On récupère donc les chiens qui viennent du backend/de la base de données et ensuite on boucle dessus pour
 * les afficher dans le HTML
 */
async function displayDogs() {
    const response = await axios.get<Dog[]>('http://localhost:3000/dog');
    rowDogs.innerHTML = '';
    for (const item of response.data) {
        createCard(item);
    }
}
/**
 * La fonction createCard attend un objet chien en paramètre et va créer un élément HTML, ici une card
 * Bootstrap avec les classes et la structure qui vont bien. Et dans cette card on vient concaténé les 
 * différentes propriétés du chien qu'on souhaite afficher. On pourra donc l'appeler avec des chiens différents
 * pour créer des cards pour chaque chien à afficher
 * @param dogToDisplay Le chien pour lequel on souhaite créer une card
 */
function createCard(dogToDisplay:Dog) {
    const divCol = document.createElement('div');
    divCol.className = 'col';

    divCol.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${dogToDisplay.name}</h3>
                <p class="card-text">Breed: ${dogToDisplay.breed}</p>
                <p class="card-text">Birthdate: ${dogToDisplay.birthdate}</p>
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>
    `;
    const btnDelete = divCol.querySelector('button');
    btnDelete.addEventListener('click', async () => {
        await axios.delete('http://localhost:3000/dog/'+dogToDisplay.id);
        displayDogs();
    })
    rowDogs.append(divCol);
}
/**
 * Ici on surveille le submit du formulaire pour faire que lorsqu'on valide le formulaire (au click ou au
 * entrée dans un input), on annule le comportement par défaut du formulaire avec le preventDefault (par 
 * défaut un formulaire recharge la page, et on ne veut pas ça).
 * Ensuite on récupère chaque valeurs des inputs pour en faire un objet chien qu'on donne à un post pour 
 * faire persister un nouveau chien sur l'API. Une fois que le chien a persisté, on relance l'affichage
 * des chiens pour mettre à jour la liste
 */
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const inputName = document.querySelector<HTMLInputElement>('#name');
    const inputBreed = document.querySelector<HTMLInputElement>('#breed');
    const inputBirthdate = document.querySelector<HTMLInputElement>('#birthdate');
    const newDog:Dog = {
        name: inputName.value,
        breed: inputBreed.value,
        birthdate: inputBirthdate.value
    }
    
    await axios.post('http://localhost:3000/dog', newDog);
    
    displayDogs();
});

/*
 On peut faire les requêtes HTTP sans utiliser axios en utilisant directement la fonction par défaut
 de JS qui est le fetch, qui marche bien mais qui est un peu plus fastidieux à utiliser pour certaines choses 
 */

async function displayDogsWithoutAxios() {
    const response = await fetch('http://localhost:3000/dog');
    const data:Dog[] = await response.json();

    rowDogs.innerHTML = '';
    for (const item of data) {
        createCard(item);
    }
}

async function postWithoutAxios(dog:Dog) {
    const response = await fetch('http://localhost:3000/dog', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dog)
    });

    displayDogsWithoutAxios();
}