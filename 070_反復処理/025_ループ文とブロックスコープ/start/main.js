//ループごとに異なるスコープになる
for(let i = 0; i < 5; i++){
    const j = i;
    //let j = i;
    console.log(j);
}