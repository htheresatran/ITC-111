//objects

//everything in javascript is an object with 3 small exceptions (strings numbers and booleans) 
//dates maths reglar expressions, arrays, functions, object.center

//objects are a variable

//objects have primitiv value and primitive data type
//primitive values are not objects and have 
var x = 5;

var myObject = {
    //dataType:value
    name: 'Tom',
    lastName: 'thomson',
    age: 57,
    isMarried:false,

    displayFullName: function(){ return this.firstName + ' ' + this.lastName; }
    };

    var name = myObject.displayFullName();
    console.log(name.toString());

    //store different things about one item, so if i call person ill get info from i
    var person = {
        fName: 'theresa',
        lName: 'tran',
        age: 22,
    }