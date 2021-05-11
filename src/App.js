import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    name: "Josmar Junior",
    counter: 0,
  };

  handleChangeName = () => {
    this.setState({ name: "Josmar Trigueiro" });
  };

  handleLinkClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p onClick={this.handleChangeName}>
            My name is {name} : {counter}
          </p>
          <a
            onClick={this.handleLinkClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello
          </a>
        </header>
      </div>
    );
  }
}

export default App;
