import React, { PureComponent } from "react";

class Habit extends PureComponent {
  handleIncreament = () => {
    this.props.onIncrease(this.props.habit);
  };
  handleDecreament = (habit) => {
    this.props.onDecrease(this.props.habit);
    // const count = this.state.count - 1;
    // this.setState({ count: count < 0 ? 0 : count });
  };
  handleDelete = (habit) => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    console.log("habit", this.props.habit.name);
    //const habitName = this.props.habit.name;
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name} </span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncreament}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecreament}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
