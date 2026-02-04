const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary() {

}

let addBookBtn = document.querySelector(".addbook-btn");
let addBook = document.querySelector("addbook");
addBookBtn.addEventListener("click", ()=>{
    
})

let exBook = new Book("Title", "author", 244);
console.log(exBook.title);
console.log(exBook.id);