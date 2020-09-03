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

function delete_book(i){
  myLibrary.splice(i, 1);
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
  displayBooks(myLibrary);
};

document.querySelector("#modalButton").addEventListener("click", () => {
});


function displayBooks(allbooks) {
  let div;
for (let i = 0; i < allbooks.length; i++)
  {
    div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <div class="card-body">
      <p class="card-text">
     Title: ${allbooks[i].title}<br>
     Author: ${allbooks[i].author}<br>
     Pages: ${allbooks[i].pages}<br>
     Read Status: ${allbooks[i].read}<br>
     <button class="btn btn-warning" onclick="delete_book(${i})">Delete Record</button>
     </p>
    </div>
  `;
  }
    document.querySelector(".displayBooks").appendChild(div);
}
