import { Person } from "./entities";

const promo:string[] = ['Marc', 'Paul demore', 'Zorro', 'Albert'];
const ul = document.querySelector<HTMLElement>('#list');

const btnAdd = document.querySelector<HTMLButtonElement>('#btnAdd');
const input = document.querySelector<HTMLInputElement>('input')


draw();


btnAdd.addEventListener('click', () => {
    
    promo.push(input.value)
    draw()
});

function draw() {
    ul.innerHTML = '';
    for (const item of promo) {
        // ul.innerHTML += '<li>'+item+'</li>';
        const li = document.createElement('li');
        li.textContent = item;
        ul.append(li);
    }

}

let persons:Person[] = [];

let person:Person = {
    name: 'Le nom',
    firstName: 'le prénom',
    age: 20
}