const React = require("react");
const Layout = require("./Layout");

module.exports = function SellerPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Here you can sell your car</h1>

      <form name="sellForm" className="sellerContainer">
        <div className="paramsContainer">
          <div className="params">
            <div className="params1">
              <label htmlFor="title-input" className="block mar-b-1">
                Brand:
              </label>
              <input
                id="brand"
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
                name="phone"
                type="text"
                tabIndex="7"
                className="block w-100 no-outline no-border pad-1 mar-b-2"
              />
            </div>
          </div>
          <div className="updBtn">
            <input type="file" name="image" id="image" />

            <h3 id="alreadyAdd" className="hidden">
              Автомобиль с таким VIN-кодом уже существует
            </h3>

            <input
              type="submit"
              id="sellButton"
              value="Public"
              tabIndex="8"
              className="sellBtn block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
            />
          </div>
        </div>
      </form>
      <div id="addedCar"></div>
    </Layout>
  );
};
