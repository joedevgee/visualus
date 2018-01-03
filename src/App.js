import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Custom Title'
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Title</h1>
      </div>
    );
  }
}

export default App;
