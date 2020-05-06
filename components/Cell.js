"use strict"

const React = require("react")

class Cell extends React.Component {
	render () {
		const {cell, onChange, onFocus} = this.props

		return (
			<td className="cell">
				<input value={cell} onChange={onChange} onFocus={onFocus} />
			</td>
		)
	}
}

module.exports = Cell
