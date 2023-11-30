import "./App.css";
import React, { useState } from "react";
import ArrayContainer from "./ArrayContainer";
import ParentComponent from "./ParentComponent";

const App = () => {
  const [isShown, setIsShown] = useState(true);
  const handle = () => {
    setIsShown(!isShown);
  };
  // task-1-ass-3
  const [toggleButn, setToggleBtn] = useState(false);
  const handleChange = () => {
    setToggleBtn(!toggleButn);
  };
  const [name, setName] = useState("");
  const [num, setNum] = useState(0);
  const [fNum, setFNum] = useState();
  const [lNum, setLNum] = useState();
  const calSum = () => {
    const res = parseInt(fNum) + parseInt(lNum);
    setNum(res);
  };
  return (
    <div>
      <ArrayContainer />

      <h3>Dynamically Add Child components</h3>
      <div>
        <ParentComponent />
      </div>
      {/* TASK-1:ASS2 */}
      <div className="task-1-2">
        <h3>Show and Hide Eliment on screen</h3>
        <button onClick={handle}>{isShown ? "Hide" : "Show"}</button>
        {isShown && <p>Your text goes here</p>}
      </div>

      {/* TASK-1-ASS3 */}
      <h3>Enable And Disable Button</h3>
      <div className="t-3-container">
        <div onClick={handleChange} className="toggle">
          {toggleButn ? (
            <div className="toggle_left">
              <span className="on">On</span>
            </div>
          ) : (
            <div className="toggle_right">
              <span>Off</span>
            </div>
          )}
        </div>
      </div>

      {/* TASK_1-ASS4 */}
      <h3>2Way data binding using textbox</h3>
      <div className="task4">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="firstname"
          id="firstname"
        />
        <h2>FirstName:{<p className="name">{name}</p>}</h2>
      </div>
      {/* TASK-1-ASS5 */}

      <div className="task1-5"></div>

      {/* TASK1-ASS6 */}
      <h3>Do sum of two numbers</h3>
      <div className="task1-5">
        <lable>
          Enter First Number:
          <input
            type="number"
            value={fNum}
            onChange={(e) => setFNum(e.target.value)}
          />
        </lable>
        <br />
        <br />
        <lable>
          Enter Second Number:
          <input
            type="number"
            value={lNum}
            onChange={(e) => setLNum(e.target.value)}
          />
        </lable>
        <br />
        <br />
        <button className="btn1" onClick={calSum}>
          Add
        </button>
        <br />
        <p>Sum:{num}</p>
      </div>
    </div>
  );
};

export default App;
