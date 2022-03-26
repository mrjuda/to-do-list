// libraryModule.js

// import _ from 'lodash';
import StrShelf from './strShelfModule.js';
import Book from './bookModule.js';

export default class Library {
  shelf = [];

  bookshelf;

  addButton = document.getElementById('add-btn');

  newTitle = document.getElementById('newTitle');

  frontShelf = document.getElementById('frontShelf');

  removeButton;

  static pushToStorage = (obj) => {
    const stringify = JSON.stringify(obj);
    sessionStorage.setItem('strShelf', stringify);
  }

  static displayBook(title, id) {
    return `
        <div class="box unchecked"></div>
        <div class="task title-author">${title}</div>
        <div class="handle removeButton" id="${id}" type="button"></div>
        `;
  }

  pullFromStorage = () => {
    const parsed = JSON.parse(sessionStorage.getItem('strShelf'));
    let counter = this.shelf.length;
    const preShelf = [];
    for (let i = 0; i < this.shelf.length; i += 1) {
      const parsedBook = parsed[`${counter}`];
      const tempShelf = Library.displayBook(parsedBook.title, counter);
      preShelf.unshift(tempShelf);
      counter -= 1;
    }

    this.frontShelf.innerHTML = '';

    for (let i = 0; i < preShelf.length; i += 1) {
      const createdBook = document.createElement('div');
      createdBook.classList.add('unchecked-slot', 'book');
      createdBook.innerHTML = preShelf[i];
      createdBook.id = i + 1;
      this.frontShelf.appendChild(createdBook);
    }
  }

  updateShelf = () => {
    this.bookshelf = new StrShelf();
    let counter = 0;
    for (let i = 0; i < this.shelf.length; i += 1) {
      counter += 1;
      this.shelf[i].id = counter;
    }
    for (let i = 0; i < this.shelf.length; i += 1) {
      // GIVES THE BOOK OBJ AN ID #NUMBER
      this.bookshelf[`${this.shelf[i].id}`] = this.shelf[i];
    }
    Library.pushToStorage(this.bookshelf);
  }

  newBook = (title) => {
    this.bookshelf = new StrShelf();
    const book = new Book();
    book.title = title;
    this.shelf.unshift(book);
    this.updateShelf();
  }

  removeBook = (id) => {
    this.bookshelf = new StrShelf();

    this.frontShelf.innerHTML = '';
    this.removeButton = document.querySelectorAll('.removeButton');
    for (let i = 1; i <= this.shelf.length; i += 1) {
      if (this.shelf[i - 1].id === parseInt(id, 10)) {
        this.shelf.splice(i - 1, 1);
        this.updateShelf();
      }
      this.pullFromStorage();
      this.removeButton = document.querySelectorAll('.removeButton');
      this.removeButton.forEach((button) => {
        button.addEventListener('click', (e) => {
          this.removeBook(e.target.id);
        });
      });
    }
  }

  setRemoveListeners = () => {
    this.removeButton = document.querySelectorAll('.removeButton');
    this.removeButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        this.removeBook(e.target.id);
      });
    });
  }

  setUpAddListener = () => {
    this.addButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.newBook(this.newTitle.value);
      this.pullFromStorage();
      this.newTitle.value = '';
      this.setRemoveListeners();
    });
  }
}
