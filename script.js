let library = [];
let libraryDom = document.getElementById("library");
let menuState = 0;

//Object constructor
function Book(title, author, pages, readen) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readen = readen;
  this.info = function info() {
    console.log(title + " by " + author + ", " + pages + "Pages, " + readen);
  };
}

// Book adding function and pushes it to library
function addBook(newTitle, newAuthor, newPages, newReaden) {
  library.push(new Book(newTitle, newAuthor, newPages, newReaden));
  libraryDom.innerHTML = "";
  render();
}

// Rendering books to screen
function render() {
  for (let i = 0; i < library.length; i++) {
    let div = document.createElement("div");
    let read = library[i].readen ? "Read" : "Not Read";
    div.innerHTML = `
    <div class="bookCard">
    <div class="cardHeader">
    ${library[i].title}
    <button onclick="deleteBook(${i})" class="deleteButton">X</button>
    </div>
    <div class="cardInfo">Author: ${library[i].author}</br>page: ${library[i].pages}</div>
    <div class="cardFooter">${read}</div>
    </div>
    `;
    libraryDom.appendChild(div);
  }
}
// Fetches data from form
function fetchData() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pagenumber = document.getElementById("pagenumber").value;
  let readen = document.getElementById("readen").checked;

  if (title === "" || author === "" || pagenumber === "") {
    return;
  } else {
    addBook(title, author, pagenumber, readen);
    clearField();
  }
}

// Clear input field after adding book
function clearField() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pagenumber").value = "";
  document.getElementById("readen").checked = "";
}

// Deletes book from array
function deleteBook(i) {
  library.splice(i, 1);
  libraryDom.innerHTML = "";
  render();
}

// Dropdown menu
function dropDown() {
  if (menuState == 0) {
    document.getElementById("dropdown").style.display = "block";
    menuState = 1;
  } else if (menuState == 1) {
    document.getElementById("dropdown").style.display = "none";
    menuState = 0;
  }
}
