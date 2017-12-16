import * as actions from '../actions/actionTypes';

const todos = (state = [], action) => {
	switch (action.type) {
		case actions.TodoActions.ADD:
			return [
				...state,
				{
					id: action.todo.id,
					text: action.todo.text,
					completed: false
				}
			]
		case actions.TodoActions.TOGGLE:
			return state.map(todo =>
				(todo.id === action.id) 
					? {...todo, completed: !todo.completed}
					: todo
			)
		default:
			return state
	}
}

export default todos
