const express = require('express');
const path = require('path');
const config = require('./config');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.dev');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');

mongoose.connect(config.app.mongo_url);

var app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.set('env', config.app.env);
app.use(express.static(path.join(__dirname, '../dist')));

if (config.app.env === 'dev') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: false, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

const statusController = require('./routes/status');
const versionController = require('./routes/version');
const aboutMeController = require('./routes/aboutMe');
const rootController = require('./routes/index');
const tournamentController = require('./routes/tournament');

app.use('/api/status', statusController);
app.use('/api/version', versionController);
app.use('/api/me', aboutMeController);
app.use('/api/', rootController);
app.use('/api/tournament', tournamentController);

app.use('/dist', express.static(__dirname + '/../dist'));
app.use('/img', express.static(__dirname + '/../static/img'));

// ## ERROR HANDLING

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.sendFile(__dirname + '/routes/index.html');
});

// error handlers

// will print stacktrace
app.use((err, req, res) => {
  console.log(err); // eslint-disable-line no-console
  res.status(err.status || 500);
  res.json({ error: err.message || 'An error occurred' });
});


// Init server
app.listen(config.app.port, config.app.ip, () => {
  console.log('App started on port ' + config.app.port); // eslint-disable-line no-console
});

module.exports = app;
