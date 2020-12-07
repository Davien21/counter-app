import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: "13px",
    fontWeight: "bold",
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevProps', prevProps)
    // console.log('prevState', prevState)
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    return (
      <div className="row">
        <div className="col-2 col-md-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatvalue()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getButtonClasses() {
    let classes = "btn btn-secondary btn-sm m-2 ";
    classes += this.props.counter.value === 0 ? "disabled" : "";
    return classes;
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
