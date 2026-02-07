const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

let title, author, pages;
let addBookBtn = document.querySelector(".addbook-btn");
let addBook = document.querySelector(".addbook");
addBookBtn.addEventListener("click", ()=>{
    let form = document.createElement("form");
    form.setAttribute("action", ".");
    form.setAttribute("method", "post");

    let titleInputDiv = document.createElement("div");
    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("value", "title");
    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";
    titleInputDiv.append(titleLabel, titleInput );
    form.appendChild(titleInputDiv);

    let authorInputDiv = document.createElement("div");
    let authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "author");
    authorInput.setAttribute("name", "author");
    authorInput.setAttribute("value", "author");
    let authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author");
    authorLabel.textContent = "Author";
    authorInputDiv.append(authorLabel, authorInput);
    form.appendChild(authorInputDiv);

    let pagesInputDiv = document.createElement("div");
    let pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "number");
    pagesInput.setAttribute("id", "pages");
    pagesInput.setAttribute("name", "pages");
    pagesInput.setAttribute("value", "20");
    let pagesLabel = document.createElement("label");
    pagesLabel.setAttribute("for", "pages");
    pagesLabel.textContent = "Pages";
    pagesInputDiv.append(pagesLabel, pagesInput);
    form.appendChild(pagesInputDiv);

    let submitValueBtn = document.createElement("button");
    submitValueBtn.textContent = "Submit";
    form.appendChild(submitValueBtn);
    submitValueBtn.addEventListener("click", (e) => {
        e.preventDefault();
        title = titleInput.value;
        author = authorInput.value;
        pages = pagesInput.value;

        myLibrary.push(new Book(title, author, pages));
        addBook.removeChild(form);
    })

    addBook.appendChild(form);
})


let exBook = new Book("Title", "author", 244);
console.log(exBook.title);
console.log(exBook.id);