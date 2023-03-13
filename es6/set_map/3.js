// 哈希表  O(1) key => val     {}  字典

const dogs = new Map(); // {}


dogs.set('Snickers',3);
dogs.set('Sunny',3);
dogs.set('Sugo',3);
let obj = {name:'wes bos'};
console.log(dogs);
dogs.set(obj,11);
console.log(dogs);

dogs.forEach((val,key) => console.log(key,val))

for(let [key,dog] of dogs){
    console.log(key,dog)
}