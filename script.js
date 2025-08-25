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
    myLibrary.push(newBook);
}

// removes book from the list and refreshes it 
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// displays books as cards in the html
function displayBooks() {
    const libraryContainer = document.getElementById("library"); 
    libraryContainer.innerHTML = ""; 

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-card"); // ✅ add a class for styling

        const statusText = book.read_status ? "Read ✅" : "Not Read ❌";
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Status:</strong> ${statusText}</p>
        `;

        // remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            removeBook(index);
        });

        // toggle read button
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle Read";
        toggleBtn.addEventListener("click", () => {
            myLibrary[index].read_status = !myLibrary[index].read_status;
            displayBooks();
        });

        // attach buttons
        bookDiv.appendChild(removeBtn);
        bookDiv.appendChild(toggleBtn);

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

// Get modal elements
const modal = document.getElementById("bookModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close");

// Open modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Close modal after form submission
document.getElementById("bookForm").addEventListener("submit", () => {
  modal.style.display = "none";
});

