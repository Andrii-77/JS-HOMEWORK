let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);
document.getElementById("div_number").innerText = currentNumber;