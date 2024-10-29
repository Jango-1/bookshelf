const myLibrary =[];

const submit = document.querySelector(".submit");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    addBooktoLibrary();
});

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBooktoLibrary() {
    const bookName = document.querySelector("#book_name").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPages = document.querySelector("#pages").value;
    const bookStatus = document.querySelector("#readStatus").checked;
    
    const bookDetails = new Book(bookName, bookAuthor, bookPages, bookStatus);

    myLibrary.push(bookDetails);
}