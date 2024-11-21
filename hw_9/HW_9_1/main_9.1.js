const div = document.createElement('div');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

document.body.appendChild(div);

const cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);

// document.body.appendChild(div, cloneDiv);