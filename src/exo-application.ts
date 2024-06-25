import 'bootstrap/dist/css/bootstrap.min.css';
import './exo-application.css';
import axios from "axios";
import { Application } from "./entities";

let applications:Application[] = [];
let selected:Application|null = null;

const controls = document.querySelector<HTMLElement>('#controls');
const selectStatus = document.querySelector<HTMLSelectElement>('#status');

selectStatus.addEventListener('change', async () => {
    selected.status = selectStatus.value as any;
    updateDisplay();
    await axios.put('http://localhost:3000/application/'+selected.id, selected);
});

start();

/**
 * Fonction qui initialise l'affichage (va chercher les candidature et les affiche)
 */
async function start() {
    await fetchApplications();
    
    updateDisplay();
}

/**
 * Fonction qui fait une requête pour récupérer les candidature sur le back
 */
async function fetchApplications() {
    const response = await axios.get<Application[]>('http://localhost:3000/application');
    applications = response.data;
}

/**
 * Fonction qui met à jour l'affichage, pour le moment juste la liste des candidatures
 */
function updateDisplay() {
    const target = document.querySelector('#application-list');
    target.innerHTML = '';
    for (const item of applications) {
        const divCol = document.createElement('div');
        divCol.className = 'col-md-3'
        if(item.id == selected?.id) {
            divCol.className+= ' selected';
        }
        divCol.innerHTML = `
            <article class="${item.status}">
                <h3>${item.firstName} ${item.name}</h3>
                <p>${item.session}</p>
            </article>
        `;
        divCol.addEventListener('click', () => {
            selected=item;
            updateDisplay();
        });
        target.appendChild(divCol);
    }
    if(selected) {
        controls.style.display = 'block';
        selectStatus.value = selected.status;
    } else {
        controls.style.display ='none';
    }
}