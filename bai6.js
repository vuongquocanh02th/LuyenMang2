let inputStr=prompt("Nhap mang ky tu ");
//chuyen chuoi thanh mang
let charArr=inputStr.split("");
//Duyet qua mang va thay the ky tu
for(let i=0; i< charArr.length; i++) {
    if(charArr[i] === '-'){
        charArr[i] = "_";
    }
}
let result=charArr.join("");
console.log(result);