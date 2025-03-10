const array = [1, 2, 3, 4, 5];
const array2 = [1, 2, 0, 4, 5];

let v,i = 0;
//array[5] = undefinedのためfalsyになってループが終わる
while(v = array[i++]){
    console.log(v);
}

let v2,j = 0;
while(v2 = array2[j++]){
    console.log(v2);
}

