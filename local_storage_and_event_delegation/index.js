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

    this.reset();
}

addItems.addEventListener('submit', addItem);