import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { sendCmd } from '../../actions/rcActions';
import FlatButton from 'material-ui/FlatButton';
import KeyBinding from 'react-keybinding-component'
import { left } from '../images';

class CamLeftButton extends Component {

	render() {

		return (
			<div>
				<KeyBinding onKey={ (e) => { if (e.keyCode == 65) {this.props.sendCmd('http://192.168.0.150/cmd?cmd=python move_cam.py left')} } } />
				<button style={{border: 'none', background: 'none' }} onClick={() => {this.props.sendCmd('http://192.168.0.150/cmd?cmd=python move_cam.py left')}}><img src={left} style={{ width: 50 }}></img></button>
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
(CamLeftButton);