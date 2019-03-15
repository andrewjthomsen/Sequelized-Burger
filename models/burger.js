var Models = require('../models')
module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        // Giving the Author model a name of type STRING
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    Burger.associate = function (models) {
        models.Burger.belongsTo(models.Customer, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: true
          }
        });
      };
    return Burger;
};