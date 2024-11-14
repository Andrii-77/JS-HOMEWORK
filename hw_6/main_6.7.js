function sortNums(arrayOfNums, direction) {
    if (direction === 'ascending') return arrayOfNums.sort((a, b) => a - b);
    if (direction === 'descending') return arrayOfNums.sort((a, b) => b - a);
}
let arrayOfNums = [11,21,3];
console.log(sortNums(arrayOfNums,'ascending'));
console.log(sortNums(arrayOfNums,'descending'));