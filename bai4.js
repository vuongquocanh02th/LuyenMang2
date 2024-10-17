let str = 'What the hell?';
//Tach cuoi thanh mang cac tu
let wordsArr = str.trim().split(/\s+/);//tach theo khoang trang
let wordCount = wordsArr.length;
//Hien thi ket qua
console.log(`Co ${wordCount} tu trong chuoi`);