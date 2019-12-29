const router = require("express").Router();
const { Product } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (er) {
    next(er);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (er) {
    next(er);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (er) {
    next(er);
  }
});

module.exports = router;
