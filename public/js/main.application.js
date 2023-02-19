const buttonContainer = document.querySelector(".buttonContainer");
console.log(buttonContainer);

const { sellForm } = document.forms;
const addedCar = document.querySelector("#addedCar");

const { updatingForm } = document.forms;

const { buyForm } = document.forms;

const carContainer = document.querySelector(".carContainer");
console.log(carContainer);

//!! Выставляем машину на продажу

sellForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const data = new FormData(sellForm);
    const response = await fetch("/main/sell", {
      method: "POST",
      body: data,
    });
    const result = await response.json();
    if (result.status === 200) {
      addedCar.innerHTML = `<img src="${result.newCar.image.slice(
        6
      )}" alt="newCar" />
      <a href="/main/${result.newCar.id}">${result.newCar.brand} ${
        result.newCar.model
      }</a>
      <h3>${result.newCar.price} рублей</h3>
      `;
      document.getElementById("alreadyAdd").classList.add("hidden");
      setTimeout(() => {
        window.location.href = "/main";
      }, 4000);
    }
    if (result.status === 201) {
      document.getElementById("alreadyAdd").classList.remove("hidden");
    }
  } catch (error) {
    console.log(error);
  }
});

//!! Изменяем добавленную запись

updatingForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    console.log("updatingForm", updatingForm);
    const updatedData = new FormData(updatingForm);
    console.log("updatedData", updatedData);
    const newData = Object.fromEntries(updatedData);
    console.log("newData", newData);

    console.log("event", event.submitter.dataset.id);

    const response = await fetch(`/main/${event.submitter.dataset.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newData),
    });
    const updRes = await response.json();
    console.log("============>", updRes);
    if (updRes.status === 200) {
      document.getElementById("updSuccess").style.visibility = "visible";
      setTimeout(() => {
        window.location.href = "/main";
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
});

//!! Удаляем запись

carContainer?.addEventListener("click", async (event) => {
  console.log(event.target);
  if (event.target.className === "deleteCar") {
    try {
      const li = event.target.parentNode;
      const response = await fetch("/main/delete", {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id: li.id }),
      });
      const result = await response.json();
      console.log(result);
      if (result.status === 200) {
        li.remove();
      }
    } catch (error) {
      console.log(error);
    }
  }
});

//!! Поиск покупателем конкретной машины

buyForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const data = new FormData(buyForm);
    const myData = Object.fromEntries(data);
    const response = await fetch("/main/buy", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(myData),
    });
    const result = await response.json();
    console.log(result);
    if (result.length > 0) {
      const ul = document.querySelector("#carList");
      ul.innerHTML = `${result
        .map((car) => {
          return `<li class="${car.id}">
          <img src="${car.image.slice(6)}" alt="newCar" />
          <a href="/main/${car.id}">
            ${car.brand} ${car.model}
          </a>
          <h3>${car.price} рублей</h3>
        </li>`;
        })
        .join("")}`;
    }
    document.getElementById("noCars").classList.add("hidden");
    if (result.status === 404) {
      const ul = document.querySelector("#carList");
      ul.innerHTML = "";
      document.getElementById("noCars").classList.remove("hidden");
    }
  } catch (error) {
    console.log(error);
  }
});
