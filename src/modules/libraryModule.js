import StrShelf from './strShelfModule.js';
import Book from './bookModule.js';

export default class Library {
  shelf = [];

  bookshelf;

  addButton = document.getElementById('add-btn');

  newTitle = document.getElementById('newTitle');

  frontShelf = document.getElementById('frontShelf');

  removeButton;

  inputField;

  checkboxButton;

  static pushToStorage = (obj) => {
    const stringify = JSON.stringify(obj);
    localStorage.setItem('strShelf', stringify);
  }

  static displayBook(title, id) {
    return `
    <div class="box unchecked"></div>
    <input class="task" type="text" value="${title}" name="Item1">
    <div class="handle removeButton" id="${id}" type="button"></div>
        `;
  }

  static displayCheckedBook(title, id) {
    return `
      <div class="box checked"></div>
      <input class="task" type="text" value="${title}" name="Item1">
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
      if (this.shelf.length === 0) {
        for (let i = 0; i < shelfSize; i += 1) {
          this.shelf.push(Object.values(parsed)[i]);
        }
      }
      // Get the completed value of parsed book
      const parsedBook = parsed[`${counter}`];
      let tempShelf = Library.displayBook(parsedBook.title, counter);
      if (parsedBook.completed) {
        tempShelf = Library.displayCheckedBook(parsedBook.title, counter);
      }
      preShelf.push(tempShelf);
      counter += 1;
    }
    return preShelf;
  }

  paintToPage = () => {
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
    this.setInputFieldListeners();
    this.setCheckboxFieldListeners();
  }

  removeBook = (id) => {
    for (let i = 0; i < this.shelf.length; i += 1) {
      if (this.shelf[i].id === parseInt(id, 10)) {
        this.shelf.splice(i, 1);
        this.updateShelf();
      }
      this.paintToPage();
      this.setCheckboxFieldListeners();
    }
  }

  updateTask = (id, text) => {
    for (let i = 0; i < this.shelf.length; i += 1) {
      if (this.shelf[i].id === parseInt(id, 10)) {
        this.shelf[i].title = text;
        this.updateShelf();
      }
    }
  }

  updateCompletion = (id, completed) => {
    for (let i = 0; i < this.shelf.length; i += 1) {
      if (this.shelf[i].id === parseInt(id, 10)) {
        this.shelf[i].completed = completed;
        this.updateShelf();
      }
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
    this.addButton.addEventListener('click', () => {
      this.newBook(this.newTitle.value);
      this.pullFromStorage();
      this.newTitle.value = '';
    });
  }

  setInputFieldListeners = () => {
    this.inputField = document.querySelectorAll('.task');
    this.inputField.forEach((input) => {
      input.addEventListener('input', (e) => {
        const text = e.target.value;
        this.updateTask(e.target.parentElement.id, text);
      });
    });
  }

  setCheckboxFieldListeners = () => {
    this.checkboxButton = document.querySelectorAll('.box');
    this.checkboxButton.forEach((checkbox) => {
      checkbox.addEventListener('click', (e) => {
        let taskChecked = false;
        if (e.target.classList.contains('unchecked')) {
          taskChecked = true;
          e.target.classList.toggle('checked');
          e.target.classList.toggle('unchecked');
        } else if (e.target.classList.contains('checked')) {
          taskChecked = false;
          e.target.classList.toggle('checked');
          e.target.classList.toggle('unchecked');
        }
        this.updateCompletion(e.target.parentElement.id, taskChecked);
      });
    });
  }
}