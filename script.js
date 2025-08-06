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
function displayBooks(){
    
}

//testing addBook function call
addBookToLibrary("Metamorphosis", "Franz Kafka", 70, true);



//testing if the library has the book
console.log(myLibrary);