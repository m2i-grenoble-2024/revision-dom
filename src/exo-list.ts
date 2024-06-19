const promo:string[] = ['Marc', 'Paul demore', 'Zorro', 'Albert'];
const ul = document.querySelector<HTMLElement>('#list');

draw();

function draw() {
    ul.innerHTML = '';
    for (const item of promo) {
        // ul.innerHTML += '<li>'+item+'</li>';
        const li = document.createElement('li');
        li.textContent = item;
        ul.append(li);
    }

}
