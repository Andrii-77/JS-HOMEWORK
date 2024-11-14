let str = 'Ревуть воли як ясла повні';
function stringToarray(str){
    if(str){
        const str_split = str.split(' ');
        return str_split;
    }
    return [""];
}
let arr = stringToarray(str);
console.log(arr);