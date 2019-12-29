const router = require("express").Router();
const { Store } = require("../db/models");
const http = require("http");

router.post("/", async (req, res, next) => {
  try {
    console.log(req.user);
    if (req.user.isAdmin) {
      const store = await Store.create(req.body);
      res.json(store);
    } else {
      res.json({ message: "you did something wrong here. Are you an admin?" });
    }
  } catch (er) {
    next(er);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const stores = await Store.findAll();
    res.json(stores);
  } catch (er) {
    next(er);
  }
});

router.get("/maps", async (req, res, next) => {
  http.get(
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?"
  );
});

router.delete("/:id", async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      await Store.destroy({ where: { id: req.params.id } });
      res.sendStatus(204);
    } else {
      res.status(403).json({ message: "You cannot delete this" });
    }
  } catch (er) {
    next(er);
  }
});

module.exports = router;
