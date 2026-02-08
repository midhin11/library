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
    addBookBtn.disabled = true;
    let form = document.createElement("form");
    form.setAttribute("method", "post");

    let titleInputDiv = document.createElement("div");
    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "The name of the book");
    titleInput.required = true;
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
    authorInput.setAttribute("placeholder", "Who was it written by?");
    authorInput.required = true;
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
    pagesInput.required = true;
    pagesInput.setAttribute("placeholder", "How many pages where there?");
    let pagesLabel = document.createElement("label");
    pagesLabel.setAttribute("for", "pages");
    pagesLabel.textContent = "Pages";
    pagesInputDiv.append(pagesLabel, pagesInput);
    form.appendChild(pagesInputDiv);

    let submitValueBtn = document.createElement("button");
    submitValueBtn.type = "submit";
    submitValueBtn.textContent = "Submit";
    submitValueBtn.setAttribute("class", "submit-data")
    form.appendChild(submitValueBtn);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        addBookBtn.disabled = false;
        title = titleInput.value.trim();
        author = authorInput.value.trim();
        pages = pagesInput.value.trim();

        myLibrary.push(new Book(title, author, pages));
        addBook.removeChild(form);

        let cards = document.querySelector(".cards");

        let newBookTitleContainer = document.createElement("div");
        newBookTitleContainer.setAttribute("class", "title");
        let newBookTitleHeader = document.createElement("div");
        newBookTitleHeader.textContent = "Title:";
        let newBookTitle = document.createElement("div");
        newBookTitle.textContent = myLibrary[0].title;
        newBookTitleContainer.append(newBookTitleHeader, newBookTitle);

        let newBookAuthorContainer =  document.createElement("div");
        newBookAuthorContainer.setAttribute("class", "author");
        let newBookAuthorHeader = document.createElement("div");
        newBookAuthorHeader.textContent = "Written by:";
        let newBookAuthor = document.createElement("div");
        newBookAuthor.textContent = myLibrary[0].author;
        newBookAuthorContainer.append(newBookAuthorHeader, newBookAuthor);

        let newBookPagesContainer =  document.createElement("div");
        newBookPagesContainer.setAttribute("class", "pages");
        let newBookPagesHeader = document.createElement("div");
        newBookPagesHeader.textContent = "Pages:";
        let newBookPages = document.createElement("div");
        newBookPages.textContent = myLibrary[0].pages;
        newBookPagesContainer.append(newBookPagesHeader, newBookPages);

        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.append(newBookTitleContainer, newBookAuthorContainer, newBookPagesContainer)

        cards.append(card);
        myLibrary.pop();
    })

    addBook.appendChild(form);
})


let exBook = new Book("Title", "author", 244);
console.log(exBook.title);
console.log(exBook.id);