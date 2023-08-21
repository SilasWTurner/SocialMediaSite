module.exports = (sequelize, DataTypes) => {
    const Accounts = sequelize.define("Accounts", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Accounts.associate = (models) => {
        Accounts.hasMany(models.Posts, {
            onDelete: "cascade"
        });
        Accounts.hasMany(models.Comments, {
            onDelete: "cascade"
        });
    }

    return Accounts;
};