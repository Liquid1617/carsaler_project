const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const bcrypt = require("bcrypt");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const multer = require("multer");
const path = require("path");

const Main = require("../Views/Main");
const SellerPage = require("../Views/SellerPage");
const UnicCar = require("../Views/UnicCar");
const ProfilePage = require("../Views/Profile");
const BuyerPage = require("../Views/BuyerPage");

const { Car } = require("../../db/models");
const { route } = require("./startRouter");

router.get("/main", async (req, res) => {
  try {
    const allCars = await Car.findAll({ raw: true });
    const user = req.session?.logginedUser;
    const title = "Main Page";
    await renderTemplate(Main, { title, user, allCars }, res);
  } catch (error) {
    console.log(error);
  }
});

//!! страница продавца

router.get("/main/sell", async (req, res) => {
  try {
    const user = req.session?.logginedUser;
    const title = "Seller Page";
    await renderTemplate(SellerPage, { title, user }, res);
  } catch (error) {
    console.log(error);
  }
});

//!! midlware для добавления фото

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/images/uploadedImages");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

//!! Добавление машины в базу и на сайт

router.post("/main/sell", upload.single("image"), async (req, res) => {
  const { brand, model, vin, price, engine, horsePow, desc, phone } = req.body;
  const image = req.file.path;
  try {
    const findCar = await Car.findOne({
      where: {
        vin,
      },
      raw: true,
    });
    if (findCar === null) {
      const userId = req.session?.logginedUser.id;
      const newCar = await Car.create({
        brand,
        model,
        vin,
        price,
        engine,
        horsePow,
        desc,
        phone,
        image,
        userId,
      });
      res.json({ status: 200, newCar });
    }
    if (findCar) {
      res.json({ status: 201 });
    }
  } catch (error) {
    console.log(error);
  }
});

//!! Изменяем запись

router.put("/main/:id", async (req, res) => {
  try {
    console.log(
      "req.body =========================================>",
      req.body
    );
    console.log(
      "req.params.id =========================================>",
      req.params
    );
    const car = await Car.update(
      {
        brand: req.body.brand,
        model: req.body.model,
        vin: req.body.vin,
        price: req.body.price,
        engine: req.body.engine,
        horsePow: req.body.horsePow,
        desc: req.body.desc,
        phone: req.body.phone,
      },
      { where: { id: req.params.id }, returning: true, plain: true }
    );
    console.log("===============", car);
    res.json({ status: 200 });
  } catch (error) {
    console.log(error);
  }
});

//!! Удаляем запись

router.delete("/main/delete", async (req, res) => {
  try {
    const deletedCar = await Car.destroy({ where: { id: req.body.id } });
    res.json({ status: 200 });
  } catch (error) {
    console.log(error);
  }
});

router.get("/main/profile", async (req, res) => {
  try {
    const userId = req.session?.logginedUser.id;
    const urCars = await Car.findAll({ where: { userId }, raw: true });
    const user = req.session?.logginedUser;
    const title = "Profile Page";
    await renderTemplate(ProfilePage, { title, user, urCars }, res);
  } catch (error) {
    console.log(error);
  }
});

//!! Страница покупателя

router.get("/main/buy", async (req, res) => {
  try {
    const user = req.session?.logginedUser;
    const title = "Find Car";
    await renderTemplate(BuyerPage, { title, user }, res);
  } catch (error) {
    console.log(error);
  }
});

//!! Поиск машины по параметрам

router.post("/main/buy", async (req, res) => {
  const carList = Object.entries(req.body);
  const carParams = carList.filter((el) => el[1] !== "");
  const objCar = carParams.reduce((acc, val) => {
    acc[val[0]] = val[1];
    return acc;
  }, {});
  try {
    const findCar = await Car.findAll({
      where: objCar,
      raw: true,
    });
    if (findCar.length > 0) {
      res.json(findCar);
    }
    if (findCar.length === 0) {
      res.json({ status: 404 });
    }
  } catch (error) {
    console.log(error);
  }
});

//!! Отрисовка индивидуальной страницы машины

router.get("/main/:id", async (req, res) => {
  const car = await Car.findOne({ where: { id: req.params.id } });
  try {
    const user = req.session?.logginedUser;
    const title = `${car.brand} ${car.model}`;
    await renderTemplate(UnicCar, { title, user, car }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
