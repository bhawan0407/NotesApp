var obj = 
{
    name : 'Bhawan',
    age  : 25
};


var objStr = JSON.stringify(obj);

console.log(typeof objStr);
console.log(objStr);


var personString = '{"name" : "Bhawan", "age" : 25}';

var person = JSON.parse(personString);

console.log(typeof person);
console.log(person);
