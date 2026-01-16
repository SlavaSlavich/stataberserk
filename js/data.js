// MOCK DATA FOR DEVELOPMENT
// This file will be overwritten by the Python bot later

const LIVE_MATCHES = [
    {
        id: "live_1",
        league: "CS2 1x1 Berserk",
        team1: "Natus Vincere",
        team2: "G2",
        score: "8-5",
        status: "LIVE",
        time: "16-01-2026 14:20",
        odds: { p1: "1.55", x: "4.20", p2: "2.80" },
        logos: {
            t1: "https://img-cdn.hltv.org/teamlogo/Natus%20Vincere/4608.svg?ixlib=java-2.1.0&w=100&s=1374528348988588046",
            t2: "https://img-cdn.hltv.org/teamlogo/G2/5995.svg?ixlib=java-2.1.0&w=100&s=1"
        }
    }
];

const MATCH_HISTORY = [
    {
        id: "h_1",
        time: "16-01-2026 21:00",
        league: "CS2 1x1 Berserk",
        team1: "Team Spirit",
        team2: "FaZe",
        score: "13-11",
        winner: "team1", // used for coloring
        odds: { p1: "1.80", x: "3.50", p2: "2.05" },
        logos: {
            t1: "https://img-cdn.hltv.org/teamlogo/Spirit/7020.svg?ixlib=java-2.1.0&w=100&s=55415712613d2f235555555555555555",
            t2: "https://img-cdn.hltv.org/teamlogo/FaZe/6667.svg?ixlib=java-2.1.0&w=100&s=46080000000000000"
        }
    },
    {
        id: "h_2",
        time: "16-01-2026 19:30",
        league: "CS2 1x1 Berserk",
        team1: "Virtus.pro",
        team2: "MOUZ",
        score: "9-13",
        winner: "team2",
        odds: { p1: "2.10", x: "3.50", p2: "1.65" },
        logos: {
            t1: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Virtus.pro_logo_%282019%29.png/1200px-Virtus.pro_logo_%282019%29.png",
            t2: "https://img-cdn.hltv.org/teamlogo/MOUZ/4494.svg?ixlib=java-2.1.0&w=100&s=1"
        }
    },
    {
        id: "h_3",
        time: "16-01-2026 18:00",
        league: "CS2 1x1 Berserk",
        team1: "Astralis",
        team2: "Vitality",
        score: "1-13",
        winner: "team2",
        odds: { p1: "3.20", x: "3.80", p2: "1.35" },
        logos: {
            t1: "https://img-cdn.hltv.org/teamlogo/Astralis/6665.svg?ixlib=java-2.1.0&w=100&s=1",
            t2: "https://img-cdn.hltv.org/teamlogo/Vitality/9565.svg?ixlib=java-2.1.0&w=100&s=1e1628d0526a7e0a8d6e3c0258167699"
        }
    },
    {
        id: "h_4",
        time: "16-01-2026 16:15",
        league: "CS2 1x1 Berserk",
        team1: "Natus Vincere",
        team2: "Team Spirit",
        score: "16-14",
        winner: "team1",
        odds: { p1: "1.90", x: "3.50", p2: "1.90" },
        logos: {
            t1: "https://img-cdn.hltv.org/teamlogo/Natus%20Vincere/4608.svg?ixlib=java-2.1.0&w=100&s=1374528348988588046",
            t2: "https://img-cdn.hltv.org/teamlogo/Spirit/7020.svg?ixlib=java-2.1.0&w=100&s=55415712613d2f235555555555555555"
        }
    }
];
