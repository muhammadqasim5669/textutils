import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    props.showAlert("converted to upperCase")
  };

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  return (
    <>
      <div className="container" style={{color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" 
            value={text}
            onChange={handleChange} style={{ backgroundColor: props.mode === "dark" ? "rgb(15,43,69)" : "white",color: props.mode === "dark" ? "white" : "#042743" }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your text summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {(
            (text.trim() === "" ? 0 : text.trim().split(/\s+/).length) / 200
          ).toFixed(2)}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}