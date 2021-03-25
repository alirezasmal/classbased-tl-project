import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Nav from './components/Nav/Nav';
import TodoListPage from './pages/TodoListPage';
import Home from './pages/Home';
import ProtectedRoute from './ProtectedRoute';
import Cookies from 'universal-cookie';
class App extends Component {
  state = { isAuthenticated: false };
  cookies = new Cookies();
  authHandler = () => {
    this.setState({
      isAuthenticated: true,
    });
    // console.log('called');
  };
  logouthandler = () => {
    this.setState({ isAuthenticated: false });
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
          <ProtectedRoute
            path="/todolist"
            component={TodoListPage}
            auth={this.state.isAuthenticated}
          />
        </Switch>
      </>
    );
  }
}
export default App;
