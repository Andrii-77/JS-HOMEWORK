let listOfSessions = [];

if (localStorage.getItem('listOfSessions')) {
    listOfSessions = JSON.parse(localStorage.getItem('listOfSessions'));
}

listOfSessions.push(new Date());
localStorage.setItem('listOfSessions', JSON.stringify(listOfSessions));


// ---Для себе записую приклад спрощеного коду, зараз важко
// ---зрозуміти, потрібно вдуматись.----\
// let listOfSessions = JSON.parse(localStorage.getItem('listOfSessions')) || [];
// listOfSessions.push(new Date());
// localStorage.setItem('listOfSessions', JSON.stringify(listOfSessions));


