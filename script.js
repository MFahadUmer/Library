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
  let radio = document.getElementsByName("inlineRadioOptions");
  let radio1;
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      radio1 = radio[i].value;
    }
  }

  //let radio1 = document.getElementById("inlineRadio2").value;
  newBook = new Book(title, author, pages);
  addBookToLibrary(newBook);
};

document.querySelector('#modalButton').addEventListener('click', () => { document.getElementById("myForm").reset(); })



