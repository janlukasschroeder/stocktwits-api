const h = require('./helpers');
const config = require('./config');

module.exports.trendingStocks = () => {
  const path = `api/2/trending/symbols.json`;
  const query = config.stocktwits.baseUrl + path;
  return h.fetch(query);
};