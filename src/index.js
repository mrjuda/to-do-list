// import _ from 'lodash';
// import printMe from './print.js';
import Library from './modules/libraryModule.js';
import './style.scss';

// const libraryBtn = document.getElementById('LibraryBtn');
// const newBtn = document.getElementById('NewBtn');
// const libraryPage = document.getElementById('Library');
// const newPage = document.getElementById('New');
// const libraryStr = 'library';
// const hidden = 'hidden';
// const newStr = 'new';
// const contactStr = 'contact';
// const pageSetup = () => {
//   // newPage.className = hidden;
//   // contactPage.className = hidden;
// };

// pageSetup();

const library = new Library();
library.setUpAddListener();

// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['JT\'s', 'To-do List'], ' ');

//   btn.innerHTML = 'Click me and check console';
//   btn.onclick = printMe;
//   btn.classList.add('clear-all-btn');
//   element.classList.add('hello');
//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());
