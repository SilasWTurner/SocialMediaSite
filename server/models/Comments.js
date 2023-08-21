module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Comments.associate = (models) => {
        Comments.belongsTo(models.Accounts),
        Comments.belongsTo(models.Posts)
    }

    return Comments;
};