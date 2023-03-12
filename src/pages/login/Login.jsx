import { useState } from "react";
import "./login.scss";
import Cookies from "universal-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState("hidden");

  const cookies = new Cookies();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/admin/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.login === true) {
          setVisibility("hidden");
          cookies.set("token", data.token, 1);
          window.localStorage.setItem("token", data.token);
          window.location.href = "/";
        } else {
          setVisibility("visible");
        }
      });
  };

  return (
    <div className="container">
      <div>
        <h1>Admin</h1>
        <form>
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <p
            style={{
              visibility: visibility,
              marginTop: "-6px",
              paddingBottom: "6px",
              fontSize: 12.6,
              color: "red",
            }}
          >
            Email or password not correct .Please try again!
          </p>

          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
