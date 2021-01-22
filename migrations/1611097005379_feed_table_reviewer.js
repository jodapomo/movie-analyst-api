module.exports = {
    "up":
        "INSERT INTO movie_db.reviewer (name, avatar, publication) VALUES " +
        "('Robert Smith','https://s3.amazonaws.com/uifaces/faces/twitter/angelcolberg/128.jpg','The Daily Reviewer'), " +
        "('Chris Harris','https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg','International Movie Critic'), " +
        "('Janet Garcia','https://s3.amazonaws.com/uifaces/faces/twitter/grrr_nl/128.jpg','MoviesNow'), " +
        "('Andrew West','https://s3.amazonaws.com/uifaces/faces/twitter/d00maz/128.jpg','MyNextReview'), " +
        "('Mindy Lee','https://s3.amazonaws.com/uifaces/faces/twitter/laurengray/128.jpg','Movies n Games'), " +
        "('Martin Thomas','https://s3.amazonaws.com/uifaces/faces/twitter/karsh/128.jpg','TheOne'), " +
        "('Anthony Miller','https://s3.amazonaws.com/uifaces/faces/twitter/9lessons/128.jpg','ComicBookHero.com')" 
    ,
    "down": ""
}
