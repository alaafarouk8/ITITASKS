document.write("kdkkdkdk") ;
debugger;
localStorage.setItem("name", document.getElementById("userName").value);
localStorage.setItem("pw", document.getElementById("userPw").value);
var a = localStorage.getItem("name");
var b = localStorage.getItem("pw");
document.write(a) ;
document.write(b) ;