module.exports = function (sequelize, DataTypes) {
    let Categories = sequelize.define("Categories", {
        // The email cannot be null, and must be a proper email before creation
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    })
};
