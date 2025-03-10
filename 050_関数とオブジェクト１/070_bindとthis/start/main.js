window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

const helloTom = person.hello.bind(person);
const helloJohn = person.hello;

function fn(ref) {
    ref();
}

fn(helloTom);
fn(helloJohn);


function a(age){
    console.log(`hello ${this.name} ${age}`);
}

const b = a.bind({name: "Tim"}, 16);
b(20); //bindの引数が優先される