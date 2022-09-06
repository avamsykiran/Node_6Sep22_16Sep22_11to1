
x = 100

function f1(){
    y = 200
    var z=300

    if(true){
        var a = 10;
        let b = 20;
        console.log(a);
        console.log(b);
    }

    console.log(x);
    console.log(y);
    console.log(z);
    console.log(a);
    //console.log(b); is not allowed here.. as b is not visible here..
}

f1();

console.log(x);
console.log(y);
//console.log(z); is not allowed here.. as z is not visible here..