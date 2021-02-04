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

  const toggleBorderRadius = () => {
    borderRadius === "5px" ? setBorderRadius("50px") : setBorderRadius("5px");
  };

  const togglebackgroundColor = () => {
    backgroundColor === "purple"
      ? setBackgroundColor("black")
      : setBackgroundColor("purple");
  };

  const toggletextAlign = () => {
    textAlign === "center" ? setTextAlign("right") : setTextAlign("center");
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <div style={styles}>
          <FunctionalComponent string="Color Toggle" function={toggleColor} />
          <FunctionalComponent
            string="Border Radius Toggle"
            function={toggleBorderRadius}
          />
          <FunctionalComponent
            string="Background Color"
            function={togglebackgroundColor}
          />
          <FunctionalComponent
            string="Text Align Toggle"
            function={toggletextAlign}
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

const TinyComponent = (props) => {
  return (
    <div>
      <p>The current style is : {props.selectedStyle}</p>
    </div>
  );
};

export default PropDemo;
