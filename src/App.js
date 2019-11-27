import React from "react";
import qMark from "./q-mark.svg";
import books from "./books.svg";
import grad from "./grad-cap.svg";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="main_welcome">
        <WelcomeSide1 />
        <WelcomeSide2 />
      </div>
    );
  }
}

const WelcomeSide1 = () => {
  const welcome_text_style = {
    marginTop: "20vh",
    marginBottom: "0px",
    fontSize: "5vh"
  };

  const lapir_text_style = {
    marginTop: "0%",
    fontSize: "5vh"
  };

  return (
    <div className="welcome_side" id="ws1">
      <h1 style={welcome_text_style}>Welcome to</h1>
      <p style={lapir_text_style}>Lapair</p>
    </div>
  );
};

const WelcomeSide2 = () => {
  return (
    <div className="welcome_side" id="ws2">
      <WelcomeNav />
      <SignUpBox />
    </div>
  );
};

const WelcomeNavBox = props => {
  let nav_svg = null;
  if (props.text === "About") {
    nav_svg = qMark;
  } else if (props.text === "Student") {
    nav_svg = books;
  } else {
    nav_svg = grad;
  }

  return (
    <div id="welcome_nav_box">
      <img src={nav_svg} height="40" alt="grad cap" />
      {props.text}
    </div>
  );
};

const WelcomeNav = () => {
  return (
    <div id="welcome_nav">
      <WelcomeNavBox text="About" />
      <WelcomeNavBox text="Student" />
      <WelcomeNavBox text="Tutor" />
    </div>
  );
};

const SignUpBox = () => {
  return (
    <div id="sign_up_box">
      <form id="sign_up_form">
        <label className="sign_up_label">Username:</label>
        <SignUpInput />
        <label className="sign_up_label">Password: </label>
        <SignUpInput />
        <br />
        <input id="sign_up_submit" type="submit" value="Login" />
        <br />
        <a href="signup">Don't Have an Account? Sign up</a>
      </form>
    </div>
  );
};

class SignUpInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <input className="sign_up_input"></input>;
  }
}

export default App;
