alert("Welcome to the castomized calcolator!")

let operationSing = prompt("Enter aperation sign please(+,-,*,/): ")
let a = parseInt(prompt("Enter the first number: "))
let b = parseInt(prompt("Enter the second number: "))

if (operationSing == "+") {
alert(a+b)
}else if (operationSing == "-") {
    alert(a-b)
}else if (operationSing == "/") {
    alert(a/b)
}else if (operationSing == "*") {
    alert(a*b)
} else {
    alert("something went wrong :( try again later")
}

alert("Thank you for using our colucator, have a good day :)" )