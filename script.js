function addScore() {
    sessionStorage.score = Number(sessionStorage.score) + 1;
    document.getElementById("score").innerHTML = sessionStorage.score;
}

function showExplanation(button) {
    const explanationBox = document.getElementById('explanation');
    const explanation = button.getAttribute('data-explanation');

    explanationBox.innerHTML = explanation;
    explanationBox.style.display = 'block';
}

function getScore() {
    return score;
}

function displayScore() {
    if (sessionStorage.score <= 10) {
        alert("Your score is: " + sessionStorage.score + "/20!\nYikes!");
    }
    else if (sessionStorage.score <= 15) {
        alert("Your score is: " + sessionStorage.score + "/20!\nYou are kinda cybersecure!");
    }
    else if (sessionStorage.score <= 19) {
        alert("Your score is: " + sessionStorage.score + "/20!\nGreat job!");
    }
    else {
        alert("Your score is: " + sessionStorage.score + "/20!\ncheater");
    }
}
