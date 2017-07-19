import React, { Component } from 'react';
import { Button1 } from '../buttons';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class Page2 extends Component {

  render () {
    return (
      <div>
      <h1 className="text-center">Page 2</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Controls</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Button1 /></td>
            <td>example</td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      buttonData: state.buttonToggle
    };
};

export default connect(mapStateToProps)
(Page2);