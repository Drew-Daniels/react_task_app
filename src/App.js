import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

// TODO:
// 1.) Manage the amount of tasks in state and using that to display the task number next to each task - without using ordered lists
// 2.) Implement a delete button for each task
// 3.) Implement an edit button for each task - when the edit button is clicked, the specific task should become changeable and the edit button should change to a resubmit button
class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid()
      },
    });
  };

  render() {
    const {task, tasks} = this.state;

    return (
    <div>
      <form onSubmit={this.onSubmitTask}>
        <label htmlFor="taskInput">Enter task</label>
        <input 
          onChange = {this.handleChange}
          value = {task.text}
          type="text" 
          id="taskInput"
          />
        <button type="submit">
          Add Task
        </button>
      </form>
      <Overview tasks={tasks} />
    </div>
    );
  }
}

export default App;
