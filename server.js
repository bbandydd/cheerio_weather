var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.dev')

var app = express()
var compiler = webpack(config)

// middleware
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

// api
app.get('/getWeather/:status', require('./api/weather'))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// run server
app.listen(3000, 'localhost', function(err) {
    if (err) {
        console.log(err)
        return
    }

    console.log('Listening at http://loacalhost:3000')
})
