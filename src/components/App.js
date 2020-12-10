import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("male");
  let [phone, setPhone] = useState("");
  let [pass, setPass] = useState("");

  let [text, setText] = useState("");

  let handleChange = (type, event) => {
    if (type === "name") {
      setName(event.target.value);
    } else if (type === "email") {
      setEmail(event.target.value);
    } else if (type === "gender") {
      setGender(event.target.value);
    } else if (type === "phone") {
      setPhone(event.target.value);
    } else if (type === "pass") {
      setPass(event.target.value);
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
          value={name}
          onChange={(event) => handleChange("name", event)}
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          data-testid="email"
          value={email}
          onChange={(event) => handleChange("email", event)}
        />
        <br />
        <br />
        <label htmlFor="gender">Gender: </label>
        <input
          id="gender"
          type="text"
          data-testid="gender"
          value={gender}
          onChange={(event) => handleChange("gender", event)}
        />
        <br />
        <br />
        <label htmlFor="phone">Phone: </label>
        <input
          id="phone"
          type="number"
          data-testid="phoneNumber"
          value={phone}
          onChange={(event) => handleChange("phone", event)}
        />
        <br />
        <br />
        <label htmlFor="pass">Password: </label>
        <input
          id="pass"
          type="password"
          data-testid="password"
          value={pass}
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
