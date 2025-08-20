// constructor for the book 
function Book(title, author, pages, read_status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
    this.id = crypto.randomUUID();
}

// array for the books 
const myLibrary = [];

// adds the book the the array
function addBookToLibrary(title, author, pages, read_status) {
    const newBook = new Book(title, author, pages, read_status);
    myLibrary.push(newBook)
}

// displays the book in the html
// displays the book in the html
function displayBooks() {
    const libraryContainer = document.getElementById("library"); // ✅ store it in a variable
    libraryContainer.innerHTML = ""; // ✅ clear old books

    myLibrary.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Read: ${book.read_status}`;
        libraryContainer.appendChild(bookDiv);
    });
}

// handle form submission
document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop page reload

    // get values from form
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read_status = document.getElementById("read_status").checked;

    // add book
    addBookToLibrary(title, author, pages, read_status);

    // refresh display
    displayBooks();

    // reset form
    event.target.reset();
});

//testing if the library has the book
console.log(myLibrary);