const myLibrary = localStorage.getItem("books")
  ? JSON.parse(localStorage.getItem("books"))
  : [];

localStorage.setItem("books", JSON.stringify(myLibrary));
JSON.parse(localStorage.getItem("books"));

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  localStorage.setItem("books", JSON.stringify(myLibrary));
  location.reload();
}

function toggle(index) {
  if (myLibrary[index].read === "false") {
    myLibrary[index].read = "true";
    localStorage.setItem("books", JSON.stringify(myLibrary));
    location.reload();
  } else {
    myLibrary[index].read = "false";
    localStorage.setItem("books", JSON.stringify(myLibrary));
    location.reload();
  }
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(myLibrary));
  location.reload();
}

let newBook;

myForm.onsubmit = (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const radio = document.getElementsByName("inlineRadioOptions");
  const radio1 = radio[0].checked ? radio[0].value : radio[1].value;
  newBook = new Book(title, author, pages, radio1);
  addBookToLibrary(newBook);
  document.getElementById("myForm").reset();
};

document.querySelector("#modalButton").addEventListener("click", () => {});

function displayBooks(myLibrary) {
  let div;

  myLibrary.filter((obj, index) => {
    div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class='card-body'>
        <div class='card-text'>
          <div class='d-flex flex-row'><p class='mr-1 font-weight-bold '>Title:</p> ${obj.title}</div><br>
          <div class='d-flex flex-row'><p class='mr-1 font-weight-bold'>Author:</p> ${obj.author}</div><br>
          <div class='d-flex flex-row'><p class='mr-1 font-weight-bold'>Pages:</p> ${obj.pages}</div><br>
          <div class='d-flex flex-row'><p class='mr-1 font-weight-bold'>Read Status:</p> ${obj.read}</div> 
          <div class='d-flex justify-content-between mt-3'>
            <button class='btn-sm btn-primary' onclick='toggle(${index})'>Change status</button>
            <button class='btn-sm btn-warning' onclick='deleteBook(${index})'>Delete Record</button>
          </div>
        </div>
      </div>
    `;
    document.querySelector(".displayBooks").appendChild(div);
  });
}
