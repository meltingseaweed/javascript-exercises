const getTheTitles = function(books) {
    const titles = [];
    books.forEach (book => {
        console.log(book.title);
        titles.push(book.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
