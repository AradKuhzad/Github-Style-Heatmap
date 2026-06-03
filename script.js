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
