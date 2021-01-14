import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/welcome/:name" component={WelcomeComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/todos" component={ListTodosComponent} />
            <Route path="/logout" component={LogoutComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>
        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}
class HeaderComponent extends Component {
  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="http://www.in28minutes.com" className="navbar-brand">
                in28minutes
              </a>
            </div>
            <ul className="navbar-nav">
              <li className="nav-link">
                <Link className="nav-link" to="/welcome/in28minutes">
                  Home
                </Link>
              </li>
              <li className="nav-link">
                {" "}
                <Link className="nav-link" to="/todos">
                  Todos
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav navbar-collapse justify-content-end">
              <li className="nav-link">
                {" "}
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-link">
                {" "}
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">
          All Rights Reserved 2020 @in28minutes
        </span>
      </footer>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <>
        <h1>You are logged out</h1>
        <div className="container">Thank You for Using Our Application.</div>
      </>
    );
  }
}
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "in28minutes",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    //console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  /* handleUserNameChange(event) {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  }

  handlePasswordChange(event) {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  } */
  loginClicked() {
    if (
      this.state.username === "in28minutes" &&
      this.state.password === "dummy"
    ) {
      this.props.history.push(`/welcome/${this.state.username}`);

      //this.setState({ showSuccessMessage: true });
      //this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {/*   <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
          {/* if this.state.hasLoginFailed ===true return Invalid Credentials*/}
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {/* <ShowLoginSucessMessage
          showSuccessMessage={this.state.showSuccessMessage}
        /> */}
          {this.state.showSuccessMessage && <div>Login Sucessfull</div>}
          User Name:{" "}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password:{" "}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
/* function ShowInvalidCredentials(props) {
  if (props.hasLoginFailed) {
    return <div>Invalid Credentials</div>;
  } else return null;
}
function ShowLoginSucessMessage(props) {
  if (props.showSuccessMessage) {
    return <div>Login Sucessful</div>;
  } else {
    return null;
  }
} */

class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <h1>Welcome</h1>
        <div className="container">
          {" "}
          Welcome to {this.props.match.params.name}. You can manage your todos
          <Link to="/todos"> here</Link>.
        </div>
      </>
    );
  }
}

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn React",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: "Become an Expert at React",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: "Visit India",
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>description</th>
                <th>Is Completed ?</th>
                <th>TargetDate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>An erorr Occurred. Contact support at abcdf-efgh!</div>;
}

export default TodoApp;
