const authForm = document.querySelector(".authContainer");

authForm?.addEventListener("click", async (event) => {
  if (event.target.id === "authButton") {
    try {
      const login = authForm.children[1].value;
      const password = authForm.children[3].value;
      const email = authForm.children[5].value;
      const data = { login, password, email };
      console.log(data);

      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.status === 200) {
        document.getElementById("successMsg").classList.remove("hidden");
        document.getElementById("failMsg").classList.add("hidden");
        setTimeout(() => {
          window.location.href = "/signin";
        }, 2000);
      }
      if (result.status === 201) {
        document.getElementById("successMsg").classList.add("hidden");
        document.getElementById("failMsg").classList.remove("hidden");
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
});
