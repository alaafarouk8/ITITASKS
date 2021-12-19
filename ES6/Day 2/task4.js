const myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve(); }, 3000);
});
myPromise.then(function () {
    document.getElementById("h1").innerHTML = "Welcome!!!!!!!!!!";
    document.getElementById("avatarID").src = "background.jpg";

});
const myPromise2 = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve(); }, 6000);
});
myPromise2.then(function () {
    document.getElementById("h2").innerHTML = "thank u";
    window.location.href='https://www.facebook.com/'
});
