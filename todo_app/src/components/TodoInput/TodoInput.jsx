import React, { useState } from 'react';
import './todoinput.css';

function TodoInput({ todoItems, setTodoItems }) {
	const [currentTodo, setCurrentTodo] = useState('');

	function handleTodoInput(event) {
		setCurrentTodo(event.target.value);
	}

	function handleAddTodo() {
		if (currentTodo) {
			setTodoItems([
				...todoItems,
				{ id: new Date().getTime(), title: currentTodo },
			]);
			setCurrentTodo('');
		} else {
			alert('Please enter something...');
		}
	}

	return (
		<div className='input_container'>
			<div className='todoinput'>
				<input
					className='textInput'
					type='text'
					placeholder='Insert Task...'
					value={currentTodo}
					onChange={(event) => handleTodoInput(event)}
				/>
				<button onClick={handleAddTodo}>Add Task</button>
			</div>
		</div>
	);
}

export default TodoInput;
