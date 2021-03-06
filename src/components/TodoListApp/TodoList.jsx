import React from 'react';
import Todo from './Todo';
class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {this.props.filteredTodos.map((todo) => {
            return (
              <Todo
                token={this.props.token}
                key={todo._id}
                todo={todo}
                setTodos={this.props.setTodos}
                todos={this.props.todos}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default TodoList;
