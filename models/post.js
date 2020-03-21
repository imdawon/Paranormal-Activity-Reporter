module.exports = function(sequelize, DataTypes) {
  // eslint-disable-next-line quotes
  var Posts = sequelize.define("Posts", {
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
    },
    // The category cannot be null
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The Author cannot be null
    author: {
      type: DataTypes.string,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });
};
