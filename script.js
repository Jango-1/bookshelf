const myLibrary = [];

const bookNameInput = document.querySelector("#book_name");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const submitBookButton = document.querySelector(".submit")

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBooktoLibrary() {

}

submitBookButton.addEventListener("click", () => {
    return addBooktoLibrary();
});