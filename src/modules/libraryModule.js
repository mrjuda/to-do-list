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
    localStorage.setItem('strShelf', stringify);
  }

  static displayBook(title, id) {
    return `
        <div class="box unchecked"></div>
        <div class="task title-author">${title}</div>
        <div class="handle removeButton" id="${id}" type="button"></div>
        `;
  }

  pullFromStorage = () => {
    const parsed = JSON.parse(localStorage.getItem('strShelf'));
    let counter = 1;
    const preShelf = [];
    // Returns the length of the localstorage shelf
    // (even when the page reloads)
    const shelfSize = Object.values(parsed).length;

    for (let i = 0; i < shelfSize; i += 1) {
      // Returns the Nth item saved on the localstorage
      console.log('LINE 39: shelf.toString(): ' + this.shelf.toString() + '\n pllFrmStrg > shelf = ' + this.shelf);
      console.log('pllFrmStrg > preShelf = ' + this.preShelf);
      if (this.shelf.length === 0) {
        this.shelf.push(Object.values(parsed)[i]);
      }
      setTimeout(() => { console.log('LINE 43: pllFrmStrg > for... i = ' + i); }, 500);
      const parsedBook = parsed[`${counter}`];
      const tempShelf = Library.displayBook(parsedBook.title, counter);
      preShelf.push(tempShelf);
      counter += 1;
    }
    // console.log('pllFrmStrg > shelf = ' + this.shelf + '\n pllFrmStrg > preShelf = ' + this.preShelf);
    // console.log('pllFrmStrg > preShelf.length = ' + this.preShelf.length);
    return preShelf;
  }

  paintToPage = (caller) => {
    console.log('caller: ' + caller + ' > paintToPage');
    const preShelf = this.pullFromStorage();
    this.frontShelf.innerHTML = '';
    for (let i = 0; i < preShelf.length; i += 1) {
      const createdBook = document.createElement('div');
      createdBook.classList.add('unchecked-slot', 'book');
      createdBook.innerHTML = preShelf[i];
      createdBook.id = i + 1;
      this.frontShelf.appendChild(createdBook);
    }
    this.setRemoveListeners();
  }

  updateShelf = () => {
    // console.log('bookshelf A: ' + this.bookshelf);
    this.bookshelf = new StrShelf();

    let counter = 0;
    for (let i = 0; i < this.shelf.length; i += 1) {
      counter += 1;
      this.shelf[i].id = counter;
      // this.shelf[i].index = counter;
    }
    for (let i = 0; i < this.shelf.length; i += 1) {
      // GIVES THE BOOK OBJ AN ID #NUMBER
      this.bookshelf[`${this.shelf[i].id}`] = this.shelf[i];
    }
    // console.log('bookshelf C: ' + this.bookshelf);
    Library.pushToStorage(this.bookshelf);
  }

  newBook = (title) => {
    this.bookshelf = new StrShelf();
    const book = new Book();
    book.title = title;
    book.completed = false;
    this.shelf.push(book);
    this.updateShelf();
    this.paintToPage();
  }

  removeBook = (id) => {
    // this.bookshelf = new StrShelf();

    // this.frontShelf.innerHTML = '';
    // this.removeButton = document.querySelectorAll('.removeButton');

    for (let i = 0; i < this.shelf.length; i += 1) {
      console.log('removeBook > shelf.length: ' + this.shelf.length);
      console.log('removeBook: shelf: ' + this.shelf[0]);
      if (this.shelf[i].id === parseInt(id, 10)) {
        this.shelf.splice(i, 1);
        this.updateShelf();
      }

      this.paintToPage();
      // this.setRemoveListeners();
      // this.removeButton = document.querySelectorAll('.removeButton');
      // this.removeButton.forEach((button) => {
      //   button.addEventListener('click', (e) => {
      //     console.log('addevent-AA-INSIDEfor-loop');
      //     this.removeBook(e.target.id);
      //   });
      // });
    }
  }

  setRemoveListeners = () => {
    this.removeButton = document.querySelectorAll('.removeButton');
    this.removeButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        // console.log('addevent-AA-OUTSIDE-for-loop');
        console.log(e.target.id);
        this.removeBook(e.target.id);
      });
    });
  }

  setUpAddListener = () => {
    this.addButton.addEventListener('click', () => {
      this.newBook(this.newTitle.value);
      this.pullFromStorage();
      this.newTitle.value = '';
      // this.setRemoveListeners();
    });
  }
}
