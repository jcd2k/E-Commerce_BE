const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.Integer,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      types: DataTypes.INTEGER,
      allowNull: false,

    },
    tag_id: {
      types: DataTypes.INTEGER,
      References: {
        model: "tag",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
