const React = require("react");
const Layout = require("./Layout");

module.exports = function LoginForm({ title }) {
  return (
    <Layout title={title}>
      <h1>Entry your data to login</h1>

      <form method="POST" action="/signin" className="loginContainer">
        <label htmlFor="login-label" className="block mar-b-1">
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
          id="title-input"
          name="password"
          type="password"
          tabIndex="2"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
        />

        <input
          type="submit"
          id="loginButton"
          value="Login"
          tabIndex="3"
          className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
        />
      </form>
    </Layout>
  );
};
