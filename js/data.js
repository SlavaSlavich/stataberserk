
const LIVE_MATCHES = [];
const MATCH_HISTORY = [
    {
        "id": "Flux_vs_Lancer_1768776575",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Flux",
        "team2": "Lancer",
        "score": "7-8",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "2.3",
            "x": "3.50",
            "p2": "1.55"
        },
        "logos": {
            "t1": "img/cs2_logo.svg",
            "t2": "img/cs2_logo.svg"
        }
    },
    {
        "id": "Ignis_vs_Havoc_1768775639",
        "time": "19-01-2026 02:00",
        "league": "Berserk CS2 League 2026 Week #4",
        "team1": "Ignis",
        "team2": "Havoc",
        "score": null,
        "winner": null,
        "map_num": null,
        "odds": {
            "p1": "2.35",
            "x": "3.50",
            "p2": "1.52"
        },
        "logos": {
            "t1": "img/cs2_logo.svg",
            "t2": "img/cs2_logo.svg"
        }
    },
    {
        "id": "Flux_vs_Myst_1768775629",
        "time": "19-01-2026 01:28",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Flux",
        "team2": "Myst",
        "score": "13-8",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "1.85",
            "x": "3.50",
            "p2": "1.85"
        },
        "logos": {
            "t1": "img/cs2_logo.svg",
            "t2": "img/cs2_logo.svg"
        }
    },
    {
        "id": "Myst_vs_Lancer_1768775381",
        "time": "19-01-2026 01:37",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Myst",
        "team2": "Lancer",
        "score": null,
        "winner": null,
        "map_num": null,
        "odds": {
            "p1": "2.35",
            "x": "3.50",
            "p2": "1.52"
        },
        "logos": {
            "t1": "img/cs2_logo.svg",
            "t2": "img/cs2_logo.svg"
        }
    },
    {
        "id": "Flux_vs_Lancer_1768775147",
        "time": "19-01-2026 01:19",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Flux",
        "team2": "Lancer",
        "score": "8-13",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "2.3",
            "x": "3.50",
            "p2": "1.55"
        },
        "logos": {
            "t1": "img/cs2_logo.svg",
            "t2": "img/cs2_logo.svg"
        }
    },
    {
        "id": "Myst_vs_Lancer_1768774750",
        "time": "19-01-2026 01:10",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Myst",
        "team2": "Lancer",
        "score": "16-13",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "2.35",
            "x": "3.50",
            "p2": "1.52"
        },
        "logos": {
            "t1": "img/cs2_logo.svg",
            "t2": "img/cs2_logo.svg"
        }
    },
    {
        "id": "Flux_vs_Myst_1768774083",
        "time": "19-01-2026 01:01",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Flux",
        "team2": "Myst",
        "score": "12-8",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "1.85",
            "x": "3.50",
            "p2": "1.85"
        },
        "logos": {
            "t1": "img/cs2_logo.svg",
            "t2": "img/cs2_logo.svg"
        }
    },
    {
        "id": "Flux_vs_Lancer_1768773678",
        "time": "19-01-2026 00:52",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Flux",
        "team2": "Lancer",
        "score": "16-13",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "2.3",
            "x": "3.50",
            "p2": "1.55"
        },
        "logos": {
            "t1": "img/cs2_logo.svg",
            "t2": "img/cs2_logo.svg"
        }
    }
];
const TWITCH_CHANNELS = [
    {
        "name": "Counter Strike 2",
        "channel": "berserk_cs2_league",
        "icon": "fa-solid fa-crosshairs"
    },
    {
        "name": "Dota 2",
        "channel": "berserk_dota2_league",
        "icon": "fa-brands fa-d-and-d"
    },
    {
        "name": "Mobile Legends",
        "channel": "ecs_tv",
        "icon": "fa-solid fa-mobile-screen"
    }
];
