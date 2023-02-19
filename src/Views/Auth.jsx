const React = require("react");
const Layout = require("./Layout");

module.exports = function LoginForm({ title }) {
  return (
    <Layout title={title}>
      <h1>Entry your login, password and email to Sign Up</h1>

      <div method="POST" action="/signup" className="authContainer">
        <label htmlFor="title-input" className="block mar-b-1">
          Login:
        </label>
        <input
          id="login-input"
          name="login"
          type="text"
          tabIndex="1"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
        />

        <label htmlFor="body-textarea" className="block mar-b-1">
          Password:
        </label>
        <input
          id="password-input"
          name="password"
          type="password"
          tabIndex="2"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
        />

        <label htmlFor="body-textarea" className="block mar-b-1">
          Email:
        </label>
        <input
          id="email-input"
          name="email"
          type="email"
          tabIndex="2"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
        />
        <p id="successMsg" className="hiddenMsg hidden">
          Вы успешно зарегистрированы
        </p>
        <p id="failMsg" className="hiddenMsg hidden">
          Пользователь с таким именем уже зарегистрирован
        </p>
        <input
          type="submit"
          id="authButton"
          value="Sign Up"
          tabIndex="3"
          className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
        />
      </div>
    </Layout>
  );
};
