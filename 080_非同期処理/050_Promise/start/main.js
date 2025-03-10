let i = 0;

new Promise(function(resolve, reject){
    console.log("Promise");
    i = 1;
    resolve(i);

}).then(function(data){
    console.log("then " + ++data);
    //throw new Error();
    return data;

}).then(function(data){
    console.log("then " + ++data);

}).catch(function(data){
    console.log("catch " + data);

}).finally(function(){
    console.log("finally");
})

console.log("global end " + i);
