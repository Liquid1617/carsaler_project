const React = require("react");
const Layout = require("./Layout");

module.exports = function BuyerPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Here you can find a car</h1>

      <form name="buyForm" className="buyerContainer">
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
          Price:
        </label>
        <input
          id="price"
          name="price"
          type="integer"
          tabIndex="4"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
        />

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

        <h3 id="noCars" className="hidden">
          Указанный в запросe автомобиль отсутствует в базе
        </h3>

        <input
          type="submit"
          id="buyButton"
          value="Find"
          tabIndex="8"
          className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
        />
      </form>
      <ul id="carList"></ul>
    </Layout>
  );
};
