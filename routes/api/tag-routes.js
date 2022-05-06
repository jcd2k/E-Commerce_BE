const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try {
    const productData = await ProductTag.findAll({
      include: {model: Product, through: ProductTag, as: "product-tagged"}
    })
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  try {
    const categoryData = await ProductTag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: "product-tagged"}],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  try {
    const productTagData = await ProductTag.create({
      reader_id: req.body.reader_id,
    });
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', (req, res) => {
  try {
    const categoryData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  try {
    const categoryData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
