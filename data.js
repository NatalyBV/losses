let equipments = [
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Captured",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Destroyed",
        "date": "April 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Damaged",
        "date": "January 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP-2",
        "model": "T-62MV",
        "state": "Damaged",
        "date": "July 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Damaged",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Abandoned",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BTR",
        "model": "BTR-82A",
        "state": "Abandoned",
        "date": "October 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Abandoned",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-2",
        "state": "Abandoned",
        "date": "January 2024",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Destroyed",
        "date": "March 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "BTR",
        "model": "BTR-82A",
        "state": "Damaged",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Ukraine"
    },
    {
        "platform": "BMP",
        "model": "BMP-90",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Planes",
        "model": "A-50",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-90",
        "state": "Damaged",
        "date": "January 2024",
        "isSovietUnion": true,
        "side": "Ukraine"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-90",
        "state": "Abandoned",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP-2",
        "model": "T-62MV",
        "state": "Damaged",
        "date": "July 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },

    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Destroyed",
        "date": "April 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP-2",
        "model": "T-62MV",
        "state": "Damaged",
        "date": "July 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BTR",
        "model": "BTR-82A",
        "state": "Abandoned",
        "date": "October 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-2",
        "state": "Abandoned",
        "date": "January 2024",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Destroyed",
        "date": "March 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "BMP",
        "model": "BMP-4M",
        "state": "Destroyed",
        "date": "January 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Damaged",
        "date": "June 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Tanks",
        "model": "T-62MV",
        "state": "Destroyed",
        "date": "2022 15 April",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Helicopters",
        "model": "Mi-24",
        "state": "Destroyed",
        "date": "April 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Missile cruiser",
        "name": "Moskva",
        "state": "Sunk",
        "date": "April 14 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Corvette",
        "name": "Askold",
        "state": "Destroyed",
        "date": "November 4 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Submarine",
        "name": "Rostov-na-Donu",
        "state": "Damaged beyond economical repair",
        "date": "September 13 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Patrol boat",
        "name": "",
        "state": "Destroyed",
        "date": "May 2 2022",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Patrol boat",
        "name": "",
        "state": "Destroyed",
        "date": "May 7 2022",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Patrol boat",
        "name": "",
        "state": "Destroyed",
        "date": "July 24 2022",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Patrol boat",
        "name": "",
        "state": "Damaged",
        "date": "May 7 2022",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Patrol boat",
        "name": "",
        "state": "Damaged",
        "date": "March 2022",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "High-speed assault boat",
        "name": "",
        "state": "Destroyed",
        "date": "May 2 2022",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Patrol boat",
        "name": "",
        "state": "Destroyed",
        "date": "September 2022",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Landing sheep",
        "name": "Saratov",
        "state": "Destroyed",
        "date": "March 24 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Landing sheep",
        "name": "Minsk",
        "state": "Damaged beyond economical repair",
        "date": "September 13 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Landing sheep",
        "name": "Novocherkassk",
        "state": "Destroyed",
        "date": "December 26 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Landing sheep",
        "name": "Caesar Kunikov",
        "state": "Destroyed",
        "date": "February 14 2024",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Landing craft",
        "name": "",
        "state": "Destroyed",
        "date": "May 7 2022",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Landing craft",
        "name": "",
        "state": "Damaged",
        "date": "November 10 2023",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Landing craft",
        "name": "",
        "state": "Damaged",
        "date": "November 10 2023",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Rescue tag",
        "name": "Vasily Bekh",
        "state": "Destroyed",
        "date": "June 17 2022",
        "isSovietUnion": false,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Minesweeper",
        "name": "",
        "state": "Damaged",
        "date": "October 29 2022",
        "isSovietUnion": true,
        "side": "Russia"
    },
    {
        "platform": "Naval Ships and Submarines",
        "model": "Corvette",
        "name": "Ivanovets",
        "state": "Destroyed",
        "date": "February 1 2024",
        "isSovietUnion": true,
        "side": "Russia"
    },
]
