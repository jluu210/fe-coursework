import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 1 };
  }

  add = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  subtract = () => {
    this.setState((previousState) => ({
      count:
        previousState.count > 1 ? previousState.count - 1 : previousState.count,
    }));
  };

  render() {
    return (
      <section>
        <h2>Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
      </section>
    );
  }
}

class ToggledGreeting extends Component {
  constructor() {
    super();
    this.state = { greeting: "hello" };
  }

  toggleGreeting = () => {
    this.setState((previousState) => ({
      greeting: previousState.greeting === "hello" ? "goodbye" : "hello",
    }));
  };

  render() {
    return (
      <section>
        <h2>Toggled Greeting</h2>
        <p>{this.state.greeting}</p>
        <button onClick={this.toggleGreeting}>toggled me</button>
      </section>
    );
  }
}

class ShowHideToggle extends Component {
  constructor() {
    super();
    this.state = { isVisible: true };
  }

  toggleVisibility = () => {
    this.setState((previousState) => ({
      isVisible: !previousState.isVisible,
    }));
  };

  render() {
    return (
      <section>
        <h2>Show/Hide Toggle</h2>

        {this.state.isVisible && <p>Hide Me</p>}

        <button onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return (
      <main>
        <h1>React Widgets</h1>
        <Counter />
        <ToggledGreeting />
        <ShowHideToggle />
      </main>
    );
  }
}

export default App;
