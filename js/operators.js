//Arithmetic Operator
var a=4;
var b=10;
var sum=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;
var rem=a%b;
document.write("The value of a is: "+a+"<br>");
// document.write(a);
// document.write("<br>");
document.write("The value of b is: "+b+"<br>");
document.write("The sum of a and b is: "+sum+"<br>");
document.write("The subtraction of a and b is: "+sub+"<br>");
document.write("The product of a and b is: "+mul+"<br>");
document.write("The division of a and b is: "+div+"<br>");
document.write("The remainder of a and b is: "+rem+"<br>");
//Increment or Decrement Operator
a++;
document.write("The current value of a is:"+a+"<br>");
a--;
document.write("The current value of a is:"+a+"<br>");
//If-Statement and Relational Operator
var value1=75;
var value2="75";
document.write("The value1 is:"+value1+"<br>");
document.write("The value2 is:"+value2+"<br>");
// if(value1==value2){
//  document.write("Value1 is equal to Value2");
// }
if(value1===value2){
    document.write("Value1 is equal to Value2<br><br>");
   }

// If-else if statement and Logical Operator
document.write("<h1>Check Grade using Logical Operator</h1>")
var per=80;
if(per<=100&&per>=80){
    document.write("A-one Grade");
}else if(per<80&&per>=70){
    document.write("A Grade");
}else if(per<70&&per>=60){
    document.write("B Grade");
}else if(per<60&&per>=50){
    document.write("C Grade");
}else{
    document.write("Fail");
}
//If else statement
document.write("<h1>If-Else Statement</h1>")
var num=78;
var num2=45;
if(num<num2){
    document.write("num is less than num2");
}else{
    document.write("Num is not less than to Num2");
}
//Assignment Operator
document.write("<h1>Assignment Operators</h1>")

var x=5;
document.write(" The value of x is: "+x+"<br>");
x+=6;
document.write(" The value of x is: "+x+"<br>");