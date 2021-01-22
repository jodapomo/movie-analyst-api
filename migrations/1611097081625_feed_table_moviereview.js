module.exports = {
    "up":
        "INSERT INTO movie_db.moviereview (title, \`release\`, score, reviewer) VALUES " +
        "('Deadpool', '2016', 11, 'Robert Smith'), " +
        "('Thor: Ragnarok', '2017', 7, 'Chris Harris'), " +
        "('It', '2017', 8, 'Janet Garcia'), " +
        "('Dunkirk', '2017', 8, 'Andrew West'), " +
        "('Logan', '2017', 8, 'Mindy Lee'), " +
        "('Batman V Superman', '2016', 6, 'Martin Thomas'), " +
        "('Mad Max: Fury Road', '2015', 6, 'Anthony Miller')"
    ,
    "down": ""
}