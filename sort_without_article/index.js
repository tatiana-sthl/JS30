const books = ["Loin de la foule déchainée", "Les allumettes suédoises", "Au coeur de l'Ouest", 
"La joueuse de go", "Le magasin des suicides", "Le seigneur des anneaux", "Les bienveillantes",
"Une gourmandise", "La vie des eles", "Des vies en mieux", "A tout jamais", "A l'est d'Eden"];

function strip(bookName) {
    return bookName.replace(/^(la |le |a |une |un |des )/i, '').trim();
}

const sortedBooks = books.sort(function (a, b) {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
});

console.log(sortedBooks);