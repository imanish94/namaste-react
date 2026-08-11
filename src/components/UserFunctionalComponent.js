import React, { useState, useEffect } from "react";

const UserFunctionalComponent = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
      console.log("setinterval");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="user-card">
      <h1>User Information Functional Component</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: {contact}</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default UserFunctionalComponent;
