const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function*(){
	//this：Objectへの参照を保持している
	for(let key in this){
		yield [key, this[key]]
	}
}

for (let [k, v, test] of items) {
	console.log(k, v, test);
}