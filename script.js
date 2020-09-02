let myLibrary = [];
function addBook(title, author, pages, read = false) {
 myLibrary.push([title, author, pages, read]);
}

function takeValue (){
  let formData = new FormData([myForm]);
  let title = document.querySelector('#title').textContent;
  // let author = document.getElementById('author').value;
  // let pages = document.getElementById('pages').value;
  console.log(`${title}`);
}

let website = document.querySelector("#website").textContent;
console.log(website);