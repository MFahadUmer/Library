let myLibrary = [];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let newBook;

myForm.onsubmit = (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  newBook = new Book(title, author, pages);
  addBookToLibrary(newBook);
}; 



// let title = document.getElementById("title").value;

// myForm.onsubmit = (e) => {
//   e.preventDefault();
//   var title = document.getElementById("title").value;
//   var author = document.getElementById("author").value;
//   var pages = document.getElementById("pages").value;
//   // var read = document.getElementById("inlineRadio1").value;
//   // var read2 = document.getElementById("inlineRadio2").value;
// };
let website = document.querySelector("#website").textContent;
console.log(website);
