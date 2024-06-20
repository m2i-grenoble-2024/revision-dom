import 'bootstrap/dist/css/bootstrap.min.css';

const rowDogs = document.querySelector<HTMLElement>('#list-dog');

createCard();
createCard();
createCard();
createCard();
createCard();
createCard();
createCard();
createCard();
createCard();

function createCard() {
    const divCol = document.createElement('div');
    divCol.className = 'col';

    divCol.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Coucou</h3>
                <p class="card-text">Yes</p>
            </div>
        </div>
    `

    rowDogs.append(divCol);
}