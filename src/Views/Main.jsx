const React = require("react");
const Layout = require("./Layout");

module.exports = function MainPage({ title, user, allCars }) {
  return (
    <Layout title={title} user={user}>
      <h1>I want to...</h1>
      <div className="buttonContainer">
        <div id="sellContainer">
          <a href="/main/sell">
            <input
              type="submit"
              id="sellButton"
              value="Sell"
              tabIndex="3"
              className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
            />
          </a>
        </div>
        <div id="buyContainer">
          <a href="/main/buy">
            <input
              type="submit"
              id="buyButton"
              value="Buy"
              tabIndex="3"
              className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
            />
          </a>
        </div>
      </div>
      <ul className="carContainer">
        {allCars.map((car) => (
          <li className="unicCar" id={car.id}>
            <a href={`/main/${car.id}`}>
              <img src={car.image.slice(6)} alt="newCar" />
            </a>
            <h2>
              {car.brand} {car.model}
            </h2>
            <h3>{car.price} рублей</h3>
            {user.id === car.userId ? (
              <button type="button" className="deleteCar">
                Delete
              </button>
            ) : (
              <p className="hidden" />
            )}
          </li>
        ))}
      </ul>
    </Layout>
  );
};
