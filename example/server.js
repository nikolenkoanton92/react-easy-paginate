const express = require('express');

const app = express();
const port = process.env.PORT || 8000;
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const WebpackConfig = require('./webpack.config');

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/static/',
  stats: {
    colors: true,
  },
}));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.listen(port, () => {
  console.log(`Server listen on *:${port}`);
});
