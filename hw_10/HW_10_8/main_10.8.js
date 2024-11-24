const info = document.forms['info'];
const table = document.getElementById('table');

info.onsubmit = function (e) {
    table.innerText = "";
    e.preventDefault();
    const rowsValue = +info.rows.value;
    const cellsValue = +info.cells.value;
    const dataValue = info.data.value;
    console.log(rowsValue, cellsValue, dataValue);

    for (let i = 0; i < rowsValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};