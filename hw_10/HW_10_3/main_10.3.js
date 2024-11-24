const clienIhfo = document.forms.clienIhfo;

const sendButton = document.getElementsByTagName('button')[0];

const wrap = document.getElementById('wrap');

clienIhfo.onsubmit = function (e) {
    e.preventDefault();
    const clientName = clienIhfo.name.value;
    const clientSurname = clienIhfo.surname.value;
    const clientAge = +clienIhfo.age.value;
    let client = {clientName, clientSurname, clientAge};
    console.log(client);
    wrap.innerText = client.clientName + ' ' + client.clientSurname + ' ' + client.clientAge;
};



// ---зберігаю для себе як можливість другого варіанту для розв'язку---

// clientInfo.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const clientName = clienIhfo.name.value;
//     const clientSurname = clienIhfo.surname.value;
//     const clientAge = clienIhfo.age.value;
//     let client = {clientName, clientSurname, clientAge};
//     console.log(client);
//     wrap.innerText = client.clientName + ' ' + client.clientSurname + ' ' + client.clientAge;
// });