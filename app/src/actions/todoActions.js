import * as actions from './actionTypes';
import _ from 'lodash';

export const addTodo = (text) => ({
	type: actions.TodoActions.ADD,
	todo: {
		id: _.uniqueId('todo_'),
		text,
		completed: false
	}
})

export const removeTodo = (id) => ({
	type: actions.TodoActions.REMOVE,
	id: id
})

export const toggleTodo = (id) => ({
	type: actions.TodoActions.TOGGLE,
	id: id
})
