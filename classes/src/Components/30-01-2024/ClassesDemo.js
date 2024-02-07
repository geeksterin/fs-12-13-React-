import React from "react";
import { Link } from "react-router-dom";

class ClassesDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      name: "",
      address: "",
      hasValidItem: false,
    };
    console.log("I'm constructor");
  }

  onBtnClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    // this.state.counter = this.state.counter + 1;
  };

  componentDidMount() {
    console.log("I'm componentDidMount");
  }

  componentDidUpdate() {
    console.log("I'm componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("I'm componentWillUmount");
  }

  static getDerivedStateFromProps() {
    console.log("I'm getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("I'm shouldComponentUpdate");
    return false;
  }

  render() {
    console.log(this.props)
    console.log("I'm render");
    return (
      <>
        <h1>Classes Demo Component</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.onBtnClick}>Increment</button>
        <Link to="/settings">Setting</Link>
      </>
    );
  }
}

export default ClassesDemo;
