import React, { useState } from "react";

const PropDemo = () => {
  const [color, setColor] = useState("white");
  const [backgroundColor, setBackgroundColor] = useState("purple");
  const [borderRadius, setBorderRadius] = useState("5px");
  const [borderStyle, setBorderStyle] = useState("dashed");
  const [display, setDisplay] = useState("inline-block");
  const [width, setWidth] = useState("350px");
  const [textAlign, setTextAlign] = useState("center");

  let styles = {
    color: color,
    backgroundColor: backgroundColor,
    borderStyle: borderStyle,
    display: display,
    width: width,
    textAlign: textAlign,
  };

  const toggleColor = () => {
    color === "white" ? setColor("pink") : setColor("white");
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <div style={styles}>
          <FunctionalComponent
            string="Will this display?"
            function={toggleColor}
          />
          <FunctionalComponent string="This string" function={toggleColor} />
          <FunctionalComponent
            string="is being sent from"
            function={toggleColor}
          />
          <FunctionalComponent
            string="a single const (props)"
            function={toggleColor}
          />
        </div>
      </div>
    </div>
  );
};

const FunctionalComponent = (props) => {
  return (
    <div>
      <p>{props.string}</p>
      <button onClick={props.function}>Press Me</button>
    </div>
  );
};

export default PropDemo;
