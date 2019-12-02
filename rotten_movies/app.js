var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = 5000
var fs = require('fs')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const Pool = require('pg').Pool

const pool = new Pool({
    user: 'mimiyufanyou',
    host: 'localhost',
    database: 'rotten_movies',
    password: '',
    port: 5432,
});

app.get('/', function(req, res) {
  var tagline = 'all of this code is a tagline!!!'
  res.render('index', { movieName: 'movieName Holder', movieScore: 'movieScore Holder', tagline: tagline });

});

app.get('/movies/:id', function(request, response) {
    const score = request.params.id

    console.log(request.params.id)

    pool.connect((err, client, done) => {
        if (err) return response.status(500).json(err);

        client.query('select * from df_final where sscore_qcut = $1 order by random() limit 1', [score], (err, results) => {
            if (err) return response.status(500).json(err);

            response.status(200).json(results.rows);

            done();
        });
    });
});


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
