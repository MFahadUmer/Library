let myLibrary = [];
function Book(title, author, pages, read ) {
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
  let radio1 = radio[0].checked? radio[0].value : radio[1].value;
  newBook = new Book(title, author, pages, radio1);
  addBookToLibrary(newBook);
  document.getElementById("myForm").reset();
  displayBooks(newBook);

};

document.querySelector("#modalButton").addEventListener("click", () => {
});

function displayBooks(myLibrary) {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <div class="card-body">
      <p class="card-text">
     Title: ${myLibrary.title}<br>
     Author: ${myLibrary.author}<br>
     Pages: ${myLibrary.pages}<br>
     Read Status: ${myLibrary.read}<br>
     <button class="btn btn-warning">Delete Record</button>
     </p>
    </div>
  `;
    document.querySelector(".displayBooks").appendChild(div);
}
