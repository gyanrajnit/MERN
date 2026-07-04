import React from "react";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor call");
    this.state = {
      count: 0,
      name: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is called");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount is called");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate is called");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }


  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("Render is called");

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default MainContent;
