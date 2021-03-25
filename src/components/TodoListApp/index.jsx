import React, { Component } from 'react';
import '../../app.css';
import TodoList from './TodoList';
import Form from './Form';
import axios from 'axios';
import Cookies from 'universal-cookie';
class TodoListApp extends Component {
  state = {
    todos: [],
    selectedFilter: 'all',
    filteredTodos: [],
  };
  cookies = new Cookies();
  token = this.cookies.get('token');
  componentDidMount = async () => {
    try {
      const userData = await axios.get(
        'http://localhost:8000/api/v1/users/me',
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
      console.log(userData.data.data.doc.username);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.todos !== this.state.todos ||
      prevState.selectedFilter !== this.state.selectedFilter
    ) {
      this.filterOptionHandler();
    }
  }

  // * changing filter handler
  filterOptionHandler = () => {
    switch (this.state.selectedFilter) {
      case 'uncompleted':
        this.setState({
          filteredTodos: this.state.todos.filter(
            (todo) => todo.checked === false
          ),
        });
        break;
      case 'completed':
        this.setState({
          filteredTodos: this.state.todos.filter(
            (todo) => todo.checked === true
          ),
        });
        break;
      default:
        this.setState({ filteredTodos: this.state.todos });
        break;
    }
  };

  //* adding a new todo to its list
  setTodos = (newtodo) => {
    this.setState({ todos: newtodo });
  };

  render() {
    const { selectedFilter, todos } = this.state;
    return (
      <div className="app-contaier">
        <header>
          <h1> Your Todo List </h1>
        </header>
        <Form
          token={this.token}
          todoAddhandler={this.setTodos}
          todos={todos}
          filterOption={selectedFilter}
          setFilterOption={(e) => {
            this.setState({ selectedFilter: e });
          }}
        />
        <TodoList
          todos={todos}
          filteredTodos={this.state.filteredTodos}
          setTodos={this.setTodos}
        />
      </div>
    );
  }
}
export default TodoListApp;
