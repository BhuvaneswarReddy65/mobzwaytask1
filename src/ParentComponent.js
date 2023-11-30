import React, { useState } from "react";
import "./App.css";

const ParentComponent = () => {
  const [childComponents, setChildComponents] = useState([]);

  const addChild = () => {
    setChildComponents([...childComponents, ""]);
  };

  const handleChange = (e, i) => {
    const inputData = [...childComponents];
    inputData[i] = e.target.value;
    setChildComponents(inputData);
  };

  const handleDelete = (i) => {
    const updatedComponents = [...childComponents];
    updatedComponents.splice(i, 1);
    setChildComponents(updatedComponents);
  };

  return (
    <>
      <h3>Dynamically Add Child Components</h3>
      <div className="t-3-container1">
        <button onClick={addChild} className="btn">
          Add Child Component
        </button>
        <div className="data">
          {childComponents.map((data, i) => (
            <div key={i}>
              <input
                type="text"
                value={data}
                onChange={(e) => handleChange(e, i)}
                className="in"
              />
              <button onClick={() => handleDelete(i)} className="btn1">
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ParentComponent;
