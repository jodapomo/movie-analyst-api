module.exports = {
    "up": "CREATE TABLE movie_db.publication (name VARCHAR(255) PRIMARY KEY, avatar VARCHAR(21));",
    "down": "DROP TABLE movie_db.publication"
}