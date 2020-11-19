import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filtered }) {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filtered.map((todo) => (
					<Todo
						setTodos={setTodos}
						todo={todo}
						todos={todos}
						key={todo.id}
						text={todo.text}
					/>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
