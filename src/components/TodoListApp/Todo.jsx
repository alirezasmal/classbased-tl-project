import axios from 'axios';
import React from 'react';
class Todo extends React.Component {
  // * Event Handlers

  deleteHandler = async () => {
    try {
      const deleteTodoData = axios.delete(
        `http://localhost:8000/api/v1/todos/${this.props.todo._id}`,
        {
          headers: {
            Authorization: `Bearer ${this.props.token}`,
          },
        }
      );
      console.log(deleteTodoData);
      this.props.setTodos(
        this.props.todos.filter(
          (el) => el._id !== this.props.todo._id
        )
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  // completeHandler = async () => {
  //   this.props.setTodos(
  //     this.props.todos.map((item) => {
  //       if (item._id === this.props.todo._id) {
  //         try {
  //           const checkItemData = axios.patch(
  //             `http://localhost:8000/api/v1/todos/id: ${item._id}`,
  //             {
  //               headers: {
  //                 Authorization: `Bearer ${this.props.token}`,
  //               },
  //             },
  //             { isChecked: !item.isChecked }
  //           );
  //           console.log(checkItemData);
  //         } catch (error) {
  //           // console.log(error.response);
  //         }
  //         // return {
  //         //   ...item,
  //         //   isChecked: !item.isChecked,
  //         // };
  //       }
  //       return item;
  //     })
  //   );
  // };
  // ?????????????????????????????? NEW
  completeHandler = async () => {
    this.props.todos.forEach((item) => {
      if (item._id === this.props.todo._id) {
        try {
          const checkItemData = axios.patch(
            `http://localhost:8000/api/v1/todos/${item._id}`,
            { isChecked: !item.isChecked },
            {
              headers: {
                Authorization: `Bearer ${this.props.token}`,
              },
            }
          );
          this.props.setTodos(
            this.props.todos.map((item) => {
              if (item._id === this.props.todo._id) {
                return {
                  ...item,
                  isChecked: !item.isChecked,
                };
              }
              return item;
            })
          );
          console.log(checkItemData);
        } catch (error) {
          console.log(error.response);
        }
      }
    });
  };
  // !!
  // completeHandler = async () => {
  //   try {
  //     const checkItemData = axios.patch(
  //       `http://localhost:8000/api/v1/todos/${this.props.todo._id}`,
  //       { isChecked: !this.props.todo.isChecked },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${this.props.token}`,
  //         },
  //       }
  //     );
  //     console.log(checkItemData);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };
  render() {
    const { todo } = this.props;
    return (
      <div className="todo">
        <li
          className={`todo-item ${
            todo.isChecked ? 'completed' : ''
          } `}
        >
          {todo.description}
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
