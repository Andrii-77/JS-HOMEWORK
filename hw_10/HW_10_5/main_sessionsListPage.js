const listOfSessionsJSON = localStorage.getItem('listOfSessions');
const listOfSessions = JSON.parse(listOfSessionsJSON);

for (const listOfSession of listOfSessions) {
    const div = document.createElement('div');
    div.innerText = listOfSession.toString();
    document.body.appendChild(div);
}