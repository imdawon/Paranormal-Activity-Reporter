module.exports = function (sequelize, DataTypes) {
    let Category = sequelize.define("Catregory", {
        // The email cannot be null, and must be a proper email before creation
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    })
};
