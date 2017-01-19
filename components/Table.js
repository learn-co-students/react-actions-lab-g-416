'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    return (
      <table className="table" onBlur={this.props.onBlur}>
        <tbody>
        { 
          this.props.table.map( (row, i) => 
            <Row 
              key={i} 
              row={row}
              onChange={this.props.onChange.bind(null, i)} 
              onFocus={this.props.onFocus.bind(null, i)} 
            />
          ) 
        }
        </tbody>
      </table>
    );
  }
}

module.exports = Table;
