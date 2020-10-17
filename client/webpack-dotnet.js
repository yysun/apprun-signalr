const config = require('./webpack.config');
module.exports = {... config,
  entry: {
    '../server/wwwroot/dist/app': './src/main.tsx',
  }
}