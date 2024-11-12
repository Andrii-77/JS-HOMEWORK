let sum = (array) => {
    let box = 0;
    for (const number of array) {
        box = box + number;
    }
    return box;
}
document.write(sum([1,2,10]));