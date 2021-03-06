// Book Constructor
function Book (title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI(){}


UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row);
}

UI.prototype.alertMessage = function (message, type){
  const div = document.createElement('div');
  div.className = `alert ${type}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

UI.prototype.deleteBook = function(target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  isbn = document.getElementById('isbn').value = '';
}

UI.prototype.addLocal = function(book) {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

UI.prototype.delLocal = function(isbn) {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  books.forEach(function(book, index) {
    if (book.isbn === isbn) {
      books.splice(index, 1);
      console.log(books);
      localStorage.setItem('books', JSON.stringify(books));
    }
  });
  
}

class Store {
  static loadLocal() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const ui = new UI();
    books.forEach(function(book){
      ui.addBookToList(book);
    });
  }
}

document.addEventListener('DOMContentLoaded', Store.loadLocal);

document.getElementById('book-form').addEventListener('submit', function (e){
  const title = document.getElementById('title').value;
  author = document.getElementById('author').value;
  isbn = document.getElementById('isbn').value;
  const book = new Book(title, author, isbn);
  const ui = new UI();
  if (title === '' || author === '' || isbn === '') {
    ui.alertMessage('Please fill in all fields!', 'error');
  } else {
    ui.addBookToList(book);
    ui.addLocal(book);
    ui.alertMessage('Book added to list!', 'success');
    ui.clearFields();
  }
  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  if (e.target.className === 'delete') {
    ui.deleteBook(e.target);
    ui.delLocal(e.target.parentElement.previousElementSibling.textContent);
    ui.alertMessage('Book removed', 'success');
    e.preventDefault();
  }
});