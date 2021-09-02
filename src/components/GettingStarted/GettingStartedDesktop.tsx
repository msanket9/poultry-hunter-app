import React, { useState, useEffect } from "react";
import { Map } from "mapbox-gl";

import "./GettingStartedDesktop.css";
import "mapbox-gl/dist/mapbox-gl.css";

// Icons and Vectors.
import starman from "../../assets/images/vector-art/starman.svg";
import close from "../../assets/images/icons/close.svg";

import { TestMap } from "../mapbox";

const GettingStartedDesktop = () => {
  const submit = () => {};
  const [fromToggle, setFromToggle] = useState(false);
  const [moveWrapper, setMoveWrapper] = useState(
    "translateY(calc(100vh - 297px))"
  );
  const [map, setMap] = useState<Map>();

  const handleFormToggle = () => {
    setFromToggle(!fromToggle);

    if (!fromToggle) {
      setMoveWrapper("translateY(-287px)");
    } else {
      setMoveWrapper("translateY(calc(100vh - 297px))");
    }
  };

  useEffect(() => {
    setMap(TestMap("getting-started-desktop-form-map"));
  }, []);

  return (
    <>
      <div className="GettingStartedDesktop container">
        <img src={starman} />
        <div
          style={{ transform: moveWrapper }}
          className="animation-wrapper-desktop"
        >
          <div className="getting-started-desktop--button-container">
            <h2>Manage Your Farm With Us</h2>
            <p>
              Build a Responsive Supply Chain. Improve collaboration between
              destributors and sellers, and help save lives together.
            </p>
            <button onClick={handleFormToggle}>Getting Started</button>
          </div>
          <div
            className="getting-started-desktop-form-container"
            id="getting-started-desktop-form"
          >
            <div className="getting-started-desktop-form-container-heading">
              <h2>Account Details</h2>
              <img src={close} onClick={handleFormToggle} />
            </div>
            <div className="form-wrapper-desktop">
              <form onSubmit={submit} className="getting-started-desktop-form">
                <div className="gs-form-input-desktop">
                  <label>
                    Farm Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Anatoli Poultry Farm"
                    required
                  />
                </div>
                <div className="gs-form-input-desktop">
                  <label>
                    Owner Name <span>*</span>{" "}
                  </label>
                  <input type="text" placeholder="Anatoly Yakovenko" required />
                </div>
                <div className="gs-form-input-desktop">
                  <label>
                    Contact Number <span>*</span>
                  </label>
                  <input type="number" placeholder="9774835592" required />
                </div>
                <div
                  className="getting-started-desktop-form-map"
                  id="getting-started-desktop-form-map"
                ></div>
                <button>Create Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GettingStartedDesktop;