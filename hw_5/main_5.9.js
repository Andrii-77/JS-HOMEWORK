let printOfUsers = (usersArray) => {
    for (const user of usersArray) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

printOfUsers([
    {id: 1, name: 'Andrii', age: 47},
    {id: 2, name: 'Lesia', age: 46},
    {id: 3, name: 'Andrii', age: 19},
    {id: 4, name: 'Dmytro', age: 22},
    {id: 5, name: 'Pavlo', age: 29},
])