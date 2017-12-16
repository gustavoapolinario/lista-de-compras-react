import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
	<li
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		<input class="toggle" type="checkbox"
			onClick={onClick}
			checked={completed}
		/>
		{text}
	</li>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo
