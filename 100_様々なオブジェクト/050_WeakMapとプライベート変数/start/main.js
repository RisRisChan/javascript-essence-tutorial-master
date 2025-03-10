import { Person } from "./person.js";

const tim = new Person("Tim", 23);
const bob = new Person("bob", 23);
tim.hello();
bob.hello();

console.log(tim._name);
console.log(bob._name);
