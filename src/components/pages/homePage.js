import React, { Component } from 'react';
import { ViewStreamButton } from '../buttons';
import { CamUpButton } from '../buttons';
import { CamDownButton } from '../buttons';
import { CamRightButton } from '../buttons';
import { CamLeftButton } from '../buttons';
import { RoverForwardButton } from '../buttons';
import { RoverBackButton } from '../buttons';
import { RoverRightButton } from '../buttons';
import { RoverLeftButton } from '../buttons';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { sendCmd } from '../../actions/rcActions';

class HomePage extends Component {

  componentWillMount() {
    this.props.sendCmd('http://192.168.0.150/cmd?cmd=./stream.sh');
  }

  componentWillUnmount() {
    this.props.sendCmd('http://192.168.0.150/cmd?cmd=pkill -f mjpg');
  }

  render () {

    return (
      <div className="text-center" style={{marginTop: 20}}>
      <ViewStreamButton />
        <div>
          <iframe src="http://192.168.0.150:8080/javascript_simple.html" width="610" height="310" frameBorder="0"></iframe>
          <div className="row">
            <div className="col-sm-6"><CamUpButton /></div>
            <div className="col-sm-6"><RoverForwardButton /></div>
            <div className="col-sm-1"></div>
            <div className="col-sm-2"><CamLeftButton /></div>
            <div className="col-sm-2"><CamRightButton /></div>
            <div className="col-sm-2"></div>
            <div className="col-sm-2"><RoverLeftButton /></div>
            <div className="col-sm-2"><RoverRightButton /></div>
            <div className="col-sm-6"><CamDownButton /></div>
            <div className="col-sm-6"><RoverBackButton /></div>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      buttonData: state.buttonToggle
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendCmd: (url) => dispatch(sendCmd(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(HomePage);