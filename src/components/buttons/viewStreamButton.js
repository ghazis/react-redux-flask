import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { sendCmd } from '../../actions/rcActions';
import FlatButton from 'material-ui/FlatButton';

class ViewStreamButton extends Component {

	render() {

		return (
			<div>
				<FlatButton label="View Live Stream" onClick={() => {this.props.sendCmd('http://192.168.0.150/cmd?cmd=pkill -f mjpg')}} />
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
(ViewStreamButton);