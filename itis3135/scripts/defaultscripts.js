function submitForm() {
    var userName = document.getElementById("userName").value;
    var userMood = document.getElementById("userMood").value;
    var favoriteNumber = Math.abs(Math.round(parseFloat(document.getElementById("favoriteNumber").value))); // Ensure a positive integer

    var welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.innerHTML = "The Karendys Enterprise welcomes you, " + userName + "!</br>We're glad you are doing " + userMood + "!";

    var polygonName = determinePolygonName(favoriteNumber);
    alert("Your favorite number corresponds to a " + polygonName + ".");
}

function determinePolygonName(number) {
    var polygonMap = {
        0: "Nilgon",
        1: "Monogon",
        2: "Bigon",
        3: "Trigon",
        4: "Tetragon",
        5: "Pentagon",
        6: "Hexagon",
        7: "Heptagon",
        8: "Octagon",
        9: "Nonagon",
        10: "Decagon"
    };

    return polygonMap[number] || "Polygon";
}

function hopCounter() {
    var hopCount = Math.floor(Math.random() * 100) + 1; // Random number of hops
    alert("The kangaroo hopped " + hopCount + " times!");
}

function pouchFortuneTeller() {
    var fortunes = ["You will have a hopping good day!", "Expect a surprise in your pouch of life!", "Avoid thorny situations!"];
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    alert("Kangaroo's Pouch says: " + randomFortune);
}

function boomerangReturnTest() {
    var success = Math.random() < 0.5; // 50% chance of success
    var result = success ? "The boomerang returned perfectly!" : "Oops! The boomerang didn't come back.";
    alert(result);
}

function kangarooSongComposer() {
    var userName = document.getElementById("userName").value;
    var userMood = document.getElementById("userMood").value;

    var song = "🎵 " + userName + " the Kangaroo, hopping through the day,\nFeeling " + userMood + ", in a kangaroo way! 🎶";
    alert(song);
}
