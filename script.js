function createRoom() {
    const username = document.getElementById("username").value;

    if (username === "") {
        alert("Please enter a username first.");
        return;
    }

    const roomCode = Math.floor(100000 + Math.random() * 900000);

    document.getElementById("roomMessage").innerText =
        username + " created room: " + roomCode;
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

    document.getElementById("roomMessage").innerText =
        username + " joined room: " + roomCode;
}