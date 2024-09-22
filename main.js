let library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary () {
    while(true) {

    }
}

function displayBooks (){
    library.forEach(function(book){
        console.log(book.title);
    });
}

// creating form inputs for user input

let titleDiv = document.querySelector(".title");
let titleLabel = document.createElement("label");
titleLabel.textContent = "Title";
titleLabel.setAttribute("for", "title");
let titleInput = document.createElement("input");
titleInput.setAttribute("id", "title");
titleInput.setAttribute("type", "text");


let authorDiv = document.querySelector(".author");
let authorLabel = document.createElement("label");
authorLabel.textContent = "Author"
authorLabel.setAttribute("for", "author");
let authorInput = document.createElement("input");
authorInput.setAttribute("id", "author");
authorInput.setAttribute("type", "text");


let pagesDiv = document.querySelector("form > div:nth-child(3)");
let pagesLabel = document.createElement("label");
pagesLabel.textContent = "Pages"
pagesLabel.setAttribute("for", "pages");
let pagesInput = document.createElement("input");
pagesInput.setAttribute("id", "pages");
pagesInput.setAttribute("type", "number");

// creating submit button for form
let form = document.querySelector("form");
let submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "button");
submitBtn.setAttribute("class", "submitBtn")
submitBtn.textContent = "Submit";

// add button event listener to append the elemtns
let addButton = document.querySelector(".add");
addButton.addEventListener("click", function() {
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);

    authorDiv.appendChild(authorLabel);
    authorDiv.appendChild(authorInput);

    pagesDiv.appendChild(pagesLabel);
    pagesDiv.appendChild(pagesInput);

    form.appendChild(submitBtn);

    // submit button event listener
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        if(titleInput.value === '' || authorInput.value === '' || pagesInput.value === ''){
            alert("TRY AGAIN!");
        }

        else {
            let title = titleInput.value;
            let author = authorInput.value;
            let pages = pagesInput.value;
            library.push(new Book(title, author, pages));

            let allCards = document.querySelector(".cards")
            let card = document.createElement("div");
            card.setAttribute("class", "card")

            let titleCardName = document.createElement("div");
            titleCardName.textContent = `Book: ${title}`;
            titleCardName.setAttribute("class", "book-card-name");
            card.appendChild(titleCardName);

            let authorCardName = document.createElement("div");
            authorCardName.textContent = `Author: ${author}`;
            authorCardName.setAttribute("class", "author-card-name");
            card.appendChild(authorCardName);

            let pagesCardName = document.createElement("div");
            pagesCardName.textContent = "Pages: " + pages;
            pagesCardName.setAttribute("class", "pages-card-name");
            card.appendChild(pagesCardName);

            let removeBook = document.createElement("button");
            removeBook.setAttribute("class", "remove-book");
            removeBook.textContent = "Remove book";
            card.appendChild(removeBook);

            let readLabel = document.createElement("label");
            readLabel.setAttribute("for", "read")
            readLabel.textContent = "Read";
            let readCheckbox = document.createElement("input");
            readCheckbox.setAttribute("type", "checkbox");
            readCheckbox.setAttribute("id", "read");
            card.appendChild(readLabel);
            card.appendChild(readCheckbox);

            removeBook.addEventListener("click", function() {
                allCards.removeChild(card);  // Remove the book card
            });
            
            allCards.appendChild(card);

            // Clear form inputs after submitting
            titleInput.value = '';
            authorInput.value = '';
            pagesInput.value = '';
        }
        
    });
}); 