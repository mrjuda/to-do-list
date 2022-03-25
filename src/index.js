/** TESTANDO COMENTÁRIOS COM A EXTENSÃO BETTER COMMENTS
 * !    . ALERTA VERMELHO
 * TODO . teste TO DO
 * ?    . Teste queries
 * *    . Highlighted text
 * //   . strikethrough riscado TEXTO RISCADO
 *
 */

import _ from 'lodash';
import printMe from './print.js';
import './style.scss';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['JT\'s', 'To-do List'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
