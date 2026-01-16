const TEAMS = [
    {
        id: 'navi',
        name: 'Natus Vincere',
        logo: 'https://img-cdn.hltv.org/teamlogo/Natus%20Vincere/4608.svg?ixlib=java-2.1.0&w=100&s=1374528348988588046',
        isLive: true,
        currentMatch: {
            opponent: 'Vitality',
            opponentLogo: 'https://img-cdn.hltv.org/teamlogo/Vitality/9565.svg?ixlib=java-2.1.0&w=100&s=1e1628d0526a7e0a8d6e3c0258167699',
            score: '13:11',
            status: 'LIVE',
            map: 'Карта 1: Mirage',
            odds: { p1: 1.85, draw: 15.0, p2: 2.10 }
        },
        history: [
            { result: 'W', opponent: 'G2', score: '2:0', date: '12 Окт' },
            { result: 'L', opponent: 'FaZe', score: '1:2', date: '10 Окт' }
        ]
    },
    {
        id: 'vitality',
        name: 'Vitality',
        logo: 'https://img-cdn.hltv.org/teamlogo/Vitality/9565.svg?ixlib=java-2.1.0&w=100&s=1e1628d0526a7e0a8d6e3c0258167699',
        isLive: true,
        currentMatch: {
            opponent: 'Natus Vincere',
            opponentLogo: 'https://img-cdn.hltv.org/teamlogo/Natus%20Vincere/4608.svg?ixlib=java-2.1.0&w=100&s=1374528348988588046',
            score: '11:13',
            status: 'LIVE',
            map: 'Карта 1: Mirage',
            odds: { p1: 2.10, draw: 15.0, p2: 1.85 }
        },
        history: [
            { result: 'W', opponent: 'MOUZ', score: '2:1', date: '11 Окт' },
            { result: 'W', opponent: 'Spirit', score: '2:0', date: '09 Окт' }
        ]
    },
    {
        id: 'spirit',
        name: 'Team Spirit',
        logo: 'https://img-cdn.hltv.org/teamlogo/Spirit/7020.svg?ixlib=java-2.1.0&w=100&s=55415712613d2f235555555555555555',
        isLive: false,
        currentMatch: {
            opponent: 'FaZe',
            opponentLogo: 'https://img-cdn.hltv.org/teamlogo/FaZe/6667.svg?ixlib=java-2.1.0&w=100&s=46080000000000000',
            score: '-:-',
            status: '20:00 Сегодня',
            map: 'BO3',
            odds: { p1: 1.65, draw: 12.0, p2: 2.30 }
        },
        history: [
            { result: 'L', opponent: 'Vitality', score: '0:2', date: '09 Окт' },
            { result: 'W', opponent: 'Virtus.pro', score: '2:0', date: '07 Окт' }
        ]
    },
    {
        id: 'virtuspro',
        name: 'Virtus.pro',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Virtus.pro_logo_%282019%29.png/1200px-Virtus.pro_logo_%282019%29.png',
        isLive: false,
        currentMatch: null,
        history: [
            { result: 'L', opponent: 'Spirit', score: '0:2', date: '07 Окт' },
            { result: 'W', opponent: 'Cloud9', score: '2:1', date: '05 Окт' }
        ]
    }
];
