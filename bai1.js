let arr=[
    [1,2,1,24],
    [8,11,9,4],
    [7,0,7,27],
    [7,4,28,14],
    [3,10,26,7]
];
//Duyet qua tung dong cua mang 2 chieu
for(let i in arr){
    console.log("row "+i);
    //Duyet qua tung phan tu o dong hien tai
    for(let j in arr[i]){
        //Output phan tu hien tai
        console.log(" "+arr[i][j]);
    }
}