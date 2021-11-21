function changeBorder() {

    document.getElementById("fname").style.border = "solid 3px blue";
}
function RemoverBorder() {
    debugger;
    document.getElementById("fname").style.border = "none";
    var fullname = document.getElementById("fname").value
    if (fullname.length < 3 || fullname == "") {
        document.getElementById("invalidName").innerText= "❌";
        document.getElementById("fname").style.backgroundColor = "rgb(212, 154, 212)";

        return false;

    }
    else {
        document.getElementById("invalidName").innerText = "✔️";
        document.getElementById("fname").style.background = "white";
        return true;
    }
}
function CheckPass() {
    var pass1 = document.getElementById("pass").value;
    var pass2 = document.getElementById("ConfirmPass").value;
    if (pass1 != pass2) {
        document.getElementById("invalidPass").innerText= "❌";
        document.getElementById("ConfirmPass").style.backgroundColor = "rgb(212, 154, 212)";
        return false;
    }
    else {
        document.getElementById("invalidPass").innerText = "✔️";
        document.getElementById("ConfirmPass").style.backgroundColor = "white";
        return true;

    }

}
///////////////////////////////////////////////  Q2   /////////////////////////////////////////////////
function buttonSubmit(ev) {

    if (RemoverBorder() && CheckPass()) {
        ev.target.submit();
        var win;
        win = window.open('', '_blank');
        win.document.write("<h1> Thank you, " + document.getElementById("fname").value + " for registering in our website" + "</h2>");
        document.getElementById("invalid").innerHTML = "";

    }
    else {
        ev.preventDefault();
        document.getElementById("invalid").innerText= "❌ Please correct the validation errors first";

    }


}