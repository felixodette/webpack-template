import _ from 'lodash';
import './style.css'

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.classList.add('h1');
  return element;
}

document.body.appendChild(component());
document.body.classList.add('bgColor');