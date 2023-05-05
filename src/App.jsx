import "./App.css";
import logo from "./assets/logo.jpg";
import React, { useState } from "react";
import tv from "./assets/m6.json";

const App = () => {
  return (
    <>
      <div className="fleximg">
        <img src={logo} alt="" />
      </div>
      {tv.map((time, index) => {
        return (
          <div key={index}>
            <div>{tv.time}</div>
          </div>
        );
      })}
    </>
    // <p>{data.time}</p>
  );
};

export default App;
