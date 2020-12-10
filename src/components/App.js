import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  let name = "";
  let email = "";
  let gender = "male";
  let phone = "";
  let pass = "";

  let [text, setText] = useState("");

  let handleChange = (type, event) => {
    if (type === "name") {
      name = event.target.value;
    } else if (type === "email") {
      email = event.target.value;
    } else if (type === "gender") {
      gender = event.target.value;
    } else if (type === "phone") {
      phone = event.target.value;
    } else if (type === "pass") {
      pass = event.target.value;
    } else {
      return;
    }
  };

  let handleClick = (event) => {
    if (
      name === "" ||
      email === "" ||
      gender === "" ||
      phone === "" ||
      pass === ""
    ) {
      setText("All fields are mandatory");
      return;
    }

    if (/[^A-Za-z0-9 ]/.test(name)) {
      setText("Name is not alphanumeric");
      return;
    }

    if (!email.includes("@")) {
      setText("Email must contain @");
      return;
    }

    if (gender !== "male" && gender !== "female" && gender !== "other") {
      setText("Please identify as male, female or others");
      return;
    }

    if (!/^\d+$/.test(phone)) {
      setText("Phone Number must contain only numbers");
      return;
    }

    if (pass.length < 6) {
      setText("Password must contain atleast 6 letters");
      return;
    }

    setText(`Hello ${name.split("@")[0]}`);
  };

  return (
    <div id="main">
      <form>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          data-testid="name"
          onChange={(event) => handleChange("name", event)}
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          data-testid="email"
          onChange={(event) => handleChange("email", event)}
        />
        <br />
        <br />
        <label htmlFor="gender">Gender: </label>
        <input
          id="gender"
          type="text"
          data-testid="gender"
          defaultValue="male"
          onChange={(event) => handleChange("gender", event)}
        />
        <br />
        <br />
        <label htmlFor="phone">Phone: </label>
        <input
          id="phone"
          type="number"
          data-testid="phoneNumber"
          onChange={(event) => handleChange("phone", event)}
        />
        <br />
        <br />
        <label htmlFor="pass">Password: </label>
        <input
          id="pass"
          type="password"
          data-testid="password"
          onChange={(event) => handleChange("pass", event)}
        />
        <br />
        <br />
        <button data-testid="submit" onClick={() => handleClick()}>
          SUBMIT
        </button>
      </form>
      <p>{text}</p>
    </div>
  );
};

export default App;
