import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log("child constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "usa",
      },
    };
  }
  async componentDidMount() {
    //api call
    const data = await fetch("https://api.github.com/users/akanksha16122007");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    //console.log("child component did mount");
  }

  render() {
    //console.log("child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact : @akanksha90</h3>
      </div>
    );
  }
}
export default UserClass;
