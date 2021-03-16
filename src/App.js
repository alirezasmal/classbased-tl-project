import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Nav from './components/Nav/Nav';
import TodoListPage from './pages/TodoListPage';
import Home from './pages/Home';
class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/todolist" component={TodoListPage} />
        </Switch>
      </>
    );
  }
}
export default App;
