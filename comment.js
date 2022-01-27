const firebaseConfig = {
    apiKey: "AIzaSyBd7d2NU3Lh_8q5L2fh8BLgDTgrDhD4fJw",
    authDomain: "savethepoor-d74cb.firebaseapp.com",
    databaseURL: "https://savethepoor-d74cb-default-rtdb.firebaseio.com",
    projectId: "savethepoor-d74cb",
    storageBucket: "savethepoor-d74cb.appspot.com",
    messagingSenderId: "1038323424000",
    appId: "1:1038323424000:web:1d34a2ba4361c3b40531e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");

function getData() {
    dbRef = firebase.database().ref("/");
    dbRef.on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            console.log("childKey");
            console.log("childData");
            firebase_message_id = childKey;
            message_data = childData;
            //Start code
            msgName = message_data['message'];
            userName = message_data['username'];
            msgLikes = message_data['likes'];
            div = document.createElement("div");
            document.getElementById("output").appendChild(div);
            var hr = document.createElement("hr");
            var img = document.createElement("img");
            img.src = "tick.png";
            img.id = "imgTick";
            var lblUsername = document.createElement("h4");
            lblUsername.innerHTML = userName
            lblUsername.appendChild(img);
            div.appendChild(lblUsername);
            var lblMsg = document.createElement("label");
            lblMsg.innerHTML = msgName;
            div.appendChild(lblMsg);
            var br = document.createElement("br");
            div.appendChild(br);
            lbl = document.createElement("label");
            div.appendChild(br);
            div.appendChild(hr);
            //End code
        });
    });
}
getData();

function send() {
    userMessage = document.getElementById("messageInput").value;
    dbRef = firebase.database().ref("/");
    dbRef.push({
        username: username,
        message: userMessage,
    })
    document.getElementById("messageInput").value = "";
}

function home() {
    window.location = "mainPage.html";
}