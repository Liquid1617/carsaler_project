const React = require("react");
const Layout = require("./Layout");

module.exports = function StartPage({ title, user, allCars }) {
  return (
    <Layout title={title} user={user}>
      <h1>CarSaler</h1>
      {allCars.length > 0 ? (
        <ul className="allCars">
          {allCars.map((car) => (
            <li className="unicCar" id={car.id}>
              <img src={car.image.slice(6)} alt="newCar" />
              <p>
                {car.brand} {car.model}
              </p>
              <h3>{car.price} рублей</h3>
            </li>
          ))}
        </ul>
      ) : (
        <div className="emptyMsg">
          <h2 className="emptyList">
            At the moment out Car-list is empty, but you can change it and sell
            your car on our site
          </h2>
        </div>
      )}
    </Layout>
  );
};
