import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React ✈️",
);

console.log(heading);
const jsxHeading = (
  <h1 id="jsx-heading" className="heading" tabIndex="1">
    Hello World from JSX ✈️
  </h1>
);

console.log(jsxHeading);

// React Element => Object => HTML Element (DOM) => Rendered in the Browser

// React Component

const TitleComponent = () => {
  return (
    <h1 className="heading" tabIndex={2}>
      React ❤️
    </h1>
  );
};

const HeadingComponent = () => (
  <div>
    <TitleComponent />
    <h1 className="heading" tabIndex={5}>
      React Component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
