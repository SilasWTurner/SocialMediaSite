module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade"
        });
        Posts.belongsTo(models.Accounts)
    }
    return Posts;
};