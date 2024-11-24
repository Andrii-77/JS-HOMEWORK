const weight = document.getElementById("converter");
const divresult = document.getElementById('result');

weight.oninput = function () {
    let result = +this.value * 2.2;
    divresult.innerText = result;
};