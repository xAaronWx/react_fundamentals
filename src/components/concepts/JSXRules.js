import React, { createElement } from "react";

const JSXRules = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1 className="section-title">JSX</h1>
        <dl>
          <dt>Resembles HTML</dt>
          <dd>It's not. It's actually closer to JavaScript.</dd>
          <dt>React Elements</dt>
          <dd>
            These are used to construct and update the DOM, or what you see on
            the screen.
          </dd>
          <dt>Not Required</dt>
          <dd>You can write in vanilla JS, but most sane people use JSX</dd>
        </dl>
        <hr />
        <h2>Challenge</h2>
        <br />
        <NormalComponent />
        <CreateElementComponent />
      </div>
    </div>
  );
};

export default JSXRules;

const NormalComponent = () => {
  return (
    <div style={{ border: "2px solid black" }}>
      <h1>Normal Functional Component</h1>
      <p>This was constructed with JSX in the return.</p>
      <img
        width="100%"
        height="280px"
        src="https://frontarm.com/static/media/jsx-live-cheatsheet-social.7b907f31.png"
        alt="JSX Rules"
      />
    </div>
  );
};

// Come back to this because it's not working right
const CreateElementComponent = () => {
  return (
    React.createElement("div", { style: { border: "2px solid block" } }),
    React.createElement("h1", null, "CreateElement Component"),
    React.createElement(
      "p",
      null,
      "This was constructed with CreateElement calls in the return"
    ),
    React.createElement(
      "img",
      {
        src:
          "https://csharpcorner.azureedge.net/article/introduction-to-jsx-and-rendering-elements-react-zero-to-hero-series-part/Images/image002.jpg",
      },
      null
    )
  );
};
