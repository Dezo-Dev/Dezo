const router = require("express").Router();
const User = require("../db/models/User");
module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.obj.email } });
    if (!user) {
      console.log("No such user found:", req.body.obj.email);
      res.status(401).send("Wrong username and/or password");
    } else if (!user.correctPassword(req.body.obj.password)) {
      console.log("Incorrect password for user:", req.body.obj.email);
      res.status(401).send("Wrong username and/or password");
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    let isAdmin = false;
    let code = req.body.obj.code;
    if (code) {
      isAdmin = await User.getCode(code);
    }
    if (!isAdmin) {
      res.json({ message: "You are not allowed to be here" });
    } else {
      const user = await User.findOrCreate({
        where: { email: req.body.obj.email },
        defaults: {
          password: req.body.obj.password,
          fName: req.body.obj.fName,
          lName: req.body.obj.lName,
          isAdmin
        }
      });
      req.login(user[0], err => (err ? next(err) : res.json(user[0])));
    }
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.post("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
});

router.get("/me", (req, res) => {
  res.json(req.user);
});
