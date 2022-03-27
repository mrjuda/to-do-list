import Library from './modules/libraryModule.js';
import './style.scss';

const library = new Library();

library.paintToPage();
library.setUpAddListener();

// library.setInputFieldListeners();
// library.setCheckboxFieldListeners();