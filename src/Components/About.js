import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("parent constructor");
  }
  componentDidMount() {
    //console.log("parent component did mount");
  }
  render() {
    //console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste react webseries</h2>
        <UserClass name={"Akanksha (class)"} />
      </div>
    );
  }
}

export default About;
