const stocktwits = require('./index');

stocktwits.trendingStocks().then(stocks => console.log(stocks));