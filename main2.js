function nextScreen() {
    username = document.getElementById("usernameInput").value;
    if (username == "") {
        document.getElementById("error").innerHTML = "Please fill out this field! 👆🏻"
    } else {
        window.location = "mainPage.html";
        localStorage.setItem("username", username);
    }
}

function prevScreen() {
    window.location = "index.html";
}
