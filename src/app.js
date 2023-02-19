require("@babel/register");
require("dotenv").config();

// const { sequelize } = require("../db/models");

const express = require("express");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const startRouter = require("./routes/startRouter");
const authRouter = require("./routes/authRouter");
const mainRouter = require("./routes/mainRouter");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: "sid",
  store: new FileStore({}),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
};

app.use(session(sessionConfig));

app.use("/", startRouter);
app.use("/", authRouter);
app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Сервер поднят на ${PORT} порту!`);
});
