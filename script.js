let rooms = [];

function createRoom() {
    const username = document.getElementById("username").value;

    if (username === "") {
        alert("Please enter a username first.");
        return;
    }

    const roomCode = Math.floor(100000 + Math.random() * 900000);

    rooms.push(roomCode);

    document.getElementById("roomMessage").innerText =
        username + " created a room!";

    document.getElementById("roomInfo").innerHTML =
        "<h2>Room Code: " + roomCode + "</h2>";
}

function joinRoom() {
    const username = document.getElementById("username").value;
    const roomCode = document.getElementById("roomCode").value;

    if (username === "") {
        alert("Please enter a username first.");
        return;
    }

    if (roomCode === "") {
        alert("Please enter a room code.");
        return;
    }

    if (rooms.includes(Number(roomCode))) {
        document.getElementById("roomMessage").innerText =
            username + " joined room " + roomCode + "!";

        document.getElementById("roomInfo").innerHTML =
           "<h2>Match Found</h2>" +
"<h3>Challenge:</h3>" +
"<p>Write a function that returns the sum of two numbers.</p>" +
"<pre>Example: add(2, 3) → 5</pre>";
    } else {
        document.getElementById("roomMessage").innerText =
            "Room does not exist.";
    }
}