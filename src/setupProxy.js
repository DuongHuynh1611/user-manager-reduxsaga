const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se',
      // target: 'https://rem.dbwebb.se',
      changeOrigin: true,
    })
  );
};
