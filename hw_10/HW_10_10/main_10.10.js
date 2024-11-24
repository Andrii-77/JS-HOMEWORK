let array = [];
let obj = 1;

for (let i = 0; i < 100; i++) {
    array.push(obj);
    obj = obj + 1;
}
console.log(array);

const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

for (let i = 0; i < 10; i++) {
    console.log(array[i]);
    // document.write(array[i]);
}

let lastI = 10;
// console.log(lastI);

btnNext.onclick = function (e) {
    e.preventDefault();
    for (let i = lastI; i < (10 + lastI); i++) {
        console.log(array[i]);
        // document.write(array[i]);
    }
    console.log('Hello!!!')
    // console.log(lastI);
    lastI = lastI + 10;
}

btnPrev.onclick = function (e) {
    e.preventDefault();
    for (let i = lastI - 10; i < lastI; i++) {
        console.log(array[i]);
        // document.write(array[i]);
    }
    console.log('Bye!!!')
    // console.log(lastI);
    lastI = lastI - 10;
};

