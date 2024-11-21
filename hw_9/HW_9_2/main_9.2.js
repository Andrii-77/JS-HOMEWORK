let arr = ['Main','Products','About us','Contacts'];

const ul = document.createElement("ul");

for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}

document.body.appendChild(ul);