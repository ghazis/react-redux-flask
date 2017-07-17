import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { runScript } from '../../actions/buttons';

class Button1 extends Component {

	render() {

		return (
			<div>
				<Button className={this.props.buttonData.classname} onClick={() => {this.props.runScript('https://httpbin.org/anything', this.props.buttonData.cmd, '1')}}>Button {this.props.buttonData.name}</Button>
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
        runScript: (url, cmd, name) => dispatch(runScript(url, cmd, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(Button1);