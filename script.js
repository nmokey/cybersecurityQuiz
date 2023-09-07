//document.getElementById("score").innerHTML = sessionStorage.score;


sessionStorage.score = 0;
function addScore() {
        sessionStorage.score = Number(sessionStorage.score) + 1;
    document.getElementById("score").innerHTML = sessionStorage.score;
}

function getScore() {
    return score;
}
