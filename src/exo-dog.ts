import 'bootstrap/dist/css/bootstrap.min.css';
import { Dog } from './entities';
import axios from 'axios';

const rowDogs = document.querySelector<HTMLElement>('#list-dog');

displayDogs();

async function displayDogs() {
    const response = await axios.get<Dog[]>('http://localhost:3000/dog');
    
    for (const item of response.data) {
        createCard(item);
    }
}

function createCard(dogToDisplay:Dog) {
    const divCol = document.createElement('div');
    divCol.className = 'col';

    divCol.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${dogToDisplay.name}</h3>
                <p class="card-text">Breed: ${dogToDisplay.breed}</p>
                <p class="card-text">Birthdate: ${dogToDisplay.birthdate}</p>
            </div>
        </div>
    `;

    rowDogs.append(divCol);
}