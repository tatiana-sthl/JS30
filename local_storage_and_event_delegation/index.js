const addItems = document.querySelector('.add-plant');
const itemsList = document.querySelector('.plants');
const items = [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    
    items.push(item);
    populateList(items, itemsList); 
    localStorage.setItem('items', JSON.parse(items));
    this.reset();
}

function populateList(plants = [], plantsList) {
    plantsList.innerHTML = plants.map((plant, i) => {
        return ` 
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plant.done ? 'checked' : ''} />
                <label for="item${i}">${plant.text}</label>
            </li>
        `;
    }).join('');
}

addItems.addEventListener('submit', addItem);