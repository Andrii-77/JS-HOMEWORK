let str1 = 'hello world';
const str1Up = str1.toUpperCase();
console.log(str1Up);
let str2 = 'lorem ipsum';
const str2Up = str2.toUpperCase();
console.log(str2Up);
let str3 = 'javascript is cool';
const str3Up = str3.toUpperCase();
console.log(str3Up);
console.log(' ');
let strings = [str1, str2, str3];
for (const str of strings) {
    console.log(str.toUpperCase());
}