let arr1 = [1,2,3,4]
// let arr2 = arr1; 
let arr2 = arr1.slice(0); // 浅拷贝
let arr3 = arr1.concat(); // 浅拷贝
console.log(arr2);
arr2[1] = 6;
arr3[1] = 9;
arr1[1] = 0;
console.log(arr1,arr2,arr3);