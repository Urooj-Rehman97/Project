//
document.write("<h1>Switch case </h1>");
// var day=1;
// switch (day){
//     case 1: 
//         document.write("Today is Monday");
//         break;
//     case 2:
//         document.write("Today is Tuesday");
//         break;
//     case 3:
//         document.write("Today is Wednesday");
//         break;
//     case 4:
//         document.write("Today is Thursday");
//         break;
//     case 5:
//         document.write("Today is Friday");
//         break;
//     case 6:
//         document.write("Today is Saturday");
//         break;
//     case 7:
//         document.write("Today is Sunday");
//         break;
//     default:
//         document.write("Invalid value");
// }
// document.write("<h1>Built-in function</h1>");
// alert("Welcome to our Website");
// var username=prompt("Enter your name: ");
// document.write("Hello "+username);
// confirm("Do you want to continue");
var days=prompt("Enter any num to check current day: ");
switch(days){
    case "1":
        document.write("Today is Monday");
        break;
    case "2":
        document.write("Today is Tuesday");
        break;
    case "3":``
        document.write("Today is Wednesday");
        break;
    case "4":
        document.write("Today is Thursday");
        break;
    case "5":
        document.write("Today is Friday");
        break;
    case "6":
        document.write("Today is Saturday");
        break;
    case "7":
        document.write("Today is Sunday");
        break;
    default:
        document.write("Invalid Number");
        break
}
//Nested if
document.write("<h1>Nested If</h1>");
var a=8;
var b=5;
if(a>b){
    if(a==8){
        document.write("Valid Number");
    }else{
        document.write("Invalid Number");
    }
}
