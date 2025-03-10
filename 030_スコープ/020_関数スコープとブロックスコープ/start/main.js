//ブロックスコープ（varは使えない）
if(true){
    let c = 0;
    console.log(c);

    var d = 1;
    function e(){
        console.log("e is called");
    }

    
}

console.log(d);
e();

