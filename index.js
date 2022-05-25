//Book class: Represent a book
class Book {
  constructor(title,author){
    this.title=title;
    this.author=author;
  }
}

//UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const storeBooks=[
      {
        title: "Girl Child",
        author: "Chinua Ajebe",
      },
      {
        title: "Think Big",
        author: "Ben Carson",
      },
      {
        title: "Think Big",
        author: "Ben Carson",
      },     
    ];
    const books = storeBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('.book-list');
    const row = document.createElement('tr');
    
    row.innerHTML = `
    <td>${book.title} </td>
    <td>${book.author} </td>
    <td><a href="#" class="delete" value="delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    //if(el.value='delete') {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

//Store Class: Handle storage

//Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a book
document.querySelector('#add-book').addEventListener('submit', (e) => {
  e.preventDefault();
  //get form values
  const book_title = document.querySelector('#title').value;
  const book_author = document.querySelector('#author').value;

  //Validate
  if(book_title === '' || book_author ===''){
    UI.showAlert("Please fill all fields!")
  } else {

  //Instantiate book

  const book = new Book(book_title, book_author);

  //console.log(book);
  UI.addBookToList(book);

  //clear fields
  UI.clearFields();

  }
});

//Event: Remove a book

document.querySelector('.book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});