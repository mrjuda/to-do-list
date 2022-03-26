import Library from './modules/libraryModule.js';
import './style.scss';

const library = new Library();
// console.log('test-5')

console.log('index.js LINE 7 > paintToPage: ');
library.paintToPage(11);
// console.log('test-9')
// library.setRemoveListeners();
// console.log('test-11');
console.log('index.js LINE 12 > setUpAddListener(): ');
library.setUpAddListener();