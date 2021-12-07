let library = [];
let libraryDom = document.getElementById("library");

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
    div.innerHTML = `
    <div class="bookCard">
    <div class="cardHeader">${library[i].title}</div>
    <div class="cardInfo">Author: ${library[i].author}</br>page: ${
      library[i].pages
    }</div>
    <div class="cardFooter">${library[i].readen ? "Read" : "Not Read"}</div>
    </div>
    `;
    libraryDom.appendChild(div);
  }
}
