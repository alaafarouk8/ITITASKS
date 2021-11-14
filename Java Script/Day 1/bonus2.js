////////////////////////////////////////////////////////////////////////////////////

var username, age, birthYear;

username = prompt("Enter Your Name Please :");
while (isNaN(username) == false) {
    username = prompt("Enter Your Name Please :");
}
while (username == null) {
    username = prompt("Enter Your Name Please :");
}
birthYear = prompt("Enter Your Birth Year Please :");
while (birthYear == "") {
    birthYear = prompt("Enter Your Birth Year Please :");
}
while (isFinite(birthYear) == false) {
    birthYear = prompt("Enter Your Birth Year Please :");
}
while (birthYear > 2010) {
    birthYear = prompt("Enter Your Birth Year Please :");
}
age = (2021 - birthYear);
////////////////////////////// table ////////////////////////////////////////////////
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
////////////////////////////// row1 /////////////////////////////////////////////////

document.getElementById('body').appendChild(table);
let row_1 = document.createElement('tr');
let nameRow = document.createElement('th');
nameRow.innerHTML = "Name";
let usernameData = document.createElement('td');
usernameData.innerHTML = username;

row_1.appendChild(nameRow);
row_1.appendChild(usernameData);
thead.appendChild(row_1);

////////////////////////////// row2 /////////////////////////////////////////////////

let row_2 = document.createElement('tr');
let birthYearRow = document.createElement('th');
birthYearRow.innerHTML = "Birth Year";
let birthYearData = document.createElement('td');
birthYearData.innerHTML = birthYear;

row_2.appendChild(birthYearRow);
row_2.appendChild(birthYearData);
tbody.appendChild(row_2);

////////////////////////////// row3 /////////////////////////////////////////////////

let row_3 = document.createElement('tr');
let AgeRow = document.createElement('th');
AgeRow.innerHTML = "Age";
let AgeData = document.createElement('td');
AgeData.innerHTML = age;

row_3.appendChild(AgeRow);
row_3.appendChild(AgeData);
tbody.appendChild(row_3);

////////////////////////////////////////////////////////////////////////////////////