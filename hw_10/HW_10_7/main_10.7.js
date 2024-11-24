function addToLocalStorage(arrayName, objToAdd) {
    const itemInLS = localStorage.getItem(arrayName);
    if (!itemInLS) {
        console.log('The array is missing.');
    }
    const arrFromLS = JSON.parse(itemInLS);
    if (typeof objToAdd === 'object') {
        arrFromLS.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(arrFromLS));
}

addToLocalStorage('listOfSessions', {});