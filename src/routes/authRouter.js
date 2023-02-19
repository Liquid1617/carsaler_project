const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const bcrypt = require("bcrypt");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const LoginForm = require("../Views/Login");
const AuthForm = require("../Views/Auth");

const { User } = require("../../db/models");
const car = require("../../db/models/car");

//!! Регистрация
router.get("/signup", async (req, res) => {
  try {
    const title = "Singup Form";
    await renderTemplate(AuthForm, { title }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { login, password, email } = req.body;
    const userCheck = await User.findOne({
      where: { login },
      raw: true,
    });
    if (userCheck === null) {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        login,
        password: hashPassword,
        email,
      });
      res.json({ status: 200 });
    } else {
      res.json({ status: 201 });
    }
  } catch (error) {
    console.log(error);
  }
});

//!! Вход

router.get("/signin", async (req, res) => {
  try {
    const title = "Singin Form";
    await renderTemplate(LoginForm, { title }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, res) => {
  const { login, password } = req.body;
  try {
    const logUser = await User.findOne({ where: { login }, raw: true });
    if (logUser === null) {
      res.redirect("/signup");
    }
    const logPassword = await bcrypt.compare(password, logUser.password);
    if (logUser && logPassword) {
      req.session.logginedUser = { id: logUser.id, name: logUser.login };
      req.session.save();
      res.redirect("/main");
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("sid");
  res.redirect("/signin");
});

module.exports = router;
