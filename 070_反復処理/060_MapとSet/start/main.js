const map = new Map();

const key1 = {};
map.set(key1, "value1");
//map.set({}, "value1");  //参照型の場合は、注意
console.log(map.get(key1));

let key2;
map.set(key2 = 0, "value2");
console.log(map.get(0));

for(const [k, v] of map){
    console.log(k, v);
}

const s = new Set();
s.add(key1);
s.add(key2);
console.log(s.has(key2));

for(let k of s){
    console.log(k);
}
