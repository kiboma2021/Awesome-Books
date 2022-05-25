let bookName=document.getElementById('title');
let authorName=document.getElementById('author');
let addBtn=document.getElementById('add');

let BookList=[];

function displayBook(title, author, id) {
  //Add containers
  const bookContainer = document.querySelector('.all-books');
  var addContainer=document.createElement('div');

  //title of book
  var addBook=document.createElement('p');
  addBook.textContent=title;
  addContainer.appendChild(addBook);

  //author of book
  var addAuthor=document.createElement('p');
  addAuthor.textContent=author;
  addContainer.appendChild(addAuthor);

  //Remove button
  const rmBtn=document.createElement('button');
  rmBtn.textContent='Remove';
  rmBtn.classList.add('rmbtn');
  rmBtn.id = id;
  rmBtn.addEventListener('click', removeBook);
  addContainer.appendChild(rmBtn);


  //parting line
  var hr=document.createElement('hr');
  addContainer.appendChild(hr);

  bookContainer.appendChild(addContainer);
}

function toAddBook(title,author){
  const bookId=Math.random().toString(36).replace(/[^a-z]+/g, '').slice(2, 5);
  const newBook={title,author,id:bookId};
  BookList.push(newBook);
  return bookId
}