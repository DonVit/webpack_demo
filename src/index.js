import _ from 'lodash';
function component1() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'Webpack Bundler  www'], ' ');

  return element;
}

document.body.appendChild(component1());