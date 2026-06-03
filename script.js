function generateData() {
    let inactiveStreak = 0;
    let isInactive = 0;
    const activities = [];
    for (let day = 1; day <= 365; day++) {
        let score = Math.floor(Math.random() * 11);
        activities.push({
            day: day,
             score: score});

             if (score === 0) {
                inactiveStreak++;
             }
             else {
                inactiveStreak = 0;
             }

             if (inactiveStreak === 7) {
                isInactive = true;
                break;
             }
    }
    return { activities, isInactive };
}

function renderHeatmap(activities) {
    const heatmap = document.getElementById("heatmap");
    heatmap.innerHTML = "";

      for (let i = 0; i < activities.length; i++) {
        const item = activities[i];

        const cell = document.createElement("div");
        cell.classList.add("cell");

        if (item.score === 0) {
            cell.style.backgroundColor = "#ebedf0";
        } else if (item.score <= 3) {
            cell.style.backgroundColor = "#9be9a8";
        } else if (item.score <= 6) {
            cell.style.backgroundColor = "#40c463";
        } else {
            cell.style.backgroundColor = "#216e39";
        }
        heatmap.appendChild(cell);
    }
}

