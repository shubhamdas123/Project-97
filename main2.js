function nextScreen() {
    username = document.getElementById("usernameInput").value;
    window.location = "mainPage.html";
    localStorage.setItem("username", username);
}

function prevScreen() {
    window.location = "index.html";
}