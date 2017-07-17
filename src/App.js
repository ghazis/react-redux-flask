import React, { Component } from 'react';
import Routes from './components/routes';
import { Link } from 'react-router-dom';
import { Nav , NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class App extends Component {


  render() {
    return (
    	<div>
			<Nav bsStyle="tabs" activeKey="1">
				<LinkContainer to="/home"><NavItem eventKey="1">Home Page</NavItem></LinkContainer>
				<LinkContainer to="/page2"><NavItem eventKey="2">Page 2</NavItem></LinkContainer>
				<LinkContainer to="/page3"><NavItem eventKey="3">Page 3</NavItem></LinkContainer>
			</Nav>
      		{Routes}
       	</div>
    );
  }
}

export default App;
