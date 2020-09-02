let myLibrary = [];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addBookToLibrary = function (book) {
};

myForm.onsubmit = (e) => {
  e.preventDefault();
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  // var read = document.getElementById("inlineRadio1").value;
  // var read2 = document.getElementById("inlineRadio2").value;
};

const bookName = new Book(title, author, pages);

let website = document.querySelector("#website").textContent;
console.log(website);
