const myLibrary = [];

class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = crypto.randomUUID();
    }
}

let title, author, pages;
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let addBookBtn = document.querySelector(".addbook-btn");
let addBook = document.querySelector(".addbook");
let form = document.querySelector("form");
let cards = document.querySelector(".cards");
addBookBtn.addEventListener("click", ()=>{
    addBookBtn.disabled = true;
    form.classList.remove("hidden");
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();

    addBookBtn.disabled = false;
    title = titleInput.value.trim();
    author = authorInput.value.trim();
    pages = pagesInput.value.trim();

    let book = new Book(title, author, pages)
    myLibrary.push(book);
    form.classList.add("hidden");

    let newBookTitleContainer = document.createElement("div");
    newBookTitleContainer.setAttribute("class", "title");
    let newBookTitleHeader = document.createElement("div");
    newBookTitleHeader.textContent = "Title:";
    let newBookTitle = document.createElement("div");
    newBookTitle.textContent = book.title;
    newBookTitleContainer.append(newBookTitleHeader, newBookTitle);

    let newBookAuthorContainer =  document.createElement("div");
    newBookAuthorContainer.setAttribute("class", "author");
    let newBookAuthorHeader = document.createElement("div");
    newBookAuthorHeader.textContent = "Written by:";
    let newBookAuthor = document.createElement("div");
    newBookAuthor.textContent = book.author;
    newBookAuthorContainer.append(newBookAuthorHeader, newBookAuthor);

    let newBookPagesContainer =  document.createElement("div");
    newBookPagesContainer.setAttribute("class", "pages");
    let newBookPagesHeader = document.createElement("div");
    newBookPagesHeader.textContent = "Pages:";
    let newBookPages = document.createElement("div");
    newBookPages.textContent = book.pages;
    newBookPagesContainer.append(newBookPagesHeader, newBookPages);

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.append(newBookTitleContainer, newBookAuthorContainer, newBookPagesContainer)

    cards.append(card);
})

titleInput.addEventListener("input", validateForm);
authorInput.addEventListener("input", validateForm);
pagesInput.addEventListener("input", validateForm);

function validateForm() {
    if (titleInput.validity.valueMissing) {
        titleInput.setCustomValidity("Title cannot be empty");
    } else {
        titleInput.setCustomValidity("");
    }

    if (authorInput.validity.valueMissing) {
        authorInput.setCustomValidity("Author cannot be empty");
    } else {
        authorInput.setCustomValidity("");
    }

    if (pagesInput.validity.valueMissing) {
        pagesInput.setCustomValidity("Pages required");
    } else {
        pagesInput.setCustomValidity("");
    }
}