'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {

  buildRows () {
    return this.props.table.map(
      (row, index) =>
        <Row
          key={index}
          row={row}
          onChange={this.props.onChange.bind(null, index)}
          onFocus={this.props.onFocus.bind(null, index)}
        />
    );
  }

  render () {
    return (
      <table className="table" onBlur={this.props.onBlur}>
        <tbody>
          {this.buildRows()}
        </tbody>
      </table>
    );
  }
}

module.exports = Table;
