import "./App.css";
import logo from "./assets/logo.jpg";
import React, { useState } from "react";
import tv from "./assets/m6.json";
// console.log(tv);

const App = () => {
  return (
    <>
      <div className="fleximg">
        <img src={logo} alt="" />
      </div>

      {tv.map((obj, index) => {
        //console.log(obj);
        return (
          <>
            <div key={index}>
              <div className="flexprogramme">
                <h3>{obj.time}</h3>
                <img src={obj.image} alt="" />

                <div className="felxtitle">
                  <p className="blackbolsd">{obj.title}</p>
                  <p>{obj.type}</p>

                  <div className="duration">
                    <p className="black">{obj.duration}</p>
                    {obj.direct && <p className="colordirect">Direct</p>}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default App;
