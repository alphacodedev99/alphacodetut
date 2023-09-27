import React from 'react';

import './todotask.css';

function TodoTask({ todoItems, setTodoItems }) {
	function handleDeleteTodo(id) {
		let removeTodo = todoItems.filter((todo) => todo.id !== id);

		setTodoItems(removeTodo);
	}

	return (
		<div className='todotask_container'>
			{todoItems.length > 0 ? (
				todoItems.map((todo) => {
					return (
						<div className='todo_item' key={todo.id}>
							<h3>{todo.title}</h3>
							<button onClick={() => handleDeleteTodo(todo.id)}>
								Remove
							</button>
						</div>
					);
				})
			) : (
				<h2 className='empty_list'>Todo Lists Is Empty</h2>
			)}
		</div>
	);
}

export default TodoTask;
