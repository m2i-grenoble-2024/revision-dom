import { Person } from "./entities";

const promo:Person[] = [
    {name:'Dubois', firstName:'Harry', age: 45},
    {name:'Kitsuragi', firstName:'Kim', age: 35},
    {name:'Everett', firstName:'Lawrence', age: 53},    
];
const ul = document.querySelector<HTMLElement>('#list');

const btnAdd = document.querySelector<HTMLButtonElement>('#btnAdd');
const inputName = document.querySelector<HTMLInputElement>('#name')
const inputFirstName = document.querySelector<HTMLInputElement>('#firstName')
const inputAge = document.querySelector<HTMLInputElement>('#age')


draw();


btnAdd.addEventListener('click', () => {
    
    promo.push({
        name:inputName.value,
        firstName:inputFirstName.value,
        age:inputAge.valueAsNumber
    });
    console.log(promo);
    draw()
});

function draw() {
    ul.innerHTML = '';
    for (const item of promo) {
        // ul.innerHTML += '<li>'+item+'</li>';
        const li = document.createElement('li');
        li.textContent = item.name+' '+item.firstName;
        ul.append(li);
    }

}

let persons:Person[] = [];

let person:Person = {
    name: 'Le nom',
    firstName: 'le prénom',
    age: 20
}