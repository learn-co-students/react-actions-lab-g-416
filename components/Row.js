"use strict"

const React = require("react");
const Cell = require("./Cell");

class Row extends React.Component {
	render () {
		const {row, onChange, onFocus} = this.props

		return (
			<tr className="row">
				{row.map((cell, i) =>
					<Cell key={i}
								cell={cell}
								onChange={onChange.bind(null, i)}
								onFocus={onFocus.bind(null, i)} />
				)}
			</tr>
		)
	}
}

module.exports = Row
