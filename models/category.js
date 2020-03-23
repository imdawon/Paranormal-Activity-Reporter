module.exports = function (sequelize, DataTypes) {
    let Categories = sequelize.define("Categories", {
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    });
    return Categories;
};
