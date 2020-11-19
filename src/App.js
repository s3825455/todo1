import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all");
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, filter]);

	function filterHandler() {
		switch (filter) {
			case "completed":
				setFiltered(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setFiltered(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFiltered(todos);
				break;
		}
	}

	function saveLocalTodos() {
		localStorage.setItem("todos", JSON.stringify(todos));
	}

	function getLocalTodos() {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
			setTodos(todoLocal);
		}
	}

	return (
		<div className="App">
			<header>
				<h1>Todo List</h1>
			</header>
			<Form
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
				setFilter={setFilter}
				filtered={filtered}
			/>
			<TodoList setTodos={setTodos} todos={todos} filtered={filtered} />
		</div>
	);
}

export default App;
