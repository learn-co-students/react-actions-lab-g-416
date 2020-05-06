"use strict"

const React = require("react");
const Row = require("./Row");

class Table extends React.Component {
	render () {
		const {table, onBlur, onChange, onFocus} = this.props

		return (
			<table className="table" onBlur={onBlur}>
				<tbody>
					{table.map((row, i) =>
						<Row key={i}
								 row={row}
								 onChange={onChange.bind(null, i)}
								 onFocus={onFocus.bind(null, i)} />
					)}
				</tbody>
			</table>
		)
	}
}

module.exports = Table
