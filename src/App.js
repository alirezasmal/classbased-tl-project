import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Nav from './components/Nav/Nav';
import TodoListPage from './pages/TodoListPage';
import Home from './pages/Home';
import ProtectedRoute from './ProtectedRoute';
import Cookies from 'universal-cookie';
class App extends Component {
  state = { isAuthenticated: false, username: '' };
  cookies = new Cookies();
  authHandler = () => {
    this.setState({
      isAuthenticated: true,
    });
    // console.log('called');
  };
  setUsername = (term) => {
    this.setState({ username: term });
  };
  logouthandler = () => {
    this.setState({ isAuthenticated: false });
    this.setState({ username: '' });
    this.cookies.remove('token');
  };
  componentDidMount = () => {
    const authCookie = this.cookies.get('token');
    authCookie ? this.authHandler() : this.logouthandler();

    // authCookie
    //   ? console.log(authCookie)
    //   : console.log('no cookies');
  };
  render() {
    return (
      <>
        <Nav
          logouthandler={this.logouthandler}
          isAuthenticated={this.state.isAuthenticated}
          username={this.state.username}
        />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/auth">
            <AuthPage
              isAuthenticated={this.state.isAuthenticated}
              authHandler={this.authHandler}
            />
          </Route>
          {/* <ProtectedRoute
            path="/todolist"
            component={TodoListPage}
            auth={this.state.isAuthenticated}
          /> */}
          <ProtectedRoute
            auth={this.state.isAuthenticated}
            path="/todolist"
          >
            <TodoListPage setUsername={this.setUsername} />
          </ProtectedRoute>
        </Switch>
      </>
    );
  }
}
export default App;
