document.getElementById("score").innerHTML = score;

function addScore() {
    score++;
    document.getElementById("score").innerHTML = score;
}

function getScore() {
    return score;
}