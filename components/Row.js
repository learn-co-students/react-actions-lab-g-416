'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  buildCells () {
    return this.props.row.map(
      (cell, index) =>
        <Cell
          key={index}
          cell={cell}
          onChange={this.props.onChange.bind(null, index)}
          onFocus={this.props.onFocus.bind(null, index)}
        />
    );
  }
  render () {
    return(
      <tr className="row">
        {this.buildCells()}
      </tr>
    );
  }
}

module.exports = Row;
