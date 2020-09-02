let myLibrary = [];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary (book) {
  myLibrary.push(book);
};
const newBook = new Book;
myForm.onsubmit = (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  newBook.title = title;
  newBook.author = author;
  newBook.pages = pages;
  addBookToLibrary(newBook);
  // document.getElementById('myForm').reset()
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
