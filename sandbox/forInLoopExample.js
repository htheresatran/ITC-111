// forin loop - used to loop/iterate through properties of an object

//syntax: for(property in object) {do stuffl;}

var user = {
    fName: "John",
    lName: "Johnson",
    age: 21,
};

var details = ' ';
var p; 

//p stands for property, the for loops loops through all of the properties
for(p in user){
    details += user[p] + " ";
}
console.log(details);