import React from "react";
import UserFunctionalComponent from "./UserFunctionalComponent";
import UserClassComponent from "./UserClassComponent";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <UserFunctionalComponent
        name="John Doe"
        location="New York"
        contact="john.doe@example.com"
      />
      <UserClassComponent
        name="Jane Smith"
        location="Los Angeles"
        contact="jane.smith@example.com"
      />
    </div>
  );
};

export default About;
