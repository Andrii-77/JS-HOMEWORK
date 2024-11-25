let array = [];
let obj = 1;
for (let i = 0; i < 100; i++) {
    array.push(obj);
    obj++;
}
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const outputDiv = document.getElementById('output');
let lastI = 10;

function displayRange(start, end) {
    outputDiv.innerHTML = '';
    for (let i = start; i < end; i++) {
        const p = document.createElement('p');
        p.textContent = array[i];
        outputDiv.appendChild(p);
    }
}

btnNext.onclick = function () {
    lastI += 10;
    displayRange(lastI - 10, lastI);
};
btnPrev.onclick = function () {
    if (lastI > 10) {
        lastI -=10;
        displayRange(lastI - 10, lastI);
    }
};

