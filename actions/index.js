'use strict';

function addColumn (ev) {
  ev.preventDefault();

  let addColumn = this.state.table.map( column => [...column, '']);
  this.setState({
    table: addColumn
  });
}

function addRow (ev) {
  ev.preventDefault();

  let addRow = this.state.table[0].map( () => '');
  this.setState({
    table: [...this.state.table, addRow]
  });
}

function changeCell (rowIndex, columnIndex, ev) {
  let updatedCell = [...this.state.table[rowIndex]];
  updatedCell.splice(columnIndex, 1, ev.target.value)

  const updatedTable = [...this.state.table.slice()];
  updatedTable.splice(rowIndex, 1, updatedCell)

  this.setState({
    table: updatedTable
  });
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  });
}

function blurCell () {
  this.setState({
    focused: null
  });
}

const removeRow = function(ev) {
  ev.preventDefault();

  if(this.state.table.length > 1) {
    const updatedTable = this.state.table.slice(0, -1);

    this.setState({
      table: updatedTable
    });
  };
}

const removeColumn = function(ev) {
  ev.preventDefault();

  if(this.state.table[0].length > 1){
    const updatedTable = this.state.table.map( row => row.slice(0, -1));

    this.setState({
      table: updatedTable
    });
  };
}

module.exports = {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
