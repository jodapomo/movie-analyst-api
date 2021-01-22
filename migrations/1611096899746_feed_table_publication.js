module.exports = {
    "up":
        "INSERT INTO movie_db.publication (name, avatar) VALUES " +
        "('The Daily Reviewer', 'glyphicon-eye-open'), " +
        "('International Movie Critic', 'glyphicon-fire'), " +
        "('MoviesNow', 'glyphicon-time'), " +
        "('MyNextReview', 'glyphicon-record'), " +
        "('Movies n Games', 'glyphicon-heart-empty'), " +
        "('TheOne', 'glyphicon-globe'), " +
        "('ComicBookHero.com', 'glyphicon-flash')"
    ,
    "down": ""
}
