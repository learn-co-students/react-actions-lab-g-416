'use strict';

// const addColumn = context => event => {
//   event.preventDefault();

//   let addColumnToTable = context.state.table.map( row => [...row, '']);

//   context.setState({
//     table: addColumnToTable
//   });
// }

const addColumn = function(event) {
  event.preventDefault();

  let addColumnToTable = this.state.table.map( row => [...row, '']);

  this.setState({
    table: addColumnToTable
  });
}

// const addRow = context => event => {
//   event.preventDefault();

//   let addRowToTable = context.state.table[0].map( () => '');

//   context.setState({
//     table: [...context.state.table, addRowToTable]
//   }); 
// }

const addRow = function(event) {
  event.preventDefault();

  let addRowToTable = this.state.table[0].map( () => '');

  this.setState({
    table: [...this.state.table, addRowToTable]
  }); 
}

// const removeRow = context => event => {
//   event.preventDefault();

//   if (context.state.table.length > 1) {
//     const updatedTable = context.state.table.slice(0, -1);

//     context.setState({
//       table: updatedTable
//     });
//   }
// }

const removeRow = function(event) {
  event.preventDefault();

  if (this.state.table.length > 1) {
    const updatedTable = this.state.table.slice(0, -1);

    this.setState({
      table: updatedTable
    });
  }
}

// const removeColumn = context => event => {
//   event.preventDefault();

//   if (context.state.table[0].length > 1) {
//     const updatedTable = context.state.table.map(row => row.slice(0, -1));

//     context.setState({
//       table: updatedTable
//     });
//   }
// }

const removeColumn = function(event) {
  event.preventDefault();

  if (this.state.table[0].length > 1) {
    const updatedTable = this.state.table.map(row => row.slice(0, -1));

    this.setState({
      table: updatedTable
    });
  }
}

const changeCell = function(row, column, event) {
  let updatedCell = [...this.state.table[row]];
  updatedCell.splice(column, 1, event.target.value)

  const updatedTable = [...this.state.table.slice()];
  updatedTable.splice(row, 1, updatedCell);

  this.setState({
    table: updatedTable
  });
}

const focusCell = function(row, column) {
  this.setState({
    focused: [row, column]
  });
}

const blurCell = function() {
  this.setState({
    focused: null
  });
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
