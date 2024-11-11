const myLibrary =[];
const bookShelfArea = document.querySelector(".bookshelf-area");
const submit = document.querySelector(".submit");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    displayBook();
});

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    const bookName = document.querySelector("#book_name").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPages = document.querySelector("#pages").value;
    const bookStatus = document.querySelector("#readStatus").checked;
    
    const bookDetails = new Book(bookName, bookAuthor, bookPages, bookStatus);

    myLibrary.push(bookDetails);
}

function displayBook() {
    bookShelfArea.innerHTML = "";  // Clear existing content

    myLibrary.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add('book-item');

        const titleElement = document.createElement("h2");
        titleElement.textContent = book.title;

        const authorElement = document.createElement("p");
        authorElement.textContent = "Author: " + book.author;

        const pagesElement = document.createElement("p");
        pagesElement.textContent = "Pages: " + book.pages;

        const readStatusElement = document.createElement("p");
        readStatusElement.textContent = "Read: " + (book.readStatus ? "Yes" : "No");

        bookItem.append(titleElement, authorElement, pagesElement, readStatusElement);
        bookShelfArea.appendChild(bookItem);
    });
}