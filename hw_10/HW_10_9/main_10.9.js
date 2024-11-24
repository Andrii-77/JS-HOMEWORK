let grn = +localStorage.getItem('gryven') || 100;
document.getElementById("div_grn").innerText = grn + 'грн';

let now = new Date();
let time = JSON.parse(localStorage.getItem('listOfTime')) || [];
time.push(now.getTime());
localStorage.setItem('listOfTime', JSON.stringify(time));


let dates = JSON.parse(localStorage.getItem("listOfTime"));
let data2 = +dates[(dates.length - 1)];
let data1 = +dates[(dates.length - 2)];

if (data2 > (data1 + 10000 )) {
    grn += 10;
    localStorage.setItem('gryven', grn);
}
console.log(dates);
console.log(data2);
console.log(data1);

