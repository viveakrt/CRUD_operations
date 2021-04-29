module.exports = function(sequelize, DataTypes) {
    return sequelize.define('cosmetics',{
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Label : {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        Brand : {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        Name : {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        Price : {
            type : DataTypes.INTEGER,
            allowNull:false
        },
        Rank : {
            type: DataTypes.FLOAT,
        },
        Ingredients : {
            type: DataTypes.STRING(5000),
            allowNull: false
        },
        Combination : {
            type : DataTypes.BOOLEAN
        },
        Dry : {
            type : DataTypes.BOOLEAN
        },
        Normal : {
            type : DataTypes.BOOLEAN
        },
        Oily : {
            type : DataTypes.BOOLEAN
        },
        Sensitive : {
            type : DataTypes.BOOLEAN
        }
    })
}