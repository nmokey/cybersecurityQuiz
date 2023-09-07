//document.getElementById("score").innerHTML = sessionStorage.score;

function addScore() {
    sessionStorage.score = Number(sessionStorage.score) + 1;
    document.getElementById("score").innerHTML = sessionStorage.score;
}

function getScore() {
    return score;
}
