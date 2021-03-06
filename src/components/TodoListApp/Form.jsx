import axios from 'axios';
import React, { Component } from 'react';
import '../../app.css';
class Form extends Component {
  state = { inputTerm: '' };
  // !event handlers
  // * Event Handler(s)
  inputHandler = (event) => {
    this.setState({ inputTerm: event.target.value });
    // console.log(event.target.value);
  };

  //* submit handler
  submitHandler = async (event) => {
    event.preventDefault();
    // *errorHandle: Trying to submit empty String
    if (this.state.inputTerm === '') {
      // ! console.log(`empty string`);
      return alert('Nothing has been Submitted yet');
    }
    // *submiting A Todo
    // ! Local method
    // this.props.todoAddhandler([
    //   ...this.props.todos,
    //   {
    //     description: this.state.inputTerm,
    //     isChecked: false,
    //     id: Math.random() * 100,
    //   },
    // ]);
    // !!!!!!!!!!!!!!!!! wrong db structure
    try {
      const addingTodoData = await axios.post(
        'http://localhost:8000/api/v1/todos/',
        {
          name: 'todo',
          isChecked: false,
          id: Math.random() * 100,
          description: this.state.inputTerm,
        },
        {
          headers: {
            Authorization: `Bearer ${this.props.token}`,
          },
        }
      );
      console.log(addingTodoData);
      this.props.todoAddhandler([
        ...this.props.todos,
        {
          description: this.state.inputTerm,
          isChecked: false,
          id: Math.random() * 100,
        },
      ]);
      this.setState({ inputTerm: '' });
    } catch (error) {
      console.log(error);
    }
  };
  // * filter handler
  onFilterChange = (event) => {
    this.props.setFilterOption(event.target.value);
  };
  render() {
    const { inputTerm } = this.state;
    return (
      <div>
        <form className="todo-form">
          <input
            value={inputTerm}
            onChange={this.inputHandler}
            type="text"
            className="todo-input"
          />
          <button
            onClick={this.submitHandler}
            className="tood-button"
            type="submit"
          >
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select
              onChange={this.onFilterChange}
              name="todos"
              className="filter-todo"
              value={this.props.filterOption}
            >
              <option value="all">All</option>
              <option value="uncompleted">Uncompleted</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
