module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        // Giving the Author model a name of type STRING
        customer_name: DataTypes.STRING,
        // allowNull: false
    });

    return Customer;
};

