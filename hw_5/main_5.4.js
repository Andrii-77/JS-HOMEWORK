// let printOfArray = (array) => console.log(array);

let printOfArray = (array) => {for (const item of array) {
        console.log(item);
    }};

let a = [5, 'hello', true];
printOfArray(a);