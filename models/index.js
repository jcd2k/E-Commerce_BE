// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'Associated Categories'
});

Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  as: 'Associated Procucts',
});

Product.belongsTo(Tag, {
  foreignKey: 'productTag',
});

Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
});
// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
