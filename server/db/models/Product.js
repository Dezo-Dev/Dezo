const Sequelize = require("sequelize");
const db = require("../db");

const id = {
  type: Sequelize.UUID,
  defaultValue: Sequelize.UUIDV4,
  primaryKey: true
};

const Product = db.define("product", {
  id: id,
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: "This drink will blow your mind"
  },
  link: {
    type: Sequelize.TEXT
  },
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: "../../assets/images/drink.jpeg"
  }
});

module.exports = Product;
