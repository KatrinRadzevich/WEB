// alert(`Результат: ${158+2}`) //диалоговое окно с кнопкой "ОК"
// // блочная область видимости let
// function exampleLet() {
// let x = 10
// if (true) {
//     let x = 20;
//     alert(x) //20
// }
// alert(x) //10
// }
// exampleLet()
// // var существует в пределах функции,позволяя изменять значение(функциональная область видимости)
// function exampleVar() {
//     var x = 10
//     if (true) {
//         var x = 20;
//         alert(x) //20
//     }
//     alert(x) //20
//     }
//     exampleVar()

//     let name = "Katrin"
    // alert(`hi, ${name}`)

    // let userName = prompt("Enter your name: ", "USER")
    // function showGreetings() {
    //     let message = "Hello, " + userName
    //     alert(message)
    // }
    // showGreetings()

    if (confirm("Складываем числа 3 и 5?")) { //OK
alert(5+3)
    }
    else { // cancel
        alert("...")
    }