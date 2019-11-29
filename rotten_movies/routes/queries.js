const Pool = require('pg').Pool

const pool = new Pool({
    user: 'mimiyufanyou',
    host: 'localhost',
    database: 'rotten_movies',
    password: '',
    port: 5432,
});

const getMovies = (request, response) => {
    pool.connect((err, client, done) => {
        if (err) return response.status(500).json(err);

        client.query('select * from df_final', (err, results) => {
            if (err) return response.status(500).json(err);

            response.status(200).json(results.rows);

            done();
        });
    });
}

const getMovieById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.connect((err, client, done) => {
        if (err) return response.status(500).json(err);

        client.query('select * from df_final where id = $1', [id], (err, results) => {
            if (err) return response.status(500).json(err);

            response.status(200).json(results.rows);

            done();
        });
    });
}

module.exports = {
    getMovies,
    getMovieById
}