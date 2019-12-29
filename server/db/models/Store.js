const db = require("../db");
const Sequelize = require("sequelize");
const id = {
  type: Sequelize.UUID,
  primaryKey: true,
  unique: true,
  defaultValue: Sequelize.UUIDV4
};

const Store = db.define("store", {
  id: id,
  name: {
    type: Sequelize.STRING
  },
  address1: {
    type: Sequelize.STRING
  },
  address2: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.STRING
  }
});

module.exports = Store;
