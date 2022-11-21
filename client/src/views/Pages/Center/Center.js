import React from "react";
import "../Center/Center.css";
import DropDown from "../DropDown/DropDown";

export default function Center() {
  return (
    <div className="center-container">
      <p className="para1">Locate a Centre</p>
      <p className="para2">
        Find the nearest location of offline center using Locator
      </p>
      <p className="para3">Locations</p>
      <div>
        <DropDown />
        <p className="para4">How to use the Locator?</p>
        <pre className="locator-details">
          The offline center Locator works by searching a location based{" "}
          <br></br>on the the Location Type, State, District or either by keying{" "}
          <br></br>in your Pincode.
        </pre>
      </div>
    </div>
  );
}
