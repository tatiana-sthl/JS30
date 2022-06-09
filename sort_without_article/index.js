const books = ["Loin de la foule déchainée", "Les allumettes suédoises", "Au coeur de l'Ouest", 
"La joueuse de go", "Le magasin des suicides", "Le seigneur des anneaux", "Les bienveillantes",
"Une gourmandise", "La vie des eles", "Des vies en mieux", "A tout jamais", "A l'est d'Eden"];

function strip(bookName) {
    return bookName.replace(/^(la |le |a |une |un |des )/i, '').trim();
}

const sortedBooks = books.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#books').innerHTML = 
    sortedBooks
        .map(book => `<li>${book}</li>`)
        .join('');

console.log(sortedBooks);