"use strict"

function addColumn (ev) {
	const prevTable = [...this.state.table];
	const table = prevTable.map(row => row.concat(""));

	ev.preventDefault();
	this.setState({table});
}

function addRow (ev) {
	const prevTable = [...this.state.table];
	const newRow = prevTable[0].map(col => "");
	const table = prevTable.concat([newRow]);

	ev.preventDefault();
	this.setState({table});
}

function changeCell (rowIndex, columnIndex, ev) {
	const table = [...this.state.table]

	table[rowIndex][columnIndex] = ev.target.value;
	this.setState({table});
}

function focusCell (rowIndex, columnIndex) {
	this.setState({
		focused: [rowIndex, columnIndex]
	})
}

function blurCell () {
	this.setState({
		focused: null
	})
}

function removeRow (ev) {
	const prevTable = [...this.state.table]

	ev.preventDefault();
	if (prevTable.length > 1) {
		const table = prevTable.slice(0, -1)

		this.setState({table})
	};
}

function removeColumn (ev) {
	const prevTable = [...this.state.table]

	ev.preventDefault();
	if (prevTable[0].length > 1) {
		const table = prevTable.map(row => row.slice(0, -1))

		this.setState({table})
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
}
