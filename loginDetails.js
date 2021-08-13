var userList = new Array("username");
var passList = new Array("password");




function addUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert(username + password);
}

function verifyUser() {
    alert("Checking Credentials");
    var cuser = localStorage.getItem("username");
    var cpass = localStorage.getItem("password");
    alert(cuser + " " + cpass);


    var vuser = document.getElementById("userlog").value;
    var vpass = document.getElementById("passlog").value;
    alert(vuser + " " + vpass);


    if (vuser.valueOf() == cuser.valueOf()) {
        alert("User Verified");
    } else {
        if (alert("Wrong Credentials")) {
            window.location.href = "index.html";
        };
    }
}