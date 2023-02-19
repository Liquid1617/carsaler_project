const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const bcrypt = require("bcrypt");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const Start = require("../Views/Start");

const { Car } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const allCars = await Car.findAll();
    const user = req.session?.logginedUser;
    const title = "Start Page";
    await renderTemplate(Start, { title, user, allCars }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
