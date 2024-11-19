function deepCopy(obj) {
    if (obj) {
        let functions = [];
        for (const objKey in obj) {
            if (typeof obj[objKey] === "function") {
                const cloneOfFunction = obj[objKey].bind({});
                functions.push({cloneOfFunction, objKey});
            }
        }
        const objParse = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            objParse[func.objKey] = func.cloneOfFunction;
        }
        console.log(objParse);
        return objParse;
    } else {
        console.log('Incorrect data. Not an object.');
    }
}

const clone = deepCopy({name: "Max", age: 18, id: 5, greeting() {console.log("Hello!!!")}, farewell() {console.log("Bye!!!")}});
clone.farewell();