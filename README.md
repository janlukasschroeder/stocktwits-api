# stocktwits.com API
Fetches data from [stocktwits.com](http://stocktwits.com) API endpoints.

[Detailed API documentation here](https://api.stocktwits.com/developers/docs)

# Quick Start
```javascript
const stocktwits = require('stocktwits-api');

stocktwits.trendingStocks().then(stocks => console.log(stocks));
```

```json
{
    "response": {
        "status": 200
    },
    "symbols": [
        {
            "id": 3083,
            "symbol": "BKNG",
            "title": "Booking Holdings Inc",
            "aliases": [
                "PCLN"
            ],
            "is_following": false,
            "watchlist_count": 12490
        },
        {
            "id": 9039,
            "symbol": "ROKU",
            "title": "Roku",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 20975
        },
        {
            "id": 827,
            "symbol": "AMAT",
            "title": "Applied Materials Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 15071
        },
        {
            "id": 13611,
            "symbol": "ABIL",
            "title": "Ability Inc",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 5913
        },
        {
            "id": 12707,
            "symbol": "PIRS",
            "title": "Pieris Pharmaceuticals",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 5559
        },
        {
            "id": 13354,
            "symbol": "GOOS",
            "title": "Canada Goose Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 5167
        },
        {
            "id": 9654,
            "symbol": "NCLH",
            "title": "Norwegian Cruise Lines",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 773
        },
        {
            "id": 7987,
            "symbol": "YELP",
            "title": "Yelp",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 12551
        },
        {
            "id": 3218,
            "symbol": "PRGO",
            "title": "Perrigo Co.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 1520
        },
        {
            "id": 14042,
            "symbol": "FNKO",
            "title": "Funko, Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 2909
        },
        {
            "id": 2509,
            "symbol": "LJPC",
            "title": "La Jolla Pharmaceutical Co.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 2726
        },
        {
            "id": 11797,
            "symbol": "PRTY",
            "title": "Party City",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 467
        },
        {
            "id": 13391,
            "symbol": "AYX",
            "title": "Alteryx",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 1514
        },
        {
            "id": 13817,
            "symbol": "VIAB",
            "title": "Viacom, Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 764
        },
        {
            "id": 11998,
            "symbol": "PTLA",
            "title": "Portola Pharmaceuticals Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 4608
        },
        {
            "id": 2375,
            "symbol": "JACK",
            "title": "Jack in the Box Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 1629
        },
        {
            "id": 8660,
            "symbol": "TSLA",
            "title": "Tesla, Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 168342
        },
        {
            "id": 13202,
            "symbol": "SND",
            "title": "Smart Sand",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 1174
        },
        {
            "id": 2713,
            "symbol": "MPAA",
            "title": "Motorcar Parts of America Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 151
        },
        {
            "id": 2907,
            "symbol": "NTES",
            "title": "NetEase.com, Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 5385
        },
        {
            "id": 2135,
            "symbol": "HIMX",
            "title": "Himax Technologies, Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 11109
        },
        {
            "id": 13491,
            "symbol": "CVNA",
            "title": "Carvana Co. Cl A",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 2627
        },
        {
            "id": 5011,
            "symbol": "DNB",
            "title": "Dun & Bradstreet Corp.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 135
        },
        {
            "id": 13188,
            "symbol": "ELF",
            "title": "E. L. F. Beauty",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 1282
        },
        {
            "id": 2701,
            "symbol": "MNTA",
            "title": "Momenta Pharmaceuticals Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 738
        },
        {
            "id": 14102,
            "symbol": "SAIL",
            "title": "SailPoint Technologies Holdings, Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 890
        },
        {
            "id": 12145,
            "symbol": "LOXO",
            "title": "Loxo Oncology",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 2126
        },
        {
            "id": 2779,
            "symbol": "MYL",
            "title": "Mylan, Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 4776
        },
        {
            "id": 3509,
            "symbol": "SGMO",
            "title": "Sangamo Biosciences Inc.",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 7646
        },
        {
            "id": 11452,
            "symbol": "RESI",
            "title": "Altisource Residential Corporation",
            "aliases": [],
            "is_following": false,
            "watchlist_count": 188
        }
    ]
}
```