module.exports = {
    "up": "CREATE TABLE movie_db.moviereview (title VARCHAR(255) PRIMARY KEY, `release` VARCHAR(255), score INTEGER, reviewer VARCHAR(255), FOREIGN KEY (reviewer) REFERENCES reviewer(name) ON DELETE CASCADE);",
    "down": "DROP TABLE movie_db.moviereview"
}