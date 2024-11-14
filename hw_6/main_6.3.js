let str1 = 'HELLO WORLD';
const str1Lo = str1.toLowerCase();
console.log(str1Lo);
let str2 = 'LOREM IPSUM';
const str2Lo = str2.toLowerCase();
console.log(str2Lo);
let str3 = 'JAVASCRIPT IS COOL';
const str3Lo = str3.toLowerCase();
console.log(str3Lo);
console.log(' ');
let strings = [str1, str2, str3];
for (const str of strings) {
    console.log(str.toLowerCase());
}
console.log(' ');
str1 = str1Lo;
console.log(str1);
str2 = str2Lo;
console.log(str2);
str3 = str3Lo;
console.log(str3);