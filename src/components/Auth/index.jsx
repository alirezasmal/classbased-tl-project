import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
// import { useHistory } from 'react-router-dom';
import './Auth.css';
import { Redirect } from 'react-router-dom';
//todo props authHandler
class Auth extends React.Component {
  state = { loginFormShow: true };
  cookies = new Cookies();
  // const history = useHistory();
  // const isLoggedIn = true;
  // const [loginPage, setLoginPage] = useState(true);
  // auth handler
  // const verifyAuth = () => {
  //   isLoggedIn ? (
  //     history.push('/todolist')
  //   ) : (
  //     <div style={{ color: 'red' }}>error</div>
  //   );
  // };
  loginHandler = async (event) => {
    event.preventDefault();
    const loginData = {
      username: event.target[0].value,
      password: event.target[1].value,
    };
    //todo console.log(loginData);
    //* validate authentication
    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/users/login/',
        loginData
      );
      this.cookies.set('token', response.data.token);
      // * console.log(cookies.get('token'));
      this.props.authHandler();
      console.log(response);
    } catch (error) {
      console.log(error.response.data.message);
      return alert(error.response.data.message);
    }

    //   axios
    //     .post(
    //       'http://localhost:8000/api/v1/users/login/',
    //       loginData
    //     )
    //     .then((response) => console.log(response))
    //     .catch((er) => console.log(er.response.data.message));
  };
  signupHandler = async (event) => {
    event.preventDefault();
    const signupData = {
      username: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    //todo console.log(signupData);
    //* validate authentication
    // this.props.authHandler();
    // axios
    //   .post(
    //     'http://localhost:8000/api/v1/users/signup/',
    //     signupData
    //   )
    //   .then((response) => console.log(response.data));
    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/users/signup/',
        signupData
      );
      this.cookies.set('token', response.data.token);
      this.props.authHandler();
      console.log(response);
    } catch (error) {
      // errorMessage
      console.log(error.response.data.message);
      return alert(error.response.data.message);
    }
  };
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/todolist" />;
    }
    return (
      <>
        <header>Your Login or SignUp Page</header>
        <div className="box">
          <div className="toggle">
            <h1
              onClick={() => {
                this.setState({ loginFormShow: true });
              }}
              className={
                this.state.loginFormShow ? 'active' : ''
              }
            >
              Login
            </h1>
            <h1
              className={
                this.state.loginFormShow ? '' : 'active'
              }
              onClick={() => {
                this.setState({ loginFormShow: false });
              }}
            >
              SignUp
            </h1>
          </div>
          {this.state.loginFormShow ? (
            <form
              onSubmit={this.loginHandler}
              className="auth-form"
            >
              <input
                className="username-input"
                type="text"
                placeholder="UserName"
              />
              <input
                className="password-input"
                type="password"
                placeholder="Password"
              />
              <button
                onClick={this.onClickHandler}
                className="submit-btn"
                type="submit"
              >
                Login
              </button>
            </form>
          ) : (
            <form
              onSubmit={this.signupHandler}
              className="auth-form"
            >
              <input
                className="username-input"
                type="text"
                placeholder="UserName"
              />
              <input
                className="email-input"
                type="email"
                placeholder="email"
              />
              <input
                className="password-input"
                type="password"
                placeholder="Password"
              />
              <button className="submit-btn" type="submit">
                Register
              </button>
            </form>
          )}
        </div>
      </>
    );
  }
}
export default Auth;
// ! PRACTICE : MAKE A REUSABLE COMPONENT OUT OF IT
