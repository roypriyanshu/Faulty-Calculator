let random = Math.random()
console.log(random);
let a= parseFloat(prompt("Enter first number: "));
let c= prompt("Enter operation: ");
let b= parseFloat(prompt("Enter second number: "));
let obj ={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
if(random>0.1){
    if( c == "+"){
        console.log(a+b);
    }
    else if(c=="-"){
            console.log(a-b);
    }
    else if(c== "*"){
        console.log(a*b);
    }
    else if(c == "/"){
            console.log(a/b);
    }
    else{
        console.log("Invalid Operation.")
    }
}
else{
    c= obj[c]
    let result = eval(`${a} ${c} ${b}`);
    console.log(`The result is: ${result}`);
    alert(`The result is: ${result}`);
}