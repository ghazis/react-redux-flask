import React, { Component } from 'react';
import Routes from './components/routes';
import { Link } from 'react-router-dom';
import { Nav , NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import HomePage from './components/pages/homePage';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends Component {


  render() {
    return (
      <MuiThemeProvider>
      <div>
        <AppBar showMenuIconButton={false} style={{marginBottom: 10}} className="text-center" title="Spy Rover" />
      <Nav bsStyle="tabs">

      </Nav>
        <HomePage />
        </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
