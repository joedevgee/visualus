import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import HeaderBar from './component/HeaderBar/HeaderBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Custom Title',
      defaultTheme: true
    };
    this.switchTheme = this.switchTheme.bind(this);
  }

  switchTheme() {
    this.setState({
      defaultTheme: !this.state.defaultTheme
    });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider
          muiTheme={
            this.state.defaultTheme
              ? getMuiTheme(lightTheme)
              : getMuiTheme(darkTheme)
          }
        >
          <HeaderBar title={this.state.title} onToggle={this.switchTheme} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
