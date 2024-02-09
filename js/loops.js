//While loop
document.write("<h1>While Loop</h1>");
var i=0;
while(i<=10){
    document.write(i+"<br>");
    i++;
}
var j=0;
while(j<=10){
    document.write("JavaScript <br>");
    j++;
}
//do-while loop
document.write("<h1>Do-While Loop</h1>");

var k=10;
do{
    document.write("Hello world<br>");
    k--;
}while(k>=0)

document.write("<h1>For Loop</h1>");
for(l=0; l<=10; l++){
    document.write("BMW<br>");
}
document.write("<h1>Continue/Break Statement</h1>");
for(l=0; l<=10; l++){
    if(l==3){
        document.write(l+") JavaScript<br>");
        continue;
    }
    document.write(l+") BMW<br>");
}
//Even Number
document.write("<h1>Even Numbers: </h1>");

for(num=0; num<=20; num++){
    if(num%2==0){
        document.write(num+"<br>")
    }
}