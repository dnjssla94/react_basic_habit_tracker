import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  handleIncreament = (habit) => {
    this.props.onIncrease(habit);
  };
  handleDecreament = (habit) => {
    this.props.onDecrease(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };
  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    console.log("habits");
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.handleAdd}></HabitAddForm>
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrease={this.handleIncreament}
              onDecrease={this.handleDecreament}
              onDelete={this.handleDelete}
            ></Habit>
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          all Reset
        </button>
      </div>
    );
  }
}

export default Habits;
