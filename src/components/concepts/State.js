import React, { useState } from "react";

const State = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <ul>
          <dt>useState is unique to Functional Component</dt>
          <dd>
            Class components have a separate means of using and changing state
          </dd>
          <dt>useState Uses Array Destructuring</dt>
          <dd>useState proves a state variable and a setState function</dd>
          <dt>useState is a Hook</dt>
          <dd>useState is a hook baked into React</dd>
          <dt>Triggers Re-renders</dt>
          <dd>
            Like with props changes, changing the state of a component
            re-renders the whole component
          </dd>
        </ul>
        <StateExample />
      </div>
    </div>
  );
};

export default State;

function StateExample() {
  const [text, setText] = useState("initial value");
  const [likeNum, setLikeNum] = useState(0);
  const [textColor, setTextColor] = useState("blue");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <img
        style={{ width: "75px", height: "75px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/1200px-Bot%C3%B3n_Me_gusta.svg.png"
        alt="facebook png"
        onClick={(e) => setLikeNum(likeNum + 1)}
      />
      <span>{likeNum}</span>
      <br />
      <br />
      <h2
        style={{ color: textColor }}
        onMouseEnter={(e) => setTextColor("red")}
        onMouseLeave={(e) => setTextColor("blue")}
      >
        This text will change color on hover
      </h2>
    </div>
  );
}
