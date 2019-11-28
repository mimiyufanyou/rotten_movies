const Pool = require('pg').Pool

const pool = new Pool({
    user: 'squiduser',
    host: 'localhost',
    database: 'rotten_movies',
    password: 'password',
    port: 5432,
})

const getMovies = (request, response) => {
    pool.query('select * from df_final', (results) => {
        response.status(200).json(results.rows)
      })
}

const getMovieById = (request, response) => {
    const id = parseInt(req.params.id)

    pool.query('select * from df_final where id = $1', [id], (results) => {
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getMovies,
    getMovieById
}