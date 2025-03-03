import React, { useState } from "react";

function FormComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    console.log("Typing:", value); // Logs while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted with value: " + inputValue);
    console.log("Form submitted with value:", inputValue);
  };

  const handleButtonClick = () => {
    alert("Submitted via Button Click: " + inputValue);
    console.log("Form submitted with value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Component Submission</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit via Form</button>
      <button type="button" onClick={handleButtonClick}>
        Submit via Button Click
      </button>
    </form>
  );
}

export default FormComponent;
