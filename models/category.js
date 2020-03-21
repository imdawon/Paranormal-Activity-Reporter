module.exports = function (sequelize, DataTypes) {
    let Categories = sequelize.define("Catregories", {
        // The email cannot be null, and must be a proper email before creation
        catergory: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    })
};
