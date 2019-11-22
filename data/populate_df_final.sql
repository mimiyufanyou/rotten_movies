
COPY df_final(id, title, genre, cag_rating, cag_release, sScore, sScore_qcut)
FROM '/Users/mimiyufanyou/Documents/GitHub/rotten_movies/data/movie_data/data2019-11-21.csv' DELIMITER ',' CSV HEADER;

