const populateScores = function() {
    // Takes scores from localStorage and sorts them by ASC order
    const rawScores = localStorage.getItem("scores");
    const scores = JSON.parse(rawScores)
    let scoresArr = scores.sort((a, b) => (b.score - a.score));

    for (let i = 0; i < scoresArr.length; i++) {
        // Only show top 5 scores
        if (i > 4) {
            break;
        };

        const tableEl = document.getElementById("highscores");
        
        const entry = scoresArr[i];
        const nameVal = entry.name;
        const scoreVal = entry.score;

        tableEl.innerHTML +=
        `<tr>
            <td>${nameVal}</td>
            <td>${scoreVal}</td>
        </tr>`
    };

}

populateScores();