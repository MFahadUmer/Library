let myLibrary = localStorage.getItem("books")
  ? JSON.parse(localStorage.getItem("books"))
  : [];

localStorage.setItem("books", JSON.stringify(myLibrary));
const data = JSON.parse(localStorage.getItem("books"));

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  localStorage.setItem("books", JSON.stringify(myLibrary));
}

function delete_book(i) {
  myLibrary.splice(i, 1);
  myMovie = JSON.parse(localStorage.getItem("myMovie"));
  localStorage.setItem("books", JSON.stringify(myLibrary));
  location.reload();
}

let newBook;

myForm.onsubmit = (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let radio = document.getElementsByName("inlineRadioOptions");
  let radio1 = radio[0].checked ? radio[0].value : radio[1].value;
  newBook = new Book(title, author, pages, radio1);
  addBookToLibrary(newBook);
  document.getElementById("myForm").reset();
};

document.querySelector("#modalButton").addEventListener("click", () => {});

function displayBooks(myLibrary) {
  let div;
  for (let j = 0; j < myLibrary.length; j++) {
    for (let i = 0; i < localStorage.length; i++) {
      div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
      <div class="card-body">
        <p class="card-text">
        Title: ${myLibrary[i].title}<br>
        Author: ${myLibrary[i].author}<br>
        Pages: ${myLibrary[i].pages}<br>
        Read Status: ${myLibrary[i].read}<br>
        <button class="btn btn-warning" onclick="delete_book(${i})">Delete Record</button>
        </p>
      </div>
    `;
    }
    document.querySelector(".displayBooks").appendChild(div);
  }
}
