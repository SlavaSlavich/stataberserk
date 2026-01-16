document.addEventListener('DOMContentLoaded', () => {
    const teamListEl = document.getElementById('teamList');
    const teamSearchEl = document.getElementById('teamSearch');
    const currentTimeEl = document.getElementById('currentTime');

    let currentTeamId = null;

    // Load initial data
    if (typeof TEAMS !== 'undefined' && TEAMS.length > 0) {
        renderTeamList(TEAMS);
        // Default to first team
        loadTeamData(TEAMS[0].id);
        currentTeamId = TEAMS[0].id;
    }

    startClock();

    // Search Logic
    teamSearchEl.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredTeams = TEAMS.filter(team =>
            team.name.toLowerCase().includes(query)
        );
        renderTeamList(filteredTeams);
    });

    function renderTeamList(teams) {
        teamListEl.innerHTML = '';

        teams.forEach(team => {
            const el = document.createElement('div');
            el.className = `team-item ${team.id === currentTeamId ? 'active' : ''}`;
            el.onclick = () => {
                currentTeamId = team.id;
                loadTeamData(team.id);
                renderTeamList(TEAMS); // Re-render to update active styling (inefficient but simple for now)
            };

            el.innerHTML = `
                <img src="${team.logo}" alt="${team.name}" width="24" height="24">
                <span>${team.name}</span>
                ${team.isLive ? '<span style="margin-left:auto; width:6px; height:6px; background:var(--accent); border-radius:50%; box-shadow:0 0 5px var(--accent);"></span>' : ''}
            `;

            teamListEl.appendChild(el);
        });
    }

    function loadTeamData(teamId) {
        const team = TEAMS.find(t => t.id === teamId);
        if (!team) return;

        // Animate content out
        const contentArea = document.getElementById('contentArea');
        contentArea.style.opacity = '0';
        contentArea.style.transform = 'translateY(10px)';
        contentArea.style.transition = 'opacity 0.2s, transform 0.2s';

        setTimeout(() => {
            updateDOM(team);
            // Animate content in
            contentArea.style.opacity = '1';
            contentArea.style.transform = 'translateY(0)';
        }, 200);
    }

    function updateDOM(team) {
        // Hero Section Elements
        const teamAName = document.getElementById('teamAName');
        const teamALogo = document.getElementById('teamALogo');
        const teamBName = document.getElementById('teamBName');
        const teamBLogo = document.getElementById('teamBLogo');
        const matchStatus = document.getElementById('matchStatus');
        const scoreBoard = document.getElementById('scoreBoard');
        const mapName = document.getElementById('mapName');
        const oddsGrid = document.getElementById('oddsGrid');

        const matchData = team.currentMatch;

        if (matchData) {
            teamAName.textContent = team.name;
            teamALogo.src = team.logo;

            teamBName.textContent = matchData.opponent;
            teamBLogo.src = matchData.opponentLogo;

            matchStatus.textContent = matchData.status; // e.g. "LIVE" or "20:00"

            if (matchData.score && matchData.score.includes(':')) {
                scoreBoard.innerHTML = `
                    <span class="score">${matchData.score.split(':')[0]}</span>
                    <span class="divider">:</span>
                    <span class="score">${matchData.score.split(':')[1]}</span>
                `;
            } else {
                scoreBoard.innerHTML = `
                    <span class="score">-</span>
                    <span class="divider">:</span>
                    <span class="score">-</span>
                `;
            }

            mapName.textContent = matchData.map || '';

            // Odds
            if (matchData.odds) {
                oddsGrid.style.display = 'grid';
                document.getElementById('oddP1').textContent = matchData.odds.p1;
                document.getElementById('oddDraw').textContent = matchData.odds.draw;
                document.getElementById('oddP2').textContent = matchData.odds.p2;
            } else {
                oddsGrid.style.display = 'none';
            }

            // Adjust status color
            if (matchData.status === 'LIVE') {
                matchStatus.style.color = 'var(--accent)';
            } else {
                matchStatus.style.color = 'var(--primary)';
            }

        } else {
            // Fallback if no match
            teamAName.textContent = team.name;
            teamALogo.src = team.logo;
            teamBName.textContent = "--";
            teamBLogo.src = "";
            matchStatus.textContent = "НЕТ МАТЧЕЙ";
            oddsGrid.style.display = 'none';
        }

        // History
        const matchHistory = document.getElementById('matchHistory');
        matchHistory.innerHTML = '';
        if (team.history) {
            team.history.forEach(match => {
                const li = document.createElement('li');
                li.className = 'history-item';
                li.innerHTML = `
                    <span class="result ${match.result === 'W' ? 'win' : 'loss'}">${match.result}</span>
                    <span class="opponent">vs ${match.opponent}</span>
                    <span class="score-mini">${match.score}</span>
                    <span class="date">${match.date}</span>
                `;
                matchHistory.appendChild(li);
            });
        }
    }

    function startClock() {
        // Update immediately
        updateTime();
        // Then every second
        setInterval(updateTime, 1000);
    }

    function updateTime() {
        const now = new Date();
        currentTimeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
});
