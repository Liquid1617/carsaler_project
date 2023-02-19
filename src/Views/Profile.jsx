const React = require("react");
const Layout = require("./Layout");

module.exports = function ProfilePage({ title, user, urCars }) {
  return (
    <Layout title={title} user={user}>
      {urCars.length === 0 ? (
        <h3>Your car list is empty. Add any car to sell-list</h3>
      ) : (
        <>
          <h1>All cars {user.name} wants to sell...</h1>
          <ul className="carContainer">
            {urCars.map((car) => (
              <li className="unicCar" id={car.id}>
                <a href={`/main/${car.id}`}>
                  <img src={car.image.slice(6)} alt="newCar" />
                </a>
                <h3>
                  {car.brand} {car.model}
                </h3>
                <h3>{car.price} рублей</h3>
                <button type="button" className="deleteCar">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
};
