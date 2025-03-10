window.name = 'John';

const a = () => console.log("bye" + this.name)

const person = {
    name: 'Tom',
    hello: () => console.log('Hello ' + this.name), //アロー関数はthisを取れない
    bye() {
        console.log('Hello ' + this.name)
        a();
    } 
}
person.hello();

