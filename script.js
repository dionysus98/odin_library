let library = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${status}`;
    }
    this.push = function () {
        library.push(this.info())
    }
}

const book1 = new Book('Demons', 'Fyodor Dostoevsky', 788, 'read already');
console.log(book1);
