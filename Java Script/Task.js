//////////////////////////////////////////  Q2   ///////////////////////////////////////// 
alert("Welcome to My Site");
var username = prompt("Enter Your Name , Please:", "");
document.write("<h1> <center> Welcome " + username + "<center>  </h1>  <br>");

//////////////////////////////////////////  Q2  ///////////////////////////////////////// 

function SumFunction() {
    var n1 = parseInt(prompt("Enter Name num 1 :"));
    var n2 = parseInt(prompt("Enter Name num 2 :"));
    var sum = n1+n2 ; 
    return alert("The Result of Summation = "+ sum);
}

//////////////////////////////////////////  Q3  ///////////////////////////////////////// 


function math() {
    var s = prompt("Enter expression : ", "");
    return alert("The Result of Expression= " + eval(s));
}
//////////////////////////////////////////  Q4  ///////////////////////////////////////// 
const fullname = "Alaa Farouk";
try {
    fullname = "farouk";
} catch (err) {
  console.log(err);

}
//////////////////////////////////////////  Q5  ///////////////////////////////////////// 

var x1 = 10;
var x2 = 20;
var x3 = 30;
var x4 = 40;
console.log("Console.log" + " " +  x1);
console.debug("Console.debug" + " " +x2);
console.warn("Console.warn" + " " + x3);
console.info("Console.info" + " " + x4);
console.error("Console.error" + " " + x5);