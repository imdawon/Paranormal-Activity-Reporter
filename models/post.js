module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        // The email cannot be null, and must be a proper email before creation
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        // The password cannot be null
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
