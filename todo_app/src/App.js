import { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoTask from './components/TodoTask/TodoTask';

function App() {
	const [todoItems, setTodoItems] = useState([]);

	useEffect(() => {
		console.log(todoItems);
	}, [todoItems]);

	return (
		<div className='container'>
			<div className='wrapper'>
				<h1 className='title'>TODO APP</h1>

				<TodoInput
					todoItems={todoItems}
					setTodoItems={setTodoItems}
				/>
				<TodoTask todoItems={todoItems} setTodoItems={setTodoItems} />
			</div>
		</div>
	);
}

export default App;
