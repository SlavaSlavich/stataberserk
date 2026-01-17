
const LIVE_MATCHES = [
    {
        "id": "Jagger_vs_Havoc",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Havoc",
        "score": "11-13",
        "status": "LIVE",
        "time": "1-я карта",
        "odds": {
            "p1": "2.05",
            "x": "3.50",
            "p2": "1.68"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Raze",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Raze",
        "score": "0-0",
        "status": "Coming Soon",
        "time": "17-01-2026 14:02",
        "odds": {
            "p1": "2.05",
            "x": "3.50",
            "p2": "1.68"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    }
];
const MATCH_HISTORY = [
    {
        "id": "Raze_vs_Havoc_1768647157",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Raze",
        "team2": "Havoc",
        "score": "13-16",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "1.48",
            "x": "3.50",
            "p2": "2.5"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Raze_1768646542",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Raze",
        "score": "9-13",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "2.05",
            "x": "3.50",
            "p2": "1.68"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Havoc_1768645961",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Havoc",
        "score": "13-6",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "2.05",
            "x": "3.50",
            "p2": "1.68"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Raze_vs_Havoc_1768645424",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Raze",
        "team2": "Havoc",
        "score": "7-13",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "1.48",
            "x": "3.50",
            "p2": "2.5"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Raze_1768644889",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Raze",
        "score": "13-8",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "2.05",
            "x": "3.50",
            "p2": "1.68"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Havoc_1768644426",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Havoc",
        "score": "13-16",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "2.05",
            "x": "3.50",
            "p2": "1.68"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Raze_vs_Havoc_1768643845",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Raze",
        "team2": "Havoc",
        "score": "13-11",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "1.48",
            "x": "3.50",
            "p2": "2.5"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Raze_1768642241",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Raze",
        "score": "10-12",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "2.1",
            "x": "3.50",
            "p2": "1.65"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Havoc_1768641738",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Havoc",
        "score": "13-9",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "2.05",
            "x": "3.50",
            "p2": "1.68"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Raze_vs_Havoc_1768641141",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Raze",
        "team2": "Havoc",
        "score": "10-8",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "1.48",
            "x": "3.50",
            "p2": "2.5"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Raze_1768640682",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Raze",
        "score": "11-13",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "2.05",
            "x": "3.50",
            "p2": "1.68"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Havoc_1768640209",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Havoc",
        "score": "14-15",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "2.05",
            "x": "3.50",
            "p2": "1.68"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Raze_vs_Havoc_1768639700",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Raze",
        "team2": "Havoc",
        "score": "14-16",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "1.48",
            "x": "3.50",
            "p2": "2.5"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Raze_1768639043",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Raze",
        "score": "9-12",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "2.0",
            "x": "3.50",
            "p2": "1.72"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Havoc_1768638450",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Havoc",
        "score": "4-13",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "2.0",
            "x": "3.50",
            "p2": "1.72"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Raze_vs_Havoc_1768638034",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Raze",
        "team2": "Havoc",
        "score": "13-5",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "1.5",
            "x": "3.50",
            "p2": "2.4"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Raze_1768637760",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Raze",
        "score": "25-23",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "2.0",
            "x": "3.50",
            "p2": "1.72"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Havoc_1768636832",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Havoc",
        "score": "13-8",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "2.05",
            "x": "3.50",
            "p2": "1.68"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Raze_vs_Havoc_1768636331",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Raze",
        "team2": "Havoc",
        "score": "10-13",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "1.48",
            "x": "3.50",
            "p2": "2.5"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Raze_1768635893",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Raze",
        "score": "13-10",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "2.05",
            "x": "3.50",
            "p2": "1.68"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Havoc_1768635216",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Havoc",
        "score": "5-13",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "2.0",
            "x": "3.50",
            "p2": "1.72"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Raze_vs_Havoc_1768634742",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Raze",
        "team2": "Havoc",
        "score": "13-10",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "1.5",
            "x": "3.50",
            "p2": "2.4"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Raze_1768634175",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Raze",
        "score": "9-13",
        "winner": "team2",
        "map_num": 1,
        "odds": {
            "p1": "2.1",
            "x": "3.50",
            "p2": "1.65"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Jagger_vs_Havoc_1768633635",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Jagger",
        "team2": "Havoc",
        "score": "13-9",
        "winner": "team1",
        "map_num": 1,
        "odds": {
            "p1": "2.1",
            "x": "3.50",
            "p2": "1.65"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768632730",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "13-6",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.48",
            "x": "3.50",
            "p2": "2.5"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768632223",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "12-10",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "2.3",
            "x": "3.50",
            "p2": "1.55"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768631707",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "13-10",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.38",
            "x": "3.50",
            "p2": "2.8"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768631175",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "13-11",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.48",
            "x": "3.50",
            "p2": "2.5"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768630580",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "5-13",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "2.2",
            "x": "3.50",
            "p2": "1.58"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768630056",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "13-7",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.38",
            "x": "3.50",
            "p2": "2.8"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768629571",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "13-10",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.5",
            "x": "3.50",
            "p2": "2.4"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768629021",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "13-7",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "2.2",
            "x": "3.50",
            "p2": "1.58"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768628482",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "11-13",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "1.38",
            "x": "3.50",
            "p2": "2.8"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768627920",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "13-7",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.52",
            "x": "3.50",
            "p2": "2.35"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768627536",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "10-13",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "2.2",
            "x": "3.50",
            "p2": "1.58"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768627149",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "22-20",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.38",
            "x": "3.50",
            "p2": "2.8"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768626256",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "12-8",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.5",
            "x": "3.50",
            "p2": "2.4"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768625705",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "7-12",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "2.2",
            "x": "3.50",
            "p2": "1.58"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768625283",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "15-12",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.38",
            "x": "3.50",
            "p2": "2.8"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768624720",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "6-13",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "1.5",
            "x": "3.50",
            "p2": "2.4"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768623064",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "4-13",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "2.2",
            "x": "3.50",
            "p2": "1.58"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768622512",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "13-3",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.38",
            "x": "3.50",
            "p2": "2.8"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768622005",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "13-7",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.5",
            "x": "3.50",
            "p2": "2.4"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768621500",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "13-9",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "2.2",
            "x": "3.50",
            "p2": "1.58"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768620956",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "13-10",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.4",
            "x": "3.50",
            "p2": "2.7"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768620440",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "10-13",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "1.5",
            "x": "3.50",
            "p2": "2.4"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768619880",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "11-13",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "2.15",
            "x": "3.50",
            "p2": "1.62"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768619290",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "13-8",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.4",
            "x": "3.50",
            "p2": "2.7"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768618789",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "13-10",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.5",
            "x": "3.50",
            "p2": "2.4"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768618367",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "14-16",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "2.15",
            "x": "3.50",
            "p2": "1.62"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768617709",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "13-10",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.4",
            "x": "3.50",
            "p2": "2.7"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768617128",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "13-6",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.5",
            "x": "3.50",
            "p2": "2.4"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768616605",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "12-9",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "2.2",
            "x": "3.50",
            "p2": "1.58"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768616049",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "13-5",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.4",
            "x": "3.50",
            "p2": "2.7"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768615495",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "13-6",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.5",
            "x": "3.50",
            "p2": "2.4"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768614956",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "7-13",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "2.2",
            "x": "3.50",
            "p2": "1.58"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768613597",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "13-4",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.4",
            "x": "3.50",
            "p2": "2.7"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768613210",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "15-18",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "1.5",
            "x": "3.50",
            "p2": "2.4"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768612365",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "13-11",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "2.2",
            "x": "3.50",
            "p2": "1.58"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768611956",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "13-6",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.4",
            "x": "3.50",
            "p2": "2.7"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768611285",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "12-11",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.52",
            "x": "3.50",
            "p2": "2.35"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768610758",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "9-13",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "2.2",
            "x": "3.50",
            "p2": "1.58"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768610230",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "8-12",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "1.4",
            "x": "3.50",
            "p2": "2.7"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768609820",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "16-19",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "1.52",
            "x": "3.50",
            "p2": "2.35"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768609114",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "13-11",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "2.2",
            "x": "3.50",
            "p2": "1.58"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768608562",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "13-6",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.4",
            "x": "3.50",
            "p2": "2.7"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768608007",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "13-8",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.52",
            "x": "3.50",
            "p2": "2.35"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768607490",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "13-9",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "2.2",
            "x": "3.50",
            "p2": "1.58"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768606932",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "13-7",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.4",
            "x": "3.50",
            "p2": "2.7"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768606430",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "13-11",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.55",
            "x": "3.50",
            "p2": "2.3"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Evoker_vs_Zenith_1768605873",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Evoker",
        "team2": "Zenith",
        "score": "10-13",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "2.15",
            "x": "3.50",
            "p2": "1.62"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Evoker_1768605433",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Evoker",
        "score": "16-13",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.42",
            "x": "3.50",
            "p2": "2.7"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Phantom_vs_Zenith_1768604814",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Phantom",
        "team2": "Zenith",
        "score": "11-13",
        "winner": "team2",
        "map_num": null,
        "odds": {
            "p1": "1.55",
            "x": "3.50",
            "p2": "2.3"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    },
    {
        "id": "Glare_vs_Flux_1768603920",
        "time": "1-я карта",
        "league": "1x1 Berserk League 2026 Week #3",
        "team1": "Glare",
        "team2": "Flux",
        "score": "13-6",
        "winner": "team1",
        "map_num": null,
        "odds": {
            "p1": "1.85",
            "x": "3.50",
            "p2": "1.85"
        },
        "logos": {
            "t1": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            "t2": "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
        }
    }
];
