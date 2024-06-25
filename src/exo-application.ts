import axios from "axios";
import { Application } from "./entities";

let applications:Application[] = [];

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
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${item.firstName} ${item.name}</h3>
            <p>${item.session}</p>
        `;
        target.appendChild(article);
    }
}