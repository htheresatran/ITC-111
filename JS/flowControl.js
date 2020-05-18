// Flow control 

//for loops

var fruits = ['apples', 'oranges', 'grapes', 'lemons'];
for (var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (var i = fruits.length -1;  i >= 0; i--){
    console.log(fruits[i]);
}

// If else 

var number = 7;

function oddEven(number) {
if (number %2 == 0) {
    console.log(number + "even");
} else {
    console.log(number + "is odd");
}
}

oddEven(15);