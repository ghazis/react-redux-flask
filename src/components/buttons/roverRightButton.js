import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { sendCmd } from '../../actions/rcActions';
import FlatButton from 'material-ui/FlatButton';
import KeyBinding from 'react-keybinding-component'
import { right } from '../images';

class RoverRightButton extends Component {

	render() {

		return (
			<div>
				<KeyBinding onKey={ (e) => { if (e.keyCode == 39) {this.props.sendCmd('http://192.168.0.150/cmd?cmd=turnRoverRight')} } } />
				<button style={{border: 'none', background: 'none' }} onClick={() => {this.props.sendCmd('http://192.168.0.150/cmd?cmd=turnRoverRight')}}><img src={right} style={{ width: 50 }}></img></button>
			</div>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.buttonToggle.button1
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendCmd: (url) => dispatch(sendCmd(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(RoverRightButton);