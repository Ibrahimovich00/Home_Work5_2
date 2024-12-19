import { useState, useEffect } from 'react';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const savedInput = localStorage.getItem('inputValue') || ''
		const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
		setInputValue(savedInput)
		setTasks(savedTasks)
	}, []);

	const handleChange = () => {
		const updatedTasks = [...tasks, inputValue]
		setTasks(updatedTasks)
		localStorage.setItem('tasks', JSON.stringify(updatedTasks))
		setInputValue('')
	};
   
	return (
		<div>
			<input
				type='text'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<button onClick={handleChange}>Enter</button>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>{task}</li>
				))}      
			</ul>
		</div>
	)
};

export default App;
