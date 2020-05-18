// conditions else - if

//adds another condition to resolve in an if else block.center

var a = true;
var b = false;
var c;
if (a||b){
    c = true;
}else if (b == true && a == false){
    c = false;
}else{
    c=true;
}

//nesting is placing one object 

function hello() {
    var msg = 'hello';
    function world() {msg += 'world.'; }
    world();
    return msg;
}