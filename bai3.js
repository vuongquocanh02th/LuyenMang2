let charArr = ['a','b','c','1','2'];
let count = 0;
for(let i = 0; i < charArr.length; i++){
    //Kiem tra xem ky tu phai so hay khong
    if(!isNaN(charArr[i]) && charArr[i] !== ' '){
        count++;
    }
}
//Hien thi ket qua
console.log('Number of number in array: '+count);