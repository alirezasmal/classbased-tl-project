import React from 'react';
class Todo extends React.Component {
  // * Event Handlers

  deleteHandler = () => {
    this.props.setTodos(
      this.props.todos.filter(
        (el) => el.id !== this.props.todo.id
      )
    );
  };

  completeHandler = () => {
    this.props.setTodos(
      this.props.todos.map((item) => {
        if (item.id === this.props.todo.id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      })
    );
  };
  render() {
    const { todo } = this.props;
    return (
      <div className="todo">
        <li
          className={`todo-item ${
            todo.checked ? 'completed' : ''
          } `}
        >
          {todo.text}
        </li>
        <button
          onClick={this.completeHandler}
          className="complete-btn"
        >
          <i className="fas fa-check"></i>
        </button>
        <button
          onClick={this.deleteHandler}
          className="trash-btn"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}
export default Todo;
