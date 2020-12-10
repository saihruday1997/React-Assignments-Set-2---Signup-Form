import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div id="main">
      <form>
        <label for="name">Name:</label>
        <input id="name" type="text" data-testid="name" />
        <br />
        <br />
        <label for="email">Email:</label>
        <input id="email" type="email" data-testid="email" />
        <br />
        <br />
        <label for="gender">Gender:</label>
        <input id="gender" type="text" data-testid="gender" />
        <br />
        <br />
        <label for="phone">Phone:</label>
        <input id="phone" type="number" data-testid="phoneNumber" />
        <br />
        <br />
        <label for="pass">Phone:</label>
        <input id="pass" type="password" data-testid="password" />
        <br />
        <br />
        <button data-testid="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default App;
