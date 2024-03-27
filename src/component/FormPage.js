import React from "react";
import { IoMdCheckbox } from "react-icons/io";
import Img1 from "../asset/checkbox.png";
import "./formpage.css";
const FormPage = () => {
  return (
    <div className="page2">
      <div className="form-page">
        <div className="form">
          <h2 className="form-heading">Fill the form to view more details</h2>
          <h4 className="second-heading">
            Getting in touch is the first step towards forging meaningful
            connections and fostering collaboration
          </h4>
          <input
            type="text"
            placeholder="Full Name"
            className="input-field"
          ></input>
          <input
            type="text"
            placeholder="Mobile Number"
            className="input-field"
          ></input>
          <input
            type="text"
            placeholder="Email"
            className="input-field"
          ></input>
          <div className="agree">
            <img className="img2" src={Img1}></img>
            <p>You agree to Our terms and Condition and data privacy policy</p>
          </div>
          <div className="button3">SUBMIT</div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
