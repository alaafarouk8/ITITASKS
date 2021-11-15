
//////////////////////////////////////////////////////// Q1 /////////////////////////////////////////////////////////

const TipsOfJavaScript = ["Java script is a Easy To Learn", "Java script is a web client side", "Java script is a scriptting language", "Java script is a flexible", "Java script is a lightweight", "Java script is a interpreted", "Java script is Creating a Dynamic web page",
    "Java script is a Object Based", "Java script is a Event Driven", "Java script is Platform independnet"];

alert(TipsOfJavaScript[Math.floor(Math.random() * TipsOfJavaScript.length)]);

//////////////////////////////////////////////////////// Q2 //////////////////////////////////////////////////////////

function DateFunction() {

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    // document.write(dateTime) ; 
    alert(dateTime);
    document.write(new Date());

}
//////////////////////////////////////////////////////// Q4 //////////////////////////////////////////////////////////
function Display4() {
    var GetColor = prompt("Please Choose a color to display a date with a color , (r) red, (b) blue, (g) green)");
    const Colors = [];
    Colors["r"] = "red";
    Colors["b"] = "blue";
    Colors["g"] = "green";


    
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    switch (GetColor) {
        case "r":
            document.write("Current Date : " + dateTime.fontcolor("red").bold());
            break;
        case "b":
            document.write("Current Date : " + dateTime.fontcolor("blue").bold());
            break;
        case "g":
            document.write("Current Date : " + dateTime.fontcolor("green").bold());
            break;
        default:
            alert("You have to choose one of the colors");
    }
    

    document.write("<hr> with another solution <br> Current Date : " + dateTime.fontcolor(Colors[GetColor]).bold() + "<hr>");

}

//////////////////////////////////////////////////////// Q3 /////////////////////////////////////////////////////
function Error_Function() {
try {
    alerrrt("To Make an error!!");

} catch (err) {
    document.write(err);
}
}
//////////////////////////////////////////////////////// Q3 Bonus ////////////////////////////////////////////////

/*
  for sort function explain ->>>
  if it returns a negative value, the value in a will be ordered before b.
  if it returns 0, the ordering of a and b won’t change.
  if it returns a positive value, the value in b will be ordered before a.
*/

function SortNumbers() {
    var numbers = ["100", "2", "5", "3", "14", "50", "1"];
    document.write("before Sort : " + numbers + " <br>");
    debugger;
    numbers.sort(function (a, b) {
        return a - b;
    });
    document.write("<hr>");
    document.write("After Sort : " + numbers + " <br>");

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function DateFunctionQ4_withBonus()
{
    var datestring = prompt("Please Enter the date with format (DD – MM – YYYY)") ; 
    var today = new Date();
    if (datestring.length==10 && datestring.includes('-',2)&&datestring.includes('-' ,5))
    {
        var date = today.getFullYear()+ '-' + (today.getMonth() + 1) + '-' + (today.getDay()+10);
        alert(date) ; 
    }
    else 
    {
        alert("Wong Date Format") ; 
    }

}