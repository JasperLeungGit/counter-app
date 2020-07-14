import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: [],
  //   // tags: ["tag1", "tag2", "tag3"],
  // };

  // constructor() {
  //   super();
  //   //bind method look into later
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // styles = {
  //   fontSize: 200,
  //   fontWeight: "bold",
  //   margin: 20,
  // };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    else {
      return (
        //look into this later
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }

  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { value } = this.state;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
