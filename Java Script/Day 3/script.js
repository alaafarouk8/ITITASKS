////////////////////////////////// Q1 /////////////////////////////////////////////
function myFunction(event) {
    alert("the key code for what you pressed on " + event.key + " is: " + event.keyCode);
}

//////////////////////////////////////// Q2 ////////////////////////////////////////
var stopvar;
function clockFunction() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    document.getElementById("p").value = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

function openClock() {
    stopvar = setInterval(clockFunction, 1000);

}

window.addEventListener("onkeydown", keyDown, true);
window.addEventListener("keydown", keyDown);
function myStopFunction() {
    clearInterval(stopvar);
}

function keyDown() {
    var e = window.event;
    if (e.keyCode == 83) {
        myStopFunction();

    }
}

//////////////////////////////////// Q3  ////////////////////////////////////////////////
var myWindow;
function openWindow() {
    myWindow = window.open("", "myWindow", "width=200,height=100");
    myWindow.document.write("<textarea > </textarea >")
}
function window_Time() {
    setTimeout(openWindow, 3000);
}
function closeWindow() {
    myWindow.close();
}
////////////////////////////////////////// Q5 //////////////////////////////////////////////
function changePic1() {
    document.getElementById("pic").src = "sadface.jpg";
  }
  function changePic2(){
    document.getElementById("pic").src = "smileface.png";
  }
function butClick() {
    alert("Hello");
}
/////////////////////////////////////// Q6 ///////////////////////////////////////////////////
function loginForm()
{
    console.log(document.getElementById("userName").value);
    localStorage.setItem("name",document.getElementById("userName").value );
    localStorage.setItem("pw", document.getElementById("userPw").value);
    var a = localStorage.getItem("name");
    var b = localStorage.getItem("pw");
    window.open('', '_blank').document.write("<textarea> Your Name :" + a +"  " + "Your Password :" + b +"</textarea>");
}
