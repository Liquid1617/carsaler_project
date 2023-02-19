const React = require("react");
const Layout = require("./Layout");

module.exports = function UnicCar({ title, user, car }) {
  return (
    <Layout title={title} user={user}>
      <h1>
        {car.brand} {car.model}
      </h1>
      <div className="imgDiv">
        <img className="img" src={car.image.slice(6)} alt="newCar" />
      </div>
      <form name="updatingForm" className="updaitingContainer">
        {car.userId === user.id ? (
          <div className="paramsContainer">
            <div className="params">
              <div className="params1">
                <label htmlFor="title-input" className="block mar-b-1">
                  Brand:
                </label>
                <input
                  id="brand"
                  value={car.brand}
                  name="brand"
                  type="text"
                  tabIndex="1"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                />
                <label htmlFor="body-textarea" className="block mar-b-1">
                  Model:
                </label>
                <input
                  id="model"
                  value={car.model}
                  name="model"
                  type="text"
                  tabIndex="2"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                />
                <label htmlFor="body-textarea" className="block mar-b-1">
                  VIN:
                </label>
                <input
                  id="vin"
                  value={car.vin}
                  name="vin"
                  type="text"
                  tabIndex="3"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                />
                <label htmlFor="body-textarea" className="block mar-b-1">
                  Price:
                </label>
                <input
                  id="price"
                  value={car.price}
                  name="price"
                  type="integer"
                  tabIndex="4"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                />
              </div>
              <div className="params2">
                <label htmlFor="body-textarea" className="block mar-b-1">
                  Engine:
                </label>
                <input
                  id="engine"
                  value={car.engine}
                  name="engine"
                  type="text"
                  tabIndex="5"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                />
                <label htmlFor="body-textarea" className="block mar-b-1">
                  Horse Power:
                </label>
                <input
                  id="horesPow"
                  value={car.horsePow}
                  name="horsePow"
                  type="text"
                  tabIndex="6"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                />
                <label htmlFor="body-textarea" className="block mar-b-1">
                  Description:
                </label>
                <input
                  id="desc"
                  value={car.desc}
                  name="desc"
                  type="text"
                  tabIndex="7"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                />
                <label htmlFor="body-textarea" className="block mar-b-1">
                  Phone number:
                </label>
                <input
                  id="phone"
                  value={car.phone}
                  name="phone"
                  type="text"
                  tabIndex="7"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                />
              </div>
            </div>
            <div className="updBtn">
              <h3 id="updSuccess" className="invisible1">
                Обновление успешно завершено
              </h3>
              <input
                data-id={car.id}
                type="submit"
                id="updateButton"
                value="Update"
                tabIndex="8"
                className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
              />
            </div>
          </div>
        ) : (
          <div className="params4">
            <div className="params5">
              <label
                htmlFor="title-input"
                className="block mar-b-1"
                id={car.id}
              >
                Brand:
                <span
                  id="brand"
                  name="brand"
                  tabIndex="1"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                >
                  {car.brand}
                </span>
              </label>
              <label htmlFor="body-textarea" className="block mar-b-1">
                Model:
                <span
                  id="model"
                  name="model"
                  tabIndex="2"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                >
                  {car.model}
                </span>
              </label>
              <label htmlFor="body-textarea" className="block mar-b-1">
                VIN:
                <span
                  id="vin"
                  name="vin"
                  tabIndex="3"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                >
                  {car.vin}
                </span>
              </label>
              <label htmlFor="body-textarea" className="block mar-b-1">
                Price:
                <span
                  id="price"
                  name="price"
                  tabIndex="4"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                >
                  {car.price}
                </span>
              </label>
            </div>
            <div className="params6">
              <label htmlFor="body-textarea" className="block mar-b-1">
                Engine:
                <span
                  id="engine"
                  name="engine"
                  type="text"
                  tabIndex="5"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                >
                  {car.engine}
                </span>
              </label>
              <label htmlFor="body-textarea" className="block mar-b-1">
                Horse Power:
                <span
                  id="horesPow"
                  name="horsePow"
                  type="text"
                  tabIndex="6"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                >
                  {car.horsePow}
                </span>
              </label>
              <label htmlFor="body-textarea" className="block mar-b-1">
                Description:
                <span
                  id="desc"
                  name="desc"
                  type="text"
                  tabIndex="7"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                >
                  {car.desc}
                </span>
              </label>
              <label htmlFor="body-textarea" className="block mar-b-1">
                Phone:
                <span
                  id="phone"
                  name="phone"
                  type="text"
                  tabIndex="7"
                  className="block w-100 no-outline no-border pad-1 mar-b-2"
                >
                  {car.phone}
                </span>
              </label>
            </div>
          </div>
        )}
      </form>
    </Layout>
  );
};
