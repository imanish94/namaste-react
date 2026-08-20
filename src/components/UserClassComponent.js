import React from "react";
import { UserInfo } from "./../context/UserContext";

class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      info: {
        name: "",
        location: "",
        contact: "",
      },
    };
  }

  async componentDidMount() {
    console.log("UserClassComponent mounted");
    const response = await fetch("https://api.github.com/users/imanish94");
    const responseData = await response.json();

    this.setState({
      info: responseData,
    });
  }

  componentDidUpdate() {
    console.log("yes api is update...");
  }

  componentWillUnmount() {
    console.log("Bye Bype page");
  }

  render() {
    const { name, location, contact } = this.state.info;
    return (
      <div className="border border-black m-2 p-2">
        <h1>User Information Class Component</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
        <h3>Count: {this.state.count}</h3>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Increment Count
        </button>
        <p>
          Name:
          <UserInfo.Consumer>{(user) => user.userName}</UserInfo.Consumer>
        </p>
      </div>
    );
  }
}

export default UserClassComponent;
