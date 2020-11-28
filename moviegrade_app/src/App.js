import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  render() {
    const { isLoading } = this.state;
    return <div />;
  }
}

export default App;
