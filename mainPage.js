function logout() {
    window.location = "index.html";
    localStorage.removeItem("username");
}

function getName() {
    username = localStorage.getItem("username");
    document.getElementById("usernameLbl").innerHTML = "Welcome " + username + "!";
    document.getElementById("usernameLbl").style.fontWeight = "bold";
}

function about() {
    window.location = "about.html";
}

function poverty() {
    window.location = "poverty.html";
}

function government() {
    window.location = "government.html";
}

function donation() {
    window.location = "donation.html";
}

function comment() {
    window.location = "comment.html";
}

function home() {
    window.location = "mainPage.html";
}

function goToWhJr() {
    window.location = "https://code.whitehatjr.com/s/login";
}